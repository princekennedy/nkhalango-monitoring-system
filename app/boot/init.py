import numpy
from skimage.feature import match_template
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

ImagenTotal = numpy.asarray(Image.open('boot/Rst/1.jpeg'))
# ImagenTotal = numpy.asarray(Image.open('boot/Rst/OlivoTotal.png'))
# here you choose in between small, medium, large or extra
ImagenTemplate = numpy.asarray(Image.open('boot/Rst/OlivoTemplate_small.png'))
# notice that we work with one band
imagen = ImagenTotal[:, :, 1]
arbol = ImagenTemplate[:, :, 1]
# print(arbol)


result = match_template(imagen, arbol)
ij = np.unravel_index(np.argmax(result), result.shape)
x, y = ij[::-1]

print(ij)