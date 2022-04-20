import pandas as pd
import os
import glob

path = 'c:/barchartrace/src/'
csv_files = glob.glob(os.path.join(path, "*.csv"))
lists = ["renewable1","patents1","patents2","startup1","startup2","startup3","startup4","startup5","startup6","startup7","startup8","startup9","startup10","startup11","startup12","google1","google2"]




# ,"renewable2","renewable3"
for x,y in zip(csv_files, lists):
    df = pd.read_csv(path+y+'.csv')
    df = df.rename(columns={"year":"Year","country_ISO3":"Country_ISO3"})
    df.to_json (path+y+'.json',orient="records")




