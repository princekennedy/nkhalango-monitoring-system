import os


def file_path(name, file):
    dir = {
        "video": 'storage/videos',
        "image": 'storage/images',
    }

    return str(os.path.abspath(dir.get(name)) + "/" + file)
