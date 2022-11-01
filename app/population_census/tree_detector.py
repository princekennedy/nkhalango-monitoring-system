from population_census.store_population import store_population

"""
 Analysis tree population from saved image
"""


def tree_analyzer(image_path: str, cv2: any, frame) -> int:
    # stores number of trees counted
    total_trees: int = 0

    # read the image
    image = cv2.imread(image_path)

    # B, G, R channel splitting
    blue, green, red = cv2.split(image)

    # detect contours using green channel and without thresholding
    contours2, hierarchy2 = cv2.findContours(image=green, mode=cv2.RETR_TREE, method=cv2.CHAIN_APPROX_NONE)
    # draw contours on the original image
    image_contour_green = image.copy()
    cv2.drawContours(image=image_contour_green, contours=contours2, contourIdx=-1, color=(0, 255, 0), thickness=2,
                     lineType=cv2.LINE_AA)
    # see the results
    cv2.imshow('Contour detection using green channels only', image_contour_green)
    cv2.waitKey(0)
    cv2.imwrite('green_channel.jpg', image_contour_green)
    cv2.destroyAllWindows()

    # store tree population
    store_population(total=total_trees)

    return total_trees
