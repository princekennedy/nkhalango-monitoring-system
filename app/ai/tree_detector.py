from population_census.store_population import store_population
from __future__ import print_function
import cv2 as cv
import numpy as np
import argparse
import random as rng
import math

"""
 Analysis tree population from saved image
"""
def count_trees(image_path, save_path: str = 'storage/images/nms-update.png', threshold: int = 505):
    image = cv.imread(image_path | 'boot/imgs/2.jpeg')

    # // Use HSV color to threshold the image
    hsv_image = cv.cvtColor(image, cv.COLOR_BGR2HSV)  # rgb to hsv color space

    ## mask of green (36,0,0) ~ (70, 255,255)
    mask_of_green = cv.inRange(hsv_image, (36, 0, 0), (70, 255,255))

    # // Apply morphology
    element = cv.getStructuringElement(cv.MORPH_ELLIPSE, (5, 5))
    res = cv.morphologyEx(mask_of_green, cv.MORPH_ERODE, element)
    res = cv.morphologyEx(res, cv.MORPH_OPEN, element)

    # // Blending
    blurred = cv.blur(image, (3, 3))
    gray_image = cv.Canny(blurred, 100, 255)
    output = cv.addWeighted(res, 0.7, gray_image, 0.3, 0.0)
    contours = cv.findContours(output, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)[0]

    # Save the output image.
    cv.imwrite(save_path, res)

    image_data = load_image(save_path)
    totalTrees = analyzer(image_data, threshold)

    return totalTrees


def load_image(src):
    parser = argparse.ArgumentParser(
    description='Code for Creating Bounding boxes and circles for contours tutorial.')
    parser.add_argument('--input', help='Path to input image.', default='boot/imgs/tree-sampled.jpg')
    args = parser.parse_args()
    src = cv.imread(cv.samples.findFile(args.input))
    if src is None:
        print('Could not open or find the image:', args.input)
        exit(0)

    # Convert image to gray and blur it
    src_gray = cv.cvtColor(src, cv.COLOR_BGR2GRAY)
    src_gray = cv.blur(src_gray, (2, 2))

    return src_gray


def analyzer(image_path: str, threshold: int) -> int:
    threshold = threshold

    canny_output = cv.Canny(image_path, threshold, threshold * 2)

    contours, _ = cv.findContours(
    canny_output, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)

    contours_poly = [None]*len(contours)
    boundRect = [None]*len(contours)
    centers = [None]*len(contours)
    radius = [None]*len(contours)
    for i, c in enumerate(contours):
        contours_poly[i] = cv.approxPolyDP(c, 20, True)
        boundRect[i] = cv.boundingRect(contours_poly[i])
        centers[i], radius[i] = cv.minEnclosingCircle(contours_poly[i])

    drawing = np.zeros(
    (canny_output.shape[0], canny_output.shape[1], 3), dtype=np.uint8)

    treesRadii = []
    for i in range(len(contours)):
        color = (rng.randint(0, 256), rng.randint(0, 256), rng.randint(0, 256))

        cv.drawContours(drawing, contours_poly, i, color)

        if math.ceil(radius[i]) > 40:

            if math.ceil(radius[i]) not in treesRadii:
                treesRadii.append(math.ceil(radius[i]))
                cv.rectangle(drawing, (int(boundRect[i][0]), int(boundRect[i][1])), (int(boundRect[i][0]+boundRect[i][2]), int(boundRect[i][1]+boundRect[i][3])), color, 2)
                cv.circle(drawing, (int(centers[i][0]), int(
                centers[i][1])), int(radius[i]), color, 2)

    # cv.imshow('Contours', drawing)
    return treesRadii
