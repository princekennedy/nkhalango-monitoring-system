# Importing all necessary libraries
import cv2
import os
from datetime import date
from utils.folders import file_path


def video_to_image(file_name):
    # folders
    videos_folder = 'storage/videos'
    images_folder = 'storage/images'

    try:
        # creating a folder named data
        if not (os.path.exists(videos_folder) and os.path.exists(images_folder)):
            os.makedirs(videos_folder)
            os.makedirs(images_folder)
    # if not created then raise error
    except OSError:
        print('Error: Creating directory of data')

    # get video path
    video = cv2.VideoCapture(file_path("video", file_name))

    # reading from frame
    ret, frame = video.read()

    try:
        # if video is still left continue creating images
        name = images_folder + str(date.day) + '.jpg'
        print('Creating...' + name)

        # writing the extracted images
        cv2.imwrite(name, frame)
    finally:
        print("An error occurred")

    # Release all space and windows once done
    video.release()
