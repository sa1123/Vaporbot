from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import re
import random
import numpy

def getmeme():

    url = Request(('https://www.memedroid.com/memes/detail/' + str(random.randint(1,3022500))), headers={'User-Agent': 'Mozilla/5.0'})
    
    try:
        html = urlopen(url).read()

        bs = BeautifulSoup(html, 'html.parser')

        image = bs.find(id = "detailed-item-image-container")

        imgurl = image['src']

        print(imgurl)
    
    except NameError:
        getmeme()

    except KeyError:
        getmeme()

getmeme()

