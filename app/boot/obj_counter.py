import cv2
import numpy as np
import matplotlib.pyplot as plt
import cvlib as cv
from cvlib.object_detection import draw_bbox
from numpy.lib.polynomial import poly

import os
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
os.environ['TF_FORCE_GPU_ALLOW_GROWTH'] = 'true'

# img = cv2.imread('image1.jpg')
img = cv2.imread('boot/Rst/OlivoTotal.png')
img1 = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
""" plt.figure(figsize=(10,10))
plt.axis('off')
plt.imshow(img1)
plt.show() """

box, label, count = cv.detect_common_objects(img)
output = draw_bbox(img, box, label, count)

""" output = cv2.cvtColor(output,cv2.COLOR_BGR2RGB)
plt.figure(figsize=(10,10))
plt.axis('off')
plt.imshow(output)
plt.show() """

print("Number of objects in this image are " + str(len(label)))
