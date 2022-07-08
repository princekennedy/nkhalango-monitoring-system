# packages
import cv2
from utils.folders import file_path
from datetime import datetime


def start_camera():
    try:
        # open the webcam video stream
        webcam = cv2.VideoCapture(0)

        # fourcc = cv2.VideoWriter_fourcc(*'MP42')
        fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')

        # open output video file stream
        file_name = "nms-" + datetime.now().strftime("%H-%M-%S") + '-capture.mp4'
        video = cv2.VideoWriter(file_path("video", file_name), fourcc, 25.0, (640, 480))

        # main loop
        while webcam.isOpened():
            # get the frame from the webcam
            stream_ok, frame = webcam.read()

            # if webcam stream is ok
            if stream_ok:
                # display current frame
                cv2.imshow('Nkhalango Monitoring System Camera', frame)

                # write frame to the video file
                video.write(frame)

            # escape condition
            if cv2.waitKey(1) & (0xFF == 27): break

        # release web camera stream
        webcam.release()

        # release video output file stream
        video.release()

        # clean-ups
        cv2.destroyAllWindows()

        # return path
    except KeyboardInterrupt:
        print("Camera stopped")

