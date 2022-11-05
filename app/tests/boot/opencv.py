import cv2
import numpy as np
def viewImage(image):
    cv2.namedWindow('Display', cv2.WINDOW_NORMAL)
    cv2.imshow('Display', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


def grayscale_17_levels (image):
    high = 255
    while(1):  
        low = high - 15
        col_to_be_changed_low = np.array([low])
        col_to_be_changed_high = np.array([high])
        curr_mask = cv2.inRange(gray, col_to_be_changed_low,col_to_be_changed_high)
        gray[curr_mask > 0] = (high)
        high -= 15
        if(low == 0 ):
            break


# image = cv2.imread('boot/Rst/OlivoTotal.png')
image = cv2.imread('boot/imgs/trees-1.jpg')

# Size of the image in pixels (size of original image)
# (This is not mandatory)
""" y=0
x=0
h=1000
w=2000
image = image[y:y+h, x:x+w] """

# image = cv2.imread('boot/imgs/m.jpeg')

""" hsv_img = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
green_low = np.array([45 , 100, 50] )
green_high = np.array([75, 255, 255])
curr_mask = cv2.inRange(hsv_img, green_low, green_high)
hsv_img[curr_mask > 0] = ([75,255,200]) """
# viewImage(hsv_img) ## 2

## converting the HSV image to Gray inorder to be able to apply 
## contouring
RGB_again = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
gray = cv2.cvtColor(RGB_again, cv2.COLOR_RGB2GRAY)

ret, threshold = cv2.threshold(gray, 115, 255, 1)
# _, threshold = cv2.threshold(gray, 115, 225, cv2.THRESH_BINARY)
# viewImage(threshold) ## 4 
# viewImage(gray) ## 4

# print(th reshold)

contours, hierarchy =  cv2.findContours(threshold, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(image, contours, -1, (0, 0, 255), 3)
viewImage(image) ## 5

print(len(contours))

# while contours:
	# print(contours)
	# contours = contours.h_next()
