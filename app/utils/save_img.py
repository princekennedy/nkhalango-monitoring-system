# Python code to read image
from datetime import datetime
import os
from utils.folders import file_path


def screenshot(frame, cv2):
    try:
        image = file_path("image", 'nms-' + str(datetime.now().strftime("%d-%m-%y-%H-%M-%S")) + '.jpg')
        cv2.imwrite(image, frame)
        return image
    except:
        print("Failed to take screenshot")
        exit(1)


def delete_file(path):
    # TODO delete the video after analysis
    if os.path.exists(path):
        os.remove(path)
    else:
        print("File does not exists.")
