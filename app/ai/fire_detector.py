import numpy as np
import cv2 as cv
from actuators.alarm_actuator import fire_alarm


"""
Gaussian filters have the properties of having no overshoot to a step function
input while minimizing the rise and fall time.
In terms of image processing, any sharp edges in images are
smoothed while minimizing too much blurring.
"""


def fire_analyzer(image, cv2, frame: any) -> bool:

    # Determine whether fire frames we detected or not
    fire_detected = False

    # Smoothing input source image
    blur: any = cv.GaussianBlur(frame, (21, 21), 0)

    hsv: any = cv.cvtColor(blur, cv.COLOR_BGR2HSV)

    lower = [18, 50, 50]
    upper = [35, 255, 255]
    lower = np.array(lower, dtype="uint8")
    upper = np.array(upper, dtype="uint8")
    mask: any = cv.inRange(hsv, lower, upper)

    no_red: any = cv.countNonZero(mask)

    if int(no_red) > 20000:
        fire_detected = True

    # set fire alarming process
    fire_alarm(fire_detected)

    return fire_detected
