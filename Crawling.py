#Selenium을 이용한 크롤링

#I. 환경설정
import datetime
import time
import warnings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys #키보드 입력을 위한 모듈
from selenium.webdriver.common.by import By #요소를 찾기 위한 모듈
from selenium.webdriver.support.ui import WebDriverWait #요소가 로드될 때까지 기다리기 위한 모듈
from selenium.webdriver.support import expected_conditions as EC #요소가 로드될 때까지 기다리기 위한 모듈
from selenium.common.exceptions import TimeoutException #요소가 로드되지 않을 때 예외처리를 위한 모듈
from selenium.webdriver.common.action_chains import ActionChains #마우스 이벤트를 위한 모듈
from selenium.webdriver.common.alert import Alert #alert창을 위한 모듈
from selenium.webdriver.support.ui import Select #드롭다운 메뉴를 위한 모듈
import os

warnings.filterwarnings('ignore')


#II. 크롤러 생성
class Crawler:
  def setup(self, path, imp_wait_time=10, load_time=10):
    self.driver = webdriver.Chrome(path)
    self.driver.implicitly_wait(imp_wait_time)
    self.driver.set_page_load_timeout(load_time)
    self.start_time = time.time()
    self.mask_data = {}

  def get_url(self, url, download_path ="C:\\Users\\Lenovo\\Downloads"):  # 페이지를 열어주는 메서드. url을 인자로 받습니다
    self.url = url
    self.driver.get(self.url)
    self.driver.maximize_window() # 창을 최대화 합니다

  def get_mask_data(self, xpath, section_xpath, review_xpath = None):
    if review_xpath != None:
      #click on review button
      review_button = self.driver.find_element(By.XPATH, review_xpath)
      review_button.click()
      time.sleep(1)

    #네이버 리뷰 10페이지씩 긁어오기
    for i in range(1, 11):
      #첫 리뷰 페이지 크롤링
      WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, xpath))) #페이지가 로드될 때까지 기다립니다
      mask_data = self.driver.find_element(By.XPATH, xpath)
      #해당 element의 text를 masK_data에 저장합니다
      #replace newline characters within mask_data.text
      
      self.mask_data[i] = mask_data.text.replace('\n', ' ').replace('평점', '\n평점').replace('리뷰펼치기', '')

      #다음 섹션번호로 넘어가기
      WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, section_xpath))) #페이지가 로드될 때까지 기다립니다
        #section_xpath의 번호를 1씩 증가시킵니다
      s_xpath = list(section_xpath)
      s_xpath[-2] = str(int(s_xpath[-2]) + 1)
      section_xpath = ''.join(s_xpath)

      next_section = self.driver.find_element(By.XPATH, section_xpath)
      next_section.click()
  

  def move_to_next_page(self, xpath):
    XPath = xpath  #xpath를 '다음'버튼으로 설정시 다음 버튼 클릭함
    WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.XPATH, XPath))) #페이지가 로드될 때까지 기다립니다
    next_page = self.driver.find_element(By.XPATH)
    next_page.click() #다음 페이지로 이동합니다

  #mask_data를 csv로 저장

  def export_data(self, filename, path= os.getcwd()):
    if os.path.exists(f'{path}\\{filename}'):
      with open(f'{path}\\{filename}', 'a', encoding='utf-8') as f:
        for i in range(1, 11):
          f.write(self.mask_data[i])
          f.write('\n')
    else:
      with open(f'{path}\\{filename}', 'w', encoding='utf-8') as f:
        for i in range(1, 11):
          f.write(self.mask_data[i])
          f.write('\n')

    
  def close(self):
    self.driver.close()


  

#III. 실행
if __name__ == '__main__' : #파이썬 파일을 직접 실행할 때만 실행되는 코드입니다. 이 코드를 실행하면, boxer_data에 복서들의 데이터가 저장됩니다
  crawler = Crawler()
  # chromedriver_path = input("크롬드라이버 경로를 지정해주세요. ex) 'C:\\Users\\Lenovo\\Downloads\\chromedriver.exe'")
  cpath = "C:\\Users\\Lenovo\\Downloads\\chromedriver.exe"
  crawler.setup(cpath)
  url = 'https://search.shopping.naver.com/catalog/30991506626?query=%EB%A7%88%EC%8A%A4%ED%81%AC%20%2B%EC%83%88%EB%B6%80%EB%A6%AC%ED%98%95%EB%A7%88%EC%8A%A4%ED%81%AC&NaPm=ct%3Dlb30cd14%7Cci%3D5dde7c701655637ab02fe2b11e3b6c3c88a0af62%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D830841b8b4ef884379a22ea9206f4f73150e04e1'
  
  crawler.get_url(url)
  xpath = '//*[@id="section_review"]/ul'
  review_xpath = '//*[@id="snb"]/ul/li[3]/a'
  section_xpath = '//*[@id="section_review"]/div[3]/a[2]'
  crawler.get_mask_data(xpath = xpath, section_xpath=section_xpath, review_xpath = review_xpath)
  move_next_xpath = '//*[@id="section_review"]/div[3]/a[12]'
  
  crawler.export_data(filename='data.csv')
  print(crawler.mask_data)


