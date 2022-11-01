#include "opencv2\opencv.hpp"
using namespace cv;

int main(int, char **)
{
	Mat3b img = imread("path_to_image");

	// Use HSV color to threshold the image
	Mat3b hsv;
	cvtColor(img, hsv, COLOR_BGR2HSV);

	// Apply a treshold
	// HSV values in OpenCV are not in [0,100], but:
	// H in [0,180]
	// S,V in [0,255]

	Mat1b res;
	inRange(hsv, Scalar(100, 80, 100), Scalar(120, 255, 255), res);

	// Negate the image
	res = ~res;

	// Apply morphology
	Mat element = getStructuringElement(MORPH_ELLIPSE, Size(5, 5));
	morphologyEx(res, res, MORPH_ERODE, element, Point(-1, -1), 2);
	morphologyEx(res, res, MORPH_OPEN, element);

	// Blending
	Mat3b green(res.size(), Vec3b(0, 0, 0));
	for (int r = 0; r < res.rows; ++r)
	{
		for (int c = 0; c < res.cols; ++c)
		{
			if (res(r, c))
			{
				green(r, c)[1] = uchar(255);
			}
		}
	}

	Mat3b blend;
	addWeighted(img, 0.7, green, 0.3, 0.0, blend);

	imshow("result", res);
	imshow("blend", blend);
	waitKey();

	return 0;
}