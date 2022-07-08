import os


def folder(name, file):
    folders = {
        "video": 'storage/videos',
    }

    return folders.get(name) + file
