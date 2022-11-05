import cv2
import numpy as np
# image = cv2.imread('boot/Rst/1.jpeg')
# image = cv2.imread('boot/imgs/4.jpeg')
image = cv2.imread('boot/imgs/trees-1.jpg')

# Fill the black background with white color
# cv2.floodFill(image, None, seedPoint=(0, 0), newVal=(0, 0, 0), loDiff=(2, 2, 2), upDiff=(2, 2, 2))  # Not working!

hsv_img = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)  # rgb to hsv color space

s_ch = hsv_img[:, :, 1]  # Get the saturation channel

threshold = cv2.threshold(s_ch, 5, 255, cv2.THRESH_BINARY)[1]  # Apply threshold - pixels above 5 are going to be 255, other are zeros.
thesh = cv2.morphologyEx(threshold, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7)))  # Apply opening morphological operation for removing artifacts.

cv2.floodFill(thesh, None, seedPoint=(0, 0), newVal=128, loDiff=1, upDiff=1)  # Fill the background in thesh with the value 128 (pixel in the foreground stays 0.

image[thesh == 128] = (0, 0, 0)  # Set all the pixels where thesh=128 to red.

RGB_again = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
gray = cv2.cvtColor(RGB_again, cv2.COLOR_RGB2GRAY)

ret, threshold = cv2.threshold(gray, 255, 255, 255)

contours, hierarchy =  cv2.findContours(threshold, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(image, contours, -1, (0, 5, 255), 5)

print(len(contours))

cv2.imwrite('tulips_red_bg.jpg', image)  # Save the output image.
