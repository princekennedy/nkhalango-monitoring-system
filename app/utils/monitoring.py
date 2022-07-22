# packages
import os

import cv2
from utils.folders import file_path
from datetime import datetime

from fire_detector import fire_analyzer
from tree_detector import tree_analyzer

from utils.config import ANALYSIS_TIMEOUT
from utils.save_img import screenshot, delete_file


def start_camera():
    print("Camera started...")
    file_name = "nms-" + datetime.now().strftime("%H-%M-%S") + '-capture.mp4'

    try:
        # open the webcam video stream
        webcam = cv2.VideoCapture(0)

        # fourcc = cv2.VideoWriter_fourcc(*'MP42')
        fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')

        # open output video file stream
        video = cv2.VideoWriter(file_path("video", file_name), fourcc, 25.0, (640, 480))

        # time to control the execution of
        # fire detector
        camera_active_time = 0

        # keep the camera on
        while webcam.isOpened():
            # get the frame from the webcam
            stream_ok, frame = webcam.read()

            # if webcam stream is ok
            if stream_ok:
                # display current frame
                cv2.imshow('Nkhalango Monitoring System Camera', frame)

                # from frame capture an image and analysis fire frames
                if camera_active_time == ANALYSIS_TIMEOUT:
                    # take screenshot from the give video / frame
                    saved_image = screenshot(frame, cv2)
                    print(saved_image)
                    tree_census = tree_analyzer(saved_image)
                    fire_detected = fire_analyzer(saved_image, cv2, frame)

                    # start timeout again
                    camera_active_time = 0

                    # Free up space by removing the image
                    delete_file(saved_image)

                # write frame to the video file
                # video.write(frame)

            # escape condition
            if cv2.waitKey(1) & (0xFF == 27):
                break

            camera_active_time += 1

        # release web camera stream
        webcam.release()

        # release video output file stream
        video.release()

        # clean-ups
        cv2.destroyAllWindows()
        return file_name
    except KeyboardInterrupt:
        print("Camera stopped!")
        delete_file(file_path("video", file_name))
        return file_name
