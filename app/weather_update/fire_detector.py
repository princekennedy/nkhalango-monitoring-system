import numpy as np
import RPi.GPIO as GPIO


# def fire_alarm(status=False, pin=4):
def fire_alarm(status: bool = False, pin: int = 4) -> None:
    DHTPin: int = 3

    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT, initial=GPIO.LOW)

    if status:
        GPIO.output(DHTPin, GPIO.HIGH)
    else:
        GPIO.output(DHTPin, GPIO.LOW)


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
    blur: any = cv2.GaussianBlur(frame, (21, 21), 0)

    hsv: any = cv2.cvtColor(blur, cv2.COLOR_BGR2HSV)

    lower = [18, 50, 50]
    upper = [35, 255, 255]
    lower = np.array(lower, dtype="uint8")
    upper = np.array(upper, dtype="uint8")
    mask: any = cv2.inRange(hsv, lower, upper)

    # output = cv2.bitwise_and(frame, hsv, mask=mask)
    no_red: any = cv2.countNonZero(mask)

    # TODO:: delete the code on RPi
    # display the image after being analysed
    # cv2.imshow("Fire detector", output)

    if int(no_red) > 20000:
        fire_detected = True

    # send data to server
    # store_weather_update(fire_detected)

    # set fire alarming process
    fire_alarm(fire_detected)

    return fire_detected
