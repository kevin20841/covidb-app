import firebase_admin
import numpy as np
from io import StringIO
import pandas as pd
from firebase_admin import credentials
from firebase_admin import firestore

# Loads in specific L1 heading
df = pd.read_csv('culture_data_v2.csv', sep=',',header=None)
df.fillna("", inplace=True)
data = df.values[:, 1:11]

data_headers = data[0]
data = data[1:33]
print(data)
# Use a service account
cred = credentials.Certificate(r'C:\Users\Kevin\covidb-70de9-firebase-adminsdk-9n65e-cce28b9660.json')
firebase_admin.initialize_app(cred)

db = firestore.client()
entry = data[0]
for entry in data:
    doc_ref = db.collection(u'articles').document(u'root').collection("Culture").document(entry[0])
    d = dict(zip(data_headers, entry))
    d[u'Time added'] = firestore.SERVER_TIMESTAMP
    doc_ref.set(d)

