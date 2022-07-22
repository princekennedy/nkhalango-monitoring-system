import os


def file_path(mime, file):
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

    folders = {
        "video": videos_folder,
        "image": images_folder,
    }

    return str(os.path.abspath(folders.get(mime)) + "/" + file)
