from PIL import Image
import numpy as np
from skimage import data
import matplotlib.pyplot as plt
from skimage.feature import match_template
import cv2

ImagenTotal = np.asarray(Image.open('boot/Rst/OlivoTotal.png'))

print(ImagenTotal)

# multiple sizes: small, medium, large or extra
ImagenTemplateSmall = np.asarray(Image.open('boot/Rst/OlivoTemplate_small.png'))

ImagenTemplateMedium = np.asarray(
    Image.open('boot/Rst/OlivoTemplate_medium.png'))
ImagenTemplateLarge = np.asarray(Image.open('boot/Rst/OlivoTemplate_large.png'))
ImagenTemplateExtra = np.asarray(Image.open('boot/Rst/OlivoTemplate_extra.png'))

# notice that we work with one band
imagen = ImagenTotal[:, :, 1]
arbolsmall = ImagenTemplateSmall[:, :, 1]
arbolmedium = ImagenTemplateMedium[:, :, 1]
arbollarge = ImagenTemplateLarge[:, :, 1]
arbolextra = ImagenTemplateExtra[:, :, 1]

fig = plt.figure(figsize=(8, 1.8))
ax1 = plt.subplot(1, 4, 1)
ax2 = plt.subplot(1, 4, 2, sharex=ax1, sharey=ax1)
ax3 = plt.subplot(1, 4, 3, sharex=ax1, sharey=ax1)
ax4 = plt.subplot(1, 4, 4, sharex=ax1, sharey=ax1)

ax1.imshow(arbolsmall, cmap=plt.cm.gray)
ax1.set_title('small')

ax2.imshow(arbolmedium, cmap=plt.cm.gray)
ax2.set_title('medium')

ax3.imshow(arbollarge, cmap=plt.cm.gray)
ax3.set_title('large')

ax4.imshow(arbolextra, cmap=plt.cm.gray)
ax4.set_title('extra')
# creating results for every tree type
# small
resultsmall = match_template(imagen, arbolsmall)

# print(resultsmall)

resultsmallquery = np.where(resultsmall > 0.85)
# medium
resultmedium = match_template(imagen, arbolmedium)
resultmediumquery = np.where(resultmedium > 0.85)
# large
resultlarge = match_template(imagen, arbollarge)
resultlargequery = np.where(resultlarge > 0.85)
# extra
resultextra = match_template(imagen, arbolextra)
resultextraquery = np.where(resultextra > 0.85)

cv2.imshow("s",ImagenTotal[10:-10, 10:-10, :])
cv2.waitKey(0)
# cv2.destroyAllWindows()

"""
def listapuntos(result):
    xlist = []
    ylist = []
    for punto in range(shape(result)[1]):
        xlist.append(result[1][punto])
        ylist.append(result[0][punto])
    return xlist, ylist


# show the interpreted results
# small
plot(listapuntos(resultsmallquery)[0], listapuntos(resultsmallquery)[1], 'o',
     markeredgecolor='g', markerfacecolor='none', markersize=10, label="small")
# medium
plot(listapuntos(resultmediumquery)[0], listapuntos(resultmediumquery)[1], 'o',
     markeredgecolor='r', markerfacecolor='none', markersize=10, label="medium")
# large
plot(listapuntos(resultlargequery)[0], listapuntos(resultlargequery)[1], 'o',
     markeredgecolor='b', markerfacecolor='none', markersize=10, label="large")
# extra
plot(listapuntos(resultextraquery)[0], listapuntos(resultextraquery)[1], 'o',
     markeredgecolor='y', markerfacecolor='none', markersize=10, label="extra")
imshow(ImagenTotal[10:-10, 10:-10, :])
legend(loc='center left', bbox_to_anchor=(1, 0.5))
# figure(figsize=(12,12));
figsize(24, 24)
"""
