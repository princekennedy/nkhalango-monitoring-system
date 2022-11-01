try:
    from utils.monitoring import start_camera
    from utils.folders import file_path
    from utils.save_img import screenshot, delete_file
    from utils.config import ANALYSIS_TIMEOUT, DHT_PORT, SOIL_SENSOR_PORT

    from weather_update.fire_detector import fire_analyzer
    from weather_update.store_weather_updates import store_weather_updates
    from weather_update.dht11_sensor import read_th

    from population_census.tree_detector import tree_analyzer

    from lab_session.read_soil_m import read_soil_moisture
    from lab_session.store_lab_session import store_lab_session

except ModuleNotFoundError as e:
    print(e.msg)
    exit(1)


def record_lab_session():
    # on SWITCH ON get probe value from soil sensor
    moisture = read_soil_moisture(SOIL_SENSOR_PORT)

    return store_lab_session(moisture=moisture)


# TODO:: check and update user work
def update_user_work():
    pass


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
                cv2.imshow('Nkhalango Monitoring System Camera', frame)

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

                    # prepare params for weather
                    # read fire frames and smoke
                    fire_status = fire_analyzer(
                        image=saved_image,
                        cv2=cv2,
                        frame=frame
                    )

                    # read temperature and humidity
                    temperature, humidity = read_th(port=DHT_PORT)

                    # store resource data
                    store_weather_updates(
                        temperature=temperature,
                        humidity=humidity,
                        fire_status=fire_status
                    )

                    # Free up space by removing the image
                    delete_file(saved_image)

                    print("Data saved")

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
