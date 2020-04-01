from selenium import webdriver
from signal import signal, SIGINT
from bs4 import BeautifulSoup
import sys
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def handler():
    driver.close()

if __name__ == '__main__':
    # Tell Python to run the handler() function when SIGINT is recieved
    signal(SIGINT, handler)
    if len(sys.argv) >= 2 and sys.argv[1] == "-h":
        print("Usage:"
              "no args: runs on cached values"
              "-h: help"
              "-u freq: update frequency in minutes (default 3 minutes)"
              "-c path_to_certificate: firebase certificate path. Cached."
              "-d path_to_driver: Chrome driver path. Cached."
              "-v: verbose output")
        sys.exit()
    f = open(".scrape_cache.txt", "r+")
    file = f.read().split("\n")
    if len(file) < 2 and "-c" not in sys.argv and "-d" not in sys.argv:
        print("No cache found: needs certificate path and chrome driver path.")
        sys.exit()
    driver_location = file[0]
    cred = file[1]

    if "-c" in sys.argv:
        cred = sys.argv[sys.argv.index("-c") + 1]
    if "-d" in sys.argv:
        cred = sys.argv[sys.argv.index("-d") + 1]
    verbose = False
    if "-v" in sys.argv:
        verbose = True
    f.seek(0)
    f.write(driver_location + "\n" + cred)
    f.truncate()
    f.close()

    update_freq = 5
    if "-u" in sys.argv:
        update_freq = sys.argv[sys.argv.index("-u") + 1] * 60



    options = webdriver.ChromeOptions()
    options.add_argument('headless')

    driver = webdriver.Chrome(driver_location, options=options)
    driver.get("https://www.arcgis.com/apps/opsdashboard/index.html#/5c7f096096ed482395f6a626150366e2")

    print('Running once every ' + str(update_freq/60) + ' minutes. Press CTRL-C to exit.')

    cred = credentials.Certificate(cred)
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    count = 0
    while True:
        time.sleep(update_freq)
        count +=1
        html = BeautifulSoup(driver.execute_script("return document.body.outerHTML;"), features="html.parser")
        text = html.find_all('text')
        res = []
        for t in text:
            res.append(t.contents[0])
        doc_ref = db.collection(u'Live Case Data').document('current')
        doc_ref.set(
            {
                res[0]:res[1],
                res[2]:res[3],
                res[4]:res[5]
            }
        )
        if verbose:
            print("Time elapsed: " + str(count * update_freq/60) + "minutes.")
            print(res[0] + ":" +res[1])
            print(res[2] + ":" + res[3])
            print(res[4] + ":" + res[5])
            print()
        driver.refresh()
