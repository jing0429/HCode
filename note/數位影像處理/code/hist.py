
import cv2
import matplotlib.pyplot as plt
import numpy as np 
from typing import List 

class Histogram:
    def __init__(self, path: str) -> None:
        self.img = cv2.imread(path, 0)  # 以灰階方式讀取
        self.rows, self.cols = self.img.shape  # 行數及列數
        self.histogram=self.draw_histogram(self.img,"cat_hist")
        self.histogram_equalization()
    def draw_histogram(self, img: cv2.Mat,file_name:str) -> List[int]:
        histogram = [0 for i in range(256)]  # 用來儲存0-255的像素個數
        for row in range(self.rows):
            for col in range(self.cols):
                pixel = img[row][col]
                histogram[pixel] += 1
        x_axis = [i for i in range(256)]  # 用來繪圖的x軸
        plt.clf()
        plt.plot(x_axis, histogram )
        plt.savefig(file_name)
        return histogram

    def histogram_equalization(self) -> None:
        total_pixels = self.rows * self.cols  # 總像素數=行數*列數
        min_accumulate = -1  # 最低累積
        cur_pixel=0 #累積pixel
        transfer_table = [i for i in range(256)]  # 紀錄轉換後的值
        for i in range(len(self.histogram)):#計算轉換值 

            if self.histogram[i] and min_accumulate == -1:  # 還沒遇過像素
                min_accumulate = self.histogram[i]
            cur_pixel += self.histogram[i]
            transfer_table[i] = int((cur_pixel-min_accumulate)/total_pixels * 255)
        self.equalize_image= np.zeros((self.rows,self.cols),dtype=np.uint8)
        for row in range(self.rows):#依照轉換值得到新圖片
            for col in range(self.cols):
                self.equalize_image[row][col]= transfer_table[self.img[row][col]]
        cv2.imwrite("equalize_cat.png",self.equalize_image)
        self.equalize_histogram= self.draw_histogram(self.equalize_image,"cat_equalize_hist")
        

Histogram("../img/cat.jpeg")
