import numpy as np


def fire_alarm():
    # TODO set alarm
    pass


"""
Gaussian filters have the properties of having no overshoot to a step function
input while minimizing the rise and fall time.
In terms of image processing, any sharp edges in images are
smoothed while minimizing too much blurring.
"""


def fire_analyzer(image, cv2, frame):

    # Determine whether fire frames we detected or not
    fire_detected = False

    # Smoothing input source image
    blur = cv2.GaussianBlur(frame, (21, 21), 0)

    hsv = cv2.cvtColor(blur, cv2.COLOR_BGR2HSV)

    lower = [18, 50, 50]
    upper = [35, 255, 255]
    lower = np.array(lower, dtype="uint8")
    upper = np.array(upper, dtype="uint8")
    mask = cv2.inRange(hsv, lower, upper)

    output = cv2.bitwise_and(frame, hsv, mask=mask)
    no_red = cv2.countNonZero(mask)

    # TODO:: delete the code on RPi
    # display the image after being analysed
    cv2.imshow("Fire detector", output)

    if int(no_red) > 20000:
        fire_detected = True

    # send data to server
    # store_weather_update(fire_detected)

    # TODO alarm controller
    # set fire alarming process
    fire_alarm()

    return fire_detected
