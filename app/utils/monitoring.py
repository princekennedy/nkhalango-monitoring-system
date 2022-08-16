# packages
import cv2
from utils.folders import file_path
from datetime import datetime


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

        return [
            webcam,
            video,
            cv2,
            file_name
        ]

    except KeyboardInterrupt:
        print("Camera stopped!")
