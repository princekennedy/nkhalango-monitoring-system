try:
    from utils.monitoring import start_camera
    from utils.folders import file_path
    from utils.save_img import screenshot, delete_file
    from utils.config import ANALYSIS_TIMEOUT, DHT_PORT, SOIL_SENSOR_PORT

    from ai.fire_detector import fire_analyzer
    from sensors.dht11_sensor import read_th

    from ai.tree_detector import count_trees

    from api.general import store as save_data

except ModuleNotFoundError as e:
    print(e.msg)
    exit(1)


def illuminate():
    # time to control the execution of
    # fire detector
    camera_active_time = 0

    """
    Start the system camera when use press start monitoring Switch Button
    Make all system analysis
    Then, send every response to server
    """
    webcam, video, cv2, file_name = start_camera()

    try:
        # keep the camera on
        while webcam.isOpened():
            # get the frame from the webcam
            stream_ok, frame = webcam.read()

            if stream_ok:  # if webcam stream is ok

                # TODO: Remove the below code on Rpi
                # display current frame
                # cv2.imshow('Nkhalango Monitoring System Camera', frame)

                # Do all the callbacks
                if camera_active_time == ANALYSIS_TIMEOUT:
                    # take screenshot from the give video / frame
                    saved_image = screenshot(frame=frame, cv2=cv2)

                    # analysis trees from the picture saved
                    # Send the data to an api
                    total_trees = count_trees(image_path=saved_image)

                    # prepare params for weather
                    # read fire frames and smoke
                    fire_status = fire_analyzer(
                        image=saved_image,
                        cv2=cv2,
                        frame=frame
                    )

                    # read temperature and humidity
                    temperature, humidity = read_th(port=DHT_PORT)

                    data = {
                        "temperature": temperature,
                        "humidity": humidity,
                        "fire_status":fire_status,
                        "tree_population": total_trees
                    }

                    # store resource data
                    response = save_data(params=data)

                    if response["status"] == True:
                        print(response["message"])
                        # Free up space by removing the image
                        delete_file(saved_image)
                    else:
                        print("Something went wrong!")

                    # start timeout again
                    camera_active_time = 0

                # TODO:: delete below code on RPi
                # write frame to the video file
                # video.write(frame)

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
