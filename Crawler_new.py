#Selenium을 이용한 크롤링

#I. 환경설정
import datetime
import time
import warnings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys #키보드 입력을 위한 모듈
from selenium.webdriver.common.by import By #요소를 찾기 위한 모듈
from selenium.webdriver.support import expected_conditions as EC #요소가 로드될 때까지 기다리기 위한 모듈
from selenium.common.exceptions import TimeoutException #요소가 로드되지 않을 때 예외처리를 위한 모듈
from selenium.webdriver.common.action_chains import ActionChains #마우스 이벤트를 위한 모듈

import os
import csv

warnings.filterwarnings('ignore')


driver = webdriver.Chrome('C:\\Users\\Lenovo\\Downloads\\chromedriver.exe')
driver.implicitly_wait(3)

url = 'https://smartstore.naver.com/blueindus/products/5488965225?NaPm=ct%3Dlb37xlg8%7Cci%3D3f1df9bd76b80e9a7b10b33335c88cfd89747fee%7Ctr%3Dslsl%7Csn%3D2479543%7Chk%3Ddad1a5d28fccb7a8163f989bca4d37cd044aa5d6#REVIEW'
driver.get(url)
time.sleep(1)

xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/ul' #리뷰 텍스트 xpath
review_xpath = '//*[@id="content"]/div/div[3]/div[3]/ul/li[2]/a' #리뷰 탭
next_xpath = '//*[@id="REVIEW"]/div/div[3]/div[2]/div/div/a[8]' #'다음' 버튼 xpath
filename = 'review.csv' #저장할 파일명
pages = 10 #몇 페이지 크롤링?
driver.find_element(By.XPATH, review_xpath).click()
time.sleep(1)

def get_review(xpath, next_xpath, num, filename):
  count = 0
  #if file with filename exist
  if os.path.isfile(filename):
    with open(filename, 'w', encoding='utf-8') as f:
      for i in range(num):
        review_data = []
        reviews = driver.find_elements(By.XPATH, xpath)
        for review in reviews:
          review_data.append(review.text)
        #write to file using csvwriter
        writer = csv.writer(f)
        writer.writerow(review_data)

      if count < 4:
        driver.find_element(By.XPATH, next_xpath).click()
        next_xpath = next_xpath[:-2] + str(int(next_xpath[-2]) + 1) + next_xpath[-1]
        count += 1
      else:
        new_next_xpath = next_xpath[:-3] + str(12) + "]"
        driver.find_element(By.XPATH, new_next_xpath).click()

  else :
    with open(filename, 'a', encoding='utf-8') as f:
      for i in range(num):
        review_data = []
        reviews = driver.find_elements(By.XPATH, xpath)
        for review in reviews:
          review_data.append(review.text.replace('\n', ' ').replace('리뷰 더보기 /접기', '').replace('평점', '\n평점'))
        #write to file using csvwriter
        writer = csv.writer(f)
        writer.writerow(review_data)

        if count < 4:
          driver.find_element(By.XPATH, next_xpath).click()
          next_xpath = next_xpath[:-2] + str(int(next_xpath[-2]) + 1) + next_xpath[-1]
          count += 1
        else:
          new_next_xpath = next_xpath[:-3] + str(12) + "]"
          driver.find_element(By.XPATH, new_next_xpath).click()

    
#실행
get_review(xpath, next_xpath , pages , filename)


