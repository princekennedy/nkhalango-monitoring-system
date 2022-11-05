import cv2
import numpy as np


def viewImage(image):
    cv2.namedWindow('Display', cv2.WINDOW_NORMAL)
    cv2.imshow('Display', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


image = cv2.imread('boot/imgs/trees-1.jpg')

rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) # output is colored image
gray_image = cv2.cvtColor(rgb_image, cv2.COLOR_RGB2GRAY)

blurred = cv2.blur(image, (2,1))
canny = cv2.Canny(blurred, 50, 255)
# canny = cv2.Canny(blurred, 100, 220)

viewImage(canny)