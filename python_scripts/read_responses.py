import firebase_admin
import numpy as np
from io import StringIO
import pandas as pd
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate(r'C:\Users\Kevin\covidb-70de9-firebase-adminsdk-9n65e-cce28b9660.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

response=  db.collection(u'Responses')