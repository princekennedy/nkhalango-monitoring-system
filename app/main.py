from utils.monitoring import start_camera
from utils.folders import file_path
from utils.save_img import screenshot, delete_file
from utils.config import ANALYSIS_TIMEOUT
from population_census.tree_detector import tree_analyzer

# time to control the execution of
# fire detector
camera_active_time: int = 0
webcam, video, cv2, file_name = start_camera()

try:
    # keep the camera on
    while webcam.isOpened():
        # get the frame from the webcam
        stream_ok, frame = webcam.read()

        if stream_ok:  # if webcam stream is ok

            # Do all the callbacks
            if camera_active_time == ANALYSIS_TIMEOUT:
                # take screenshot from the give video / frame
                saved_image = screenshot(frame=frame, cv2=cv2)

                # analysis trees from the picture saved
                # Send the data to an api
                total_trees = tree_analyzer(
                    image_path=saved_image,
                    cv2=cv2,
                    frame=frame
                )

                # Free up space by removing the image
                delete_file(saved_image)

                print("Data saved")

                # start timeout again
                camera_active_time = 0

        # escape condition
        if cv2.waitKey(1) & (0xFF == 27):
            print("Camera stopped!")
            break

        camera_active_time += 1

    # release web camera stream
    webcam.release()
    # release video output file stream
    video.release()
    # clean-ups
    cv2.destroyAllWindows()

except KeyboardInterrupt:
    delete_file(file_path(mime="video", file=file_name))
    print("Camera closed")
