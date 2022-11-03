import cv2
import numpy as np

image = cv2.imread('boot/imgs/2.jpeg')

# // Use HSV color to threshold the image
""" Mat3b hsv;
cvtColor(img, hsv, COLOR_BGR2HSV); """
hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)  # rgb to hsv color space

# // Apply a treshold
# // HSV values in OpenCV are not in [0,100], but:
# // H in [0,180]
# // S,V in [0,255]

""" Mat1b res;
inRange(hsv, Scalar(100, 80, 100), Scalar(120, 255, 255), res); """
## mask of green (36,0,0) ~ (70, 255,255)
mask_of_green = cv2.inRange(hsv_image, (36, 0, 0), (70, 255,255))

## mask fo yellow (15,0,0) ~ (36, 255, 255)
# mask_of_yellow = cv2.inRange(hsv_image, (15,0,0), (36, 255, 255))

# // Negate the image
# res = ~res;

# // Apply morphology
element = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
res = cv2.morphologyEx(mask_of_green, cv2.MORPH_ERODE, element)
# cv2.circle(img, (x1, y1), 3, (0, 255, 0), -1)
res = cv2.morphologyEx(res, cv2.MORPH_OPEN, element)

# // Blending
""" Mat3b green(res.size(), Vec3b(0, 0, 0));
for (int r = 0; r < res.rows; ++r)
{
	for (int c = 0; c < res.cols; ++c)
	{
		if (res(r, c))
		{
			green(r, c)[1] = uchar(255);
		}
	}
} 

Mat3b blend;
addWeighted(img, 0.7, green, 0.3, 0.0, blend);
"""

""" imshow("result", res);
imshow("blend", blend);
waitKey(); """

blurred = cv2.blur(image, (3, 3))
gray_image = cv2.Canny(blurred, 100, 255)

# # Mat3b blend;
output = cv2.addWeighted(res, 0.7, gray_image, 0.3, 0.0)
# cv2.addWeighted(src1, alpha, src2, beta, y)


""" count contourd """
# contours, hierarchy =  cv2.findContours(output, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

# cv2.RETR_LIST,cv2.CHAIN_APPROX_SIMPLE)

""" areas = [cv2.contourArea(c) for c in contours]
max_index = np.argmax(areas)
cnt=contours[max_index]
x,y = cv2.boundingRect(cnt)
cv2.circle(output, (x, y), 3, (0, 255, 0), -1) """

contours =   cv2.findContours(output, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)[0]

(x,y), r = cv2.minEnclosingCircle(contours[0])


print(len(contours))

cv2.imshow("result", res)
# cv2.imshow("result", output)
cv2.imwrite('tulips_red_bg.jpg', res)  # Save the output image.

cv2.waitKey(0)