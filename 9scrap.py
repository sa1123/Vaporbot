from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import re
import numpy

def getmeme():

    url = Request(('https://bit.ly/ShuffleNav'), headers={'User-Agent': 'Mozilla/5.0'})
    
    try:
        html = urlopen(url).read()

        bs = BeautifulSoup(html, 'html.parser')

        links = []

        for link in bs.find_all(href=True):
            links.append(link.get('href'))
  
        print(links[2])   
    
    except NameError:
        getmeme()

    except KeyError:
        getmeme()

getmeme()