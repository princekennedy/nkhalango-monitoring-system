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