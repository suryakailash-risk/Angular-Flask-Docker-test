# -*- coding: utf-8 -*-
"""Default api blueprints for Demo application."""

# from flask import  Flask, request, jsonify, make_response, send_file
# from flask import 
from ast import Return, Str
from googleapiclient.discovery import build
from google.oauth2 import service_account
from asyncio.windows_events import NULL
from concurrent.futures import process
from sqlalchemy import create_engine, asc
# from random import randint
# from itertools import count
# from tokenize import Double
from urllib import response
from flask import Flask, request, jsonify, make_response, send_file
from flask_sqlalchemy import SQLAlchemy
from js2py import import_js
from sqlalchemy import true
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
import datetime
#from waitress import serve
# from functools import wraps
from flask_cors import CORS, cross_origin
import base64
import json
import pandas as pd
# from decimal import Decimal
# from pathlib import Path
import typing
import os
import numpy as np
import string
# from flask_wtf.file import FileField
# from werkzeug.utils import secure_filename
import uuid
# from flask_sqlalchemy import SQLAlchemy

app = Flask('default', __name__)
db = SQLAlchemy(app)
SERVICE_ACCOUNT_FILE = 'keys.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
creds=None
creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

SAMPLE_SPREADSHEET_ID = '11ueTdQqAp_Xi-oCd2qvOcRbf7dYlaLf3oufBNzhxIUQ'

service = build('sheets', 'v4', credentials=creds)

sheet = service.spreadsheets()

generalPath = os.getcwd()

Upload_folder='cover/images/'
app.config['Upload_folder']=Upload_folder
class tamilbooklibrarydata(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    # id_number= db.Column(db.String(15500))	    
    isbn= db.Column(db.String(15500))	    
    ccno= db.Column(db.String(15500))	    	    
    subject_code= db.Column(db.Integer)	    	    
    sub_title_code= db.Column(db.String(15500)) 
    title_code= db.Column(db.String(15500))
    author_code= db.Column(db.Integer)	    
    language_code= db.Column(db.Integer)	    
    edition= db.Column(db.String(15500))	    
    reprint= db.Column(db.String(15500))	    
    year= db.Column(db.String(15500))	   
    copy_rights= db.Column(db.String(15500))	    
    size= db.Column(db.String(15500))	    
    pages= db.Column(db.String(15500))	    
    artist_code= db.Column(db.Integer)	    
    publisher_code= db.Column(db.Integer)	        
    binding= db.Column(db.String(15500))	    
    price= db.Column(db.String(15500))	   
    weight= db.Column(db.String(15500))	    	    
    annexures= db.Column(db.String(15500))	    
    prizes= db.Column(db.String(15500))	    
    miscellaneous= db.Column(db.String(15500))	    
    prepared_cheched_by= db.Column(db.String(15500))
    cover_image= db.Column(db.String())
    Summary_of_the_book= db.Column(db.String(15500))
    book_pdf= db.Column(db.String())
    created_by= db.Column(db.Integer)
    created_date= db.Column(db.DateTime(timezone=True))
    edited_by= db.Column(db.Integer)
    edited_date= db.Column(db.DateTime(timezone=True))	
    type_of_user= db.Column(db.String(15500))	
    category= db.Column(db.String(15500))	
    visibility= db.Column(db.String(15500))

    def json(self):
        return {
    "id":self.id, 
    # "id_number":self.id_number,
    "isbn":self.isbn,
    "ccno":self.ccno,
    "subject_code":self.subject_code,
    "sub_title_code":self.sub_title_code,
    "title_code":self.title_code,
    "author_code":self.author_code,
    "language_code":self.language_code,
    "edition":self.edition,
    "reprint":self.reprint,
    "year":self.year,
    "copy_rights":self.copy_rights,
    "size":self.size,
    "pages":self.pages,
    "artist_code":self.artist_code,
    "publisher_code":self.publisher_code,
    "binding":self.binding,
    "price":self.price,
    "weight":self.weight,
    "annexures":self.annexures,
    "prizes":self.prizes,
    "miscellaneous":self.miscellaneous,
    "prepared_cheched_by":self.prepared_cheched_by,
    "summary_of_the_book":self.Summary_of_the_book,	
    # "book_pdf":self.book_pdf,	
    "created_by":self.created_by,	
    "created_date":self.created_date,	
    "edited_by":self.edited_by,	
    "edited_date":self.edited_date,	
    "type_of_user":self.type_of_user,	
    "category":self.category,
    "visibility":self.visibility
    # "cover_image":self.cover_image
    }
    def json2(self):
        return {
    "id":self.id, 
    # "id_number":self.id_number,
    "isbn":self.isbn,
    "ccno":self.ccno,
    "subject_code":self.subject_code,
    "sub_title_code":self.sub_title_code,
    "title_code":self.title_code,
    "author_code":self.author_code,
    "language_code":self.language_code,
    "edition":self.edition,
    "reprint":self.reprint,
    "year":self.year,
    "copy_rights":self.copy_rights,
    "size":self.size,
    "pages":self.pages,
    "artist_code":self.artist_code,
    "publisher_code":self.publisher_code,
    "binding":self.binding,
    "price":self.price,
    "weight":self.weight,
    "annexures":self.annexures,
    "prizes":self.prizes,
    "miscellaneous":self.miscellaneous,
    "prepared_cheched_by":self.prepared_cheched_by,
    "Summary_of_the_book":self.Summary_of_the_book,	
    "book_pdf":self.book_pdf,	
    "created_by":self.created_by,	
    "created_date":self.created_date,	
    "edited_by":self.edited_by,	
    "edited_date":self.edited_date,	
    "type_of_user":self.type_of_user,	
    "category":self.category,
    "visibility":self.visibility,
    "cover_image":self.cover_image}

class admindata(db.Model):
    admin_id=db.Column(db.Integer, primary_key=True)
    admin_username= db.Column(db.String(15500))	    
    admin_email= db.Column(db.String(15500))	    
    admin_public_token= db.Column(db.String(15500))	    	    
    admin_password= db.Column(db.String(15500))	    	    
    admin_phone_number= db.Column(db.String(15500))
    admin_approver_id= db.Column(db.Integer)
    admin_created_date= db.Column(db.DateTime(timezone=True))	
    def json(self):
        return{
            "admin_id":self.admin_id,
            "admin_username":self.admin_username,
            "admin_email":self.admin_email,
            "admin_public_token":self.admin_public_token,  
    "admin_password":self.admin_password,
    "admin_phone_number":self.admin_phone_number,
    "admin_approver_id":self.admin_approver_id,
    "admin_created_date":self.admin_created_date
        }

class userdata(db.Model):
    user_id=db.Column(db.Integer, primary_key=True)
    user_username= db.Column(db.String(15500))	    
    user_email= db.Column(db.String(15500))	    
    user_public_token= db.Column(db.String(15500))	    	    
    user_password= db.Column(db.String(15500))	    	    
    user_phone_number= db.Column(db.String(15500)) 
    user_approver_id= db.Column(db.Integer)
    user_created_date= db.Column(db.DateTime(timezone=True))	
    user_status= db.Column(db.String(15500)) 
    user_profile_photo= db.Column(db.LargeBinary)
    def json(self):
        return{
                "user_id":self.user_id,
    "user_username":self.user_username,
    "user_email":self.user_email, 
    "user_public_token":self.user_public_token,    	    
    "user_password":self.user_password,  	    
    "user_phone_number":self.user_phone_number,
    "user_approver_id":self.user_approver_id,
    "user_created_date":self.user_created_date,
    "user_status":self.user_status ,
    "user_profile_photo":self.user_profile_photo
        }

class languagedata(db.Model):
    language_id=db.Column(db.Integer, primary_key=True)
    language_name= db.Column(db.String(15500))	    
    language_name_english= db.Column(db.String(15500))	    
    created_by= db.Column(db.Integer)
    created_date= db.Column(db.DateTime(timezone=True))	
    def json(self):
        return{
                "language_id":self.language_id,
    "language_name":self.language_name,	    
    "language_name_english":self.language_name_english,	    
    "created_by":self.created_by,
    "created_date":self.created_date	
        }

class subjectdata(db.Model):
    subject_id=db.Column(db.Integer, primary_key=True)
    subject_name= db.Column(db.String(15500))	    
    subject_name_english= db.Column(db.String(15500))	  
    branch= db.Column(db.String(15500))  
    # topic= db.Column(db.String(15500))
    # category= db.Column(db.String(15500))
    created_by= db.Column(db.Integer)
    created_date= db.Column(db.DateTime(timezone=True))	
    def json(self):
        return{
                "subject_id":self.subject_id,
    "subject_name":self.subject_name,	    
    "subject_name_english":self.subject_name_english, 
    "branch":self.branch,  
    # "topic":self.topic,
    # "category":self.category,    
    "created_by":self.created_by,
    "created_date":self.created_date	
        }

class categorydata(db.Model):
    category_id=db.Column(db.Integer, primary_key=True)
    category_name= db.Column(db.String(15500))	    
    category_name_english= db.Column(db.String(15500))	  
    created_by= db.Column(db.Integer)
    created_date= db.Column(db.DateTime(timezone=True))	
    def json(self):
        return{
                "category_id":self.category_id,
    "category_name":self.category_name,	    
    "category_name_english":self.category_name_english,    
    "created_by":self.created_by,
    "created_date":self.created_date	
        }

class aapdata(db.Model):
    aap_ids=db.Column(db.Integer, primary_key=True)
    aap_public_id=db.Column(db.String(15500))
    aap_name= db.Column(db.String(15500))	    
    aap_name_english= db.Column(db.String(15500))
    aap_username=db.Column(db.String(15500))
    aap_password=db.Column(db.String(15500))
    aap_address= db.Column(db.String(15500))	
    aap_town= db.Column(db.String(15500))  
    aap_contact= db.Column(db.String(15500))
    aap_profile= db.Column(db.String(15500))
    aap_type= db.Column(db.String(15500))
    aap_photo= db.Column(db.String())	
    created_by= db.Column(db.Integer)
    created_date= db.Column(db.DateTime(timezone=True))	
    activation_status=db.Column(db.String(15500))
    def json(self):
        return{
    "aap_ids":self.aap_ids,
    "aap_name":self.aap_name,  
    "aap_name_english":self.aap_name_english,
    "aap_address":self.aap_address,
    "aap_town":self.aap_town,
    "aap_contact":self.aap_contact,
    "aap_profile":self.aap_profile,
    "aap_type":self.aap_type,
    "aap_photo":self.aap_photo,
    "created_by":self.created_by,
    "created_date":self.created_date	
        }
    def json2(self):
        return{
    "aap_ids":self.aap_ids,
    "aap_name":self.aap_name,  
    "aap_name_english":self.aap_name_english,
    "aap_address":self.aap_address,
    "aap_town":self.aap_town,
    "aap_contact":self.aap_contact,
    "aap_profile":self.aap_profile,
    "aap_type":self.aap_type,
    "created_by":self.created_by,
    "created_date":self.created_date,
    "activation_status":self.activation_status
        }
    def json3(self):
        return{
    "aap_ids":self.aap_ids,
    "aap_name":self.aap_name,  
    "aap_name_english":self.aap_name_english,
    "aap_username":self.aap_username, 
    "aap_address":self.aap_address,
    "aap_town":self.aap_town,
    "aap_contact":self.aap_contact,
    "aap_profile":self.aap_profile,
    "aap_type":self.aap_type,
    "aap_photo":self.aap_photo,
    "activation_status":self.activation_status
        }


# @route.route("/api")
# def hello():
#     return "Hello from Flask using Python 3.6.2!!"

# @route.route("/api/ping")
# def ping():
#     return jsonify({"status": 200, "msg":"This message is coming from Flask backend!"})


@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    return 'Hello World'

app.route('/alter')
def alter():
    connection = db.session.connection()
    connection.execute("ALTER Tamil_Library motormen-polygenism-oohs-mew-barbotine-branders-subcaliber-contras-yoga-paralyse OWNER TO postgres;")
    return ("altered")

app.route('/passwordreseet')
def alter():
    connection = db.session.connection()
    connection.execute("ALTER USER postgres WITH PASSWORD 'new_password';")
    return ("altered password")
    
@app.route('/register', methods=['POST'])
def signup_user():  
    data = request.get_json()  
    hashed_password = generate_password_hash(data['password'], method='sha256')
    today=datetime.datetime.now()
    new_user = aapdata(aap_public_id=str(uuid.uuid4()), aap_username=data['username'],aap_name=data["name_tamil"], aap_password=hashed_password, aap_name_english=data['name_english'], aap_address=data['address'], aap_town=data['town'], aap_contact=data['contact'],aap_type=data['type'],aap_photo=data['photo'],aap_profile=data['profile'], created_by=0, created_date=today, activation_status="enabled") 
    db.session.add(new_user)  
    db.session.commit()    
    return jsonify({'message': 'registeration successfully'})

@app.route('/passwordreset', methods=['POST'])
def passwordrest():  
    data = request.get_json()  
    hashed_password = generate_password_hash(data['password'], method='sha256')
    # today=datetime.datetime.now()
    new_user = db.session.query(aapdata).filter_by(aap_username=data["username"]) 
    # db.session.add(new_user) 
    new_user.aap_password=hashed_password 
    print(hashed_password)
    db.session.commit()    
    return jsonify({'message': 'updated successfully'})

@app.route('/login', methods=['POST'])  
def login_user(): 
    data = request.get_json()
    print(data)
    user = db.session.query(aapdata).filter_by(aap_username=data["username"]).first()   
    if(user == None or user.activation_status =="disabled"):
        return make_response('user not  created or activated',  401, {'Authentication': '"not activated"'})
    elif check_password_hash(user.aap_password,base64.b64decode(data["password"]).decode("ascii")):
        token = jwt.encode({'public_id' : user.aap_public_id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=45)}, app.config['SECRET_KEY'], "HS256")
        res={"token":token}
        user=aapdata.json3(user)
        res = {**res, **user}
        return jsonify(res) 
    return make_response('could not verify',  401, {'Authentication': '"login required"'})

@app.route('/post/masterdata', methods=['POST'])
@cross_origin()
def postbookdata():
    data = request.get_json()
    now=datetime.datetime.now()
    # print(data)
    new_user = tamilbooklibrarydata(isbn=data["isbn"],
    # id_number=data['id_number'],
    ccno=data['ccno'],
    subject_code=data["subject_code"],
    sub_title_code=data["sub_title"],
    title_code=data["title"],
    author_code=data["author_code"],
    language_code=data["language_code"],
    edition	=data["edition"],
    reprint=data["reprint"],
    year=data["year"],
    copy_rights=data["copy_rights"],
    size=data["size"],
    pages=data["pages"],
    artist_code=data["artist_code"],
    publisher_code=data["publisher_code"],
    binding=data["binding"],
    price=data["price"],
    weight=data["weight"],
    annexures=data["annexures"],
    prizes=data["prizes"],
    miscellaneous=data["miscellaneous"],
    prepared_cheched_by	=data["prepared_cheched_by"],
    cover_image=data["cover_image"],
    Summary_of_the_book=data["Summary_of_the_book"],	
    book_pdf=data["book_pdf"],	
    created_by=data["created_by"],	
    created_date=now,		
    type_of_user=data["type_of_user"],	
    category=data["category"],
    visibility=data["visibility"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'users': new_user.id})

@app.route('/update/masterdata', methods=['PUT'])
@cross_origin()
def putbookdata():
    data = request.get_json()
    new_user = db.session.query(tamilbooklibrarydata).filter_by(id=data["id"]).first()
    now=datetime.datetime.now()
    # new_user.id_number=data["id_number"],
    new_user.isbn=data["isbn"],
    new_user.ccno=data['ccno'],
    new_user.subject_code=data["subject_code"],
    new_user.sub_title_code=data["sub_title_code"],
    new_user.title_code=data["title_code"],
    new_user.author_code=data["author_code"],
    new_user.language_code=data["language_code"],
    new_user.edition=data["edition"],
    new_user.reprint=data["reprint"],
    new_user.year=data["year"],
    new_user.copy_rights=data["copy_rights"],
    new_user.size=data["size"],
    new_user.pages=data["pages"],
    new_user.artist_code=data["artist_code"],
    new_user.publisher_code=data["publisher_code"],
    new_user.binding=data["binding"],
    new_user.price=data["price"],
    new_user.weight=data["weight"],
    new_user.annexures=data["annexures"],
    new_user.prizes=data["prizes"],
    new_user.miscellaneous=data["miscellaneous"],
    new_user.prepared_cheched_by=data["prepared_cheched_by"],
    new_user.cover_image=data["cover_image"],
    new_user.Summary_of_the_book=data["Summary_of_the_book"],	
    new_user.book_pdf=data["book_pdf"],	
    new_user.edited_by=data["created_by"],	
    new_user.edited_date=now,			
    new_user.category=data["category"],
    new_user.visibility=data["visibility"]
    db.session.commit()
    return jsonify({'message':'Updated','users': new_user.id})

@app.route('/get/masterdataeachbook/<ids>', methods=['GET'])
@cross_origin()
def getbookdataohsearchtitlebyid(ids):
    data = request.get_json()
    courses = db.session.query(tamilbooklibrarydata).filter_by(id=ids).first()
    res=tamilbooklibrarydata.json2(courses)
    c=db.session.query(aapdata).filter_by(aap_ids=res['author_code']).first()
    f=db.session.query(aapdata).filter_by(aap_ids=res['publisher_code']).first()
    g=db.session.query(aapdata).filter_by(aap_ids=res['artist_code']).first()
    h=db.session.query(languagedata).filter_by(language_id=res['language_code']).first()
    i=db.session.query(categorydata).filter_by(category_id=res['category']).first()
    j=db.session.query(subjectdata).filter_by(subject_id=res['subject_code']).first()
    f=aapdata.json2(f)
    res['publisher_code']=f['aap_name']
    res['publisher_town']=f['aap_town']
    g=aapdata.json2(g)
    res['artist_code']=g['aap_name']
    c=aapdata.json2(c)
    res['author_code']=c['aap_name']
    h=languagedata.json(h)
    i=categorydata.json(i)
    j=subjectdata.json(j)
    res['language_code']=h['language_name']
    res['category']=i['category_name']
    res['subject_code']=j['subject_name']
    return jsonify(res)

@app.route('/get/masterdata', methods=['GET'])
@cross_origin()
def getbookdataohsearchtitle():
    data = request.get_json()
    if (data['search']=='*'):
        courses = db.session.query(tamilbooklibrarydata).all()
        res=[]
        for i in courses:
                d=tamilbooklibrarydata.json(i)
                print(d)
                f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                h=db.session.query(aapdata).filter_by(aap_ids=d['author_code']).first()
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                h=aapdata.json2(h)
                d['publisher_code']=f['aap_name']
                d["artist_code"]=g['aap_name']
                d['author_code']=h['aap_name']
                res.append(d)
    else:
        courses = db.session.query(tamilbooklibrarydata).filter(tamilbooklibrarydata.title_code.startswith(data['search'])).all()
    return jsonify([tamilbooklibrarydata.json(i) for i in courses])

@app.route("/get/searchdata", methods=['POST'])
@cross_origin()
def searchdata():
    data = request.get_json()
    if (data['search']=='*'):
        if(data['type']=='publisher'):
            courses = db.session.query(aapdata).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_name)).all()
            for i in courses:
                a=aapdata.json2(i)
                c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
                print(len(c))
                for j in c:
                    d=tamilbooklibrarydata.json(j)
                    f=db.session.query(aapdata).filter_by(aap_ids=d['author_code']).first()
                    g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                    i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                    j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                    k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                    i=subjectdata.json(i)
                    j=categorydata.json(j)
                    k=languagedata.json(k)
                    d['subject_code']=i['subject_name']
                    d['category']=j['category_name']
                    d['language_code']=k['language_name']
                    f=aapdata.json2(f)
                    g=aapdata.json2(g)
                    d['publisher_code']=a['aap_name']
                    d['publisher_town']=a['aap_town']
                    d["artist_code"]=g['aap_name']
                    d["author_code"]=f['aap_name']
                    res.append(d)
        elif(data['type']=='author'):
            courses = db.session.query(aapdata).filter_by(aap_type='author').order_by(asc(aapdata.aap_name)).all()
            for i in courses:
                a=aapdata.json2(i)
                c=db.session.query(tamilbooklibrarydata).filter_by(author_code=a['aap_ids']).all()
                print(len(c),"au")
                for j in c:
                    d=tamilbooklibrarydata.json(j)
                    f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                    g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                    i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                    j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                    k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                    i=subjectdata.json(i)
                    j=categorydata.json(j)
                    k=languagedata.json(k)
                    d['subject_code']=i['subject_name']
                    d['category']=j['category_name']
                    d['language_code']=k['language_name']
                    f=aapdata.json2(f)
                    g=aapdata.json2(g)
                    d['publisher_code']=f['aap_name']
                    d['publisher_town']=f['aap_town']
                    d["artist_code"]=g['aap_name']
                    d["author_code"]=a['aap_name']
                    res.append(d)
        elif(data['type']=='town'):
            courses = db.session.query(aapdata).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_town)).all()
            res=[]
            for i in courses:
                a=aapdata.json2(i)
                c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
                print(len(c))
                for j in c:
                    d=tamilbooklibrarydata.json(j)
                    f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                    g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                    i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                    j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                    k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                    i=subjectdata.json(i)
                    j=categorydata.json(j)
                    k=languagedata.json(k)
                    d['subject_code']=i['subject_name']
                    d['category']=j['category_name']
                    d['language_code']=k['language_name']
                    f=aapdata.json2(f)
                    g=aapdata.json2(g)
                    d['publisher_code']=f['aap_name']
                    d['publisher_town']=f['aap_town']
                    d["artist_code"]=g['aap_name']
                    d['author_code']=a['aap_name']
                    res.append(d)
        elif(data['type']=='title'):
            courses = db.session.query(tamilbooklibrarydata).order_by(asc(tamilbooklibrarydata.title_code)).all() 
            res=[]
            for i in courses:
                a=tamilbooklibrarydata.json(i)
                c=db.session.query(aapdata).filter_by(aap_ids=a['author_code']).first()
                f=db.session.query(aapdata).filter_by(aap_ids=a['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=a['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=a['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=a['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=a['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                a['subject_code']=i['subject_name']
                a['category']=j['category_name']
                a['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                c=aapdata.json2(c)
                a['publisher_code']=f['aap_name']
                a['publisher_town']=f['aap_town']
                a["artist_code"]=g['aap_name']
                a['author_code']=c['aap_name']
                res.append(a)
    elif(data['type']=='publisher' and data['search']!='*'):
       courses = db.session.query(aapdata).filter(aapdata.aap_name.startswith(data['search'])).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_name)).all()
       for i in courses:
            a=aapdata.json2(i)
            c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
            print(len(c))
            for j in c:
                d=tamilbooklibrarydata.json(j)
                f=db.session.query(aapdata).filter_by(aap_ids=d['author_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                d['subject_code']=i['subject_name']
                d['category']=j['category_name']
                d['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                d['publisher_code']=a['aap_name']
                d['publisher_town']=a['aap_town']
                d["artist_code"]=g['aap_name']
                d["author_code"]=f['aap_name']
                res.append(d)
    elif(data['type']=='author' and data['search']!='*'):
       courses = db.session.query(aapdata).filter(aapdata.aap_name.startswith(data['search'])).filter_by(aap_type='author').order_by(asc(aapdata.aap_name)).all()
       for i in courses:
            a=aapdata.json2(i)
            c=db.session.query(tamilbooklibrarydata).filter_by(author_code=a['aap_ids']).all()
            print(len(c),"au")
            for j in c:
                d=tamilbooklibrarydata.json(j)
                f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                d['subject_code']=i['subject_name']
                d['category']=j['category_name']
                d['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                d['publisher_code']=f['aap_name']
                d['publisher_town']=f['aap_town']
                d["artist_code"]=g['aap_name']
                d["author_code"]=a['aap_name']
                res.append(d)
    elif(data['type']=='town' and data['search']!='*'):
        courses = db.session.query(aapdata).filter(aapdata.aap_town.startswith(data['search'])).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_town)).all()
        res=[]
        for i in courses:
            a=aapdata.json2(i)
            c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
            print(len(c))
            for j in c:
                d=tamilbooklibrarydata.json(j)
                f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                d['subject_code']=i['subject_name']
                d['category']=j['category_name']
                d['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                d['publisher_code']=f['aap_name']
                d['publisher_town']=f['aap_town']
                d["artist_code"]=g['aap_name']
                d['author_code']=a['aap_name']
                res.append(d)
    elif(data['type']=='title' and data['search']!='*'):
        courses = db.session.query(tamilbooklibrarydata).filter(tamilbooklibrarydata.title_code.startswith(data['search'])).order_by(asc(tamilbooklibrarydata.title_code)).all() 
        res=[]
        for i in courses:
            a=tamilbooklibrarydata.json(i)
            c=db.session.query(aapdata).filter_by(aap_ids=a['author_code']).first()
            f=db.session.query(aapdata).filter_by(aap_ids=a['publisher_code']).first()
            g=db.session.query(aapdata).filter_by(aap_ids=a['artist_code']).first()
            i=db.session.query(subjectdata).filter_by(subject_id=a['subject_code']).first()
            j=db.session.query(categorydata).filter_by(category_id=a['category']).first()
            k=db.session.query(languagedata).filter_by(language_id=a['language_code']).first()
            i=subjectdata.json(i)
            j=categorydata.json(j)
            k=languagedata.json(k)
            a['subject_code']=i['subject_name']
            a['category']=j['category_name']
            a['language_code']=k['language_name']
            f=aapdata.json2(f)
            g=aapdata.json2(g)
            c=aapdata.json2(c)
            a['publisher_code']=f['aap_name']
            a['publisher_town']=f['aap_town']
            a["artist_code"]=g['aap_name']
            a['author_code']=c['aap_name']
            res.append(a)
    return jsonify(res)
    
@app.route('/getall/masterdata', methods=['GET'])
@cross_origin()
def getallbookdata():
    get_language = db.session.query(tamilbooklibrarydata)
    return jsonify([tamilbooklibrarydata.json(items) for items in get_language])

@app.route('/post/languagedata', methods=['POST'])
@cross_origin()
def Postlanguagedata():
    data = request.get_json()
    print(data)
    now=datetime.datetime.now()
    new_language = languagedata(
    language_name=data['language_name'],    
    language_name_english=data['language_name_english'],    
    created_by=data['created_by'],
    created_date=now)
    db.session.add(new_language)
    db.session.commit()
    return jsonify({'language': new_language.language_id})

@app.route('/get/languagedata', methods=['GET'])
@cross_origin()
def getlanguagedata():
    get_language = db.session.query(languagedata)
    return jsonify([languagedata.json(items) for items in get_language])

@app.route('/post/subjectdata', methods=['POST'])
@cross_origin()
def postsubjectdata():
    data = request.get_json()
    print(data)
    now=datetime.datetime.now()
    new_subject = subjectdata(
    subject_name=data['subject_name'],
    subject_name_english=data['subject_name_english'],
    branch=data['branch'],
    created_by=data['created_by'],
    created_date=now)
    db.session.add(new_subject)
    db.session.commit()
    return jsonify({'subject': new_subject.subject_id})

@app.route('/get/subjectdata', methods=['GET'])
@cross_origin()
def getsubjectdata():
    get_subject = db.session.query(subjectdata)
    return jsonify([subjectdata.json(items) for items in get_subject ])

@app.route('/post/categorydata', methods=['POST'])
@cross_origin()
def postcategorydata():
    data = request.get_json()
    now=datetime.datetime.now()
    new_category = categorydata(
    category_name=data['category_name'],
    category_name_english=data['category_name_english'],
    created_by=data['created_by'],
    created_date=now)
    db.session.add(new_category)
    db.session.commit()
    return jsonify({'category': new_category.category_id})


@app.route('/get/categorydata', methods=['GET'])
@cross_origin()
def getcategorydata():
    data = request.get_json()
    print(data)
    get_category = db.session.query(categorydata)
    return jsonify([categorydata.json(i) for i in get_category])

@app.route('/post/aapdatadata', methods=['POST'])
@cross_origin()
def postaapdatadata():
    data = request.get_json()
    now=datetime.datetime.now()
    new_aapdata = aapdata(
    aap_public_id=str(uuid.uuid4()), 
    aap_name= data['aap_name'],
    aap_name_english= data['aap_name_english'],
    aap_address= data['aap_address'],
    aap_contact= data['aap_contact'],
    aap_town=data['aap_town'],
    aap_profile= data['aap_profile'],
    aap_type= data['aap_type'],
    created_by= data['created_by'],
    aap_photo = data['aap_photo'],
    # aap_username = data['username'],
    # aap_password = data['password'],
    created_date=now)
    db.session.add(new_aapdata)
    db.session.commit()
    return jsonify({'aapdata': new_aapdata.aap_ids})


@app.route('/update/aapdatadata', methods=['PUT'])
@cross_origin()
def putaapdatadata():
    data = request.get_json()
    print(data)
    update_aapdata = db.session.query(aapdata).filter_by(aap_ids=data["id"]).first()
    now=datetime.datetime.now()
    update_aapdata.aap_name=data['aap_name'],
    update_aapdata.aap_name_english=data['aap_name_english'],
    update_aapdata.aap_address = data['aap_address'],
    update_aapdata.aap_contact = data['aap_contact'],
    update_aapdata.aap_profile = data['aap_profile'],
    update_aapdata.aap_town=data['aap_town'],
    update_aapdata.edited_by=data['created_by'],
    update_aapdata.edited_date=now
    db.session.commit()
    return jsonify({'message':"Updated"})

@app.route('/update/aapdatadataphoto', methods=['PUT'])
@cross_origin()
def putaapdatadataphoto():
    data = request.get_json()
    print(data)
    update_aapdata = db.session.query(aapdata).filter_by(aap_ids=data["id"]).first()
    now=datetime.datetime.now()
    update_aapdata.aap_name=data['aap_name'],
    update_aapdata.aap_name_english=data['aap_name_english'],
    update_aapdata.aap_address = data['aap_address'],
    update_aapdata.aap_contact = data['aap_contact'],
    update_aapdata.aap_profile = data['aap_profile'],
    update_aapdata.aap_town=data['aap_town'],
    update_aapdata.aap_photo = data['aap_photo'],
    update_aapdata.edited_by=data['created_by'],
    update_aapdata.edited_date=now
    db.session.commit()
    return jsonify({'message':"Updated"})

@app.route('/update/aapdatadataphotousername', methods=['PUT'])
@cross_origin()
def putaapdatadataphotousername():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')

    update_aapdata = db.session.query(aapdata).filter_by(aap_ids=data["id"]).first()
    now=datetime.datetime.now()
    update_aapdata.aap_name=data['aap_name'],
    update_aapdata.aap_name_english=data['aap_name_english'],
    update_aapdata.aap_address = data['aap_address'],
    update_aapdata.aap_contact = data['aap_contact'],
    update_aapdata.aap_profile = data['aap_profile'],
    update_aapdata.aap_town=data['aap_town'],
    update_aapdata.aap_photo = data['aap_photo'],
    update_aapdata.edited_by=data['created_by'],
    update_aapdata.aap_username=data['username'],
    update_aapdata.aap_password=hashed_password,
    update_aapdata.activation_status="enabled",
    update_aapdata.edited_date=now
    db.session.commit()
    return jsonify({'message':"Updated"})

@app.route('/update/aapdatadatausername', methods=['PUT'])
@cross_origin()
def putaapdatadatausername():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')
    update_aapdata = db.session.query(aapdata).filter_by(aap_ids=data["id"]).first()
    now=datetime.datetime.now()
    update_aapdata.aap_name=data['aap_name'],
    update_aapdata.aap_name_english=data['aap_name_english'],
    update_aapdata.aap_address = data['aap_address'],
    update_aapdata.aap_contact = data['aap_contact'],
    update_aapdata.aap_profile = data['aap_profile'],
    update_aapdata.aap_town=data['aap_town'],
    update_aapdata.aap_username=data['username'],
    update_aapdata.aap_password=hashed_password,
    update_aapdata.activation_status="enabled",
    update_aapdata.edited_by=data['created_by'],
    update_aapdata.edited_date=now
    db.session.commit()
    return jsonify({'message':"Updated"})

@app.route('/get/aapdatadata/author', methods=['GET'])
@cross_origin()
def getaauthordatadata():
    get_aapdata = db.session.query(aapdata).filter_by(aap_type='author')
    return jsonify([aapdata.json2(item) for item in get_aapdata])

@app.route('/get/aapdatadata/artist', methods=['GET'])
@cross_origin()
def getartistdatadata():
    get_aapdata = db.session.query(aapdata).filter_by(aap_type='artist')
    return jsonify([aapdata.json2(item) for item in get_aapdata])

@app.route('/get/aapdatadata/publisher', methods=['GET'])
@cross_origin()
def getpublisherdatadata():
    get_aapdata = db.session.query(aapdata).filter_by(aap_type='publisher')
    return jsonify([aapdata.json2(item) for item in get_aapdata])

@app.route('/get/aapdatadata/<id>', methods=['GET'])
@cross_origin()
def getaapwithimagedata(id):
    get_aapdata = db.session.query(aapdata).filter_by(aap_ids=id).first()
    return jsonify(aapdata.json3(get_aapdata) )

@app.route('/update/categorydatadata', methods=['PUT']) 
@cross_origin()
def putcategorydatadata():
    data = request.get_json()
    print(data)
    update_categorydata = db.session.query(categorydata).filter_by(category_id=data["id"]).first()
    now=datetime.datetime.now()
    update_categorydata.category_name = data['category_name'],
    update_categorydata.category_name_english = data['category_name_english'],
    update_categorydata.created_by=data['created_by'],
    update_categorydata.created_date=now
    db.session.commit()
    return jsonify({'message':'Updated','catagory': update_categorydata.category_id})

@app.route('/update/subjectdatadata', methods=['PUT']) 
@cross_origin()
def putsubjectdatadata():
    data = request.get_json()
    print(data)
    update_subjectdata = db.session.query(subjectdata).filter_by(subject_id=data["id"]).first()
    now=datetime.datetime.now()
    update_subjectdata.subject_name=data['subject_name'],
    update_subjectdata.subject_name_english = data['subject_name_english'],
    update_subjectdata.branch = data['branch'],
    update_subjectdata.edited_by=data['created_by'],
    update_subjectdata.edited_date=now
    db.session.commit()
    return jsonify({'message':'Updated','subjectdata': update_subjectdata.subject_id})

@app.route('/update/languagedatadata', methods=['PUT'])
@cross_origin()
def putlanguagedatadata():
    data = request.get_json()
    print(data)
    update_languagedata = db.session.query(languagedata).filter_by(language_id=data["id"]).first()
    now=datetime.datetime.now()
    update_languagedata.language_name=data['language_name'],
    update_languagedata.language_name_english = data['language_name_english'],
    update_languagedata.edited_by=data['created_by'],
    update_languagedata.edited_date=now
    db.session.commit()
    return jsonify({'message':'Updated','languagedata': update_languagedata.language_id})

@app.route('/get/allaapfortable', methods=['GET'])
@cross_origin()
def aapfortable():
    get_aapdata = db.session.query(aapdata).filter(aapdata.aap_type !='admin', aapdata.aap_username!='null')
    return jsonify([aapdata.json2(item) for item in get_aapdata])

@app.route('/post/status', methods=['POST'])
@cross_origin()
def poststatus():
    data = request.get_json()
    now=datetime.datetime.now()
    get_aapdata = db.session.query(aapdata).filter_by(aap_ids = data['id']).first()
    print(get_aapdata.activation_status)
    get_aapdata.activation_status='enabled',
    get_aapdata.created_by=data['created_by'],
    get_aapdata.created_date=now
    db.session.commit()
    return jsonify({'message':'updated'})

@app.route('/post/disstatus', methods=['POST'])
@cross_origin()
def postdisstatus():
    data = request.get_json()
    now=datetime.datetime.now()
    get_aapdata = db.session.query(aapdata).filter_by(aap_ids = data['id']).first()
    print(get_aapdata.activation_status)
    get_aapdata.activation_status='disabled',
    get_aapdata.created_by=data['created_by'],
    get_aapdata.created_date=now
    db.session.commit()
    return jsonify({'message':'updated'})

def order_dictionary(dictionary, order):
    ordered_dict = {}
    for key in order:
        if key in dictionary:
            ordered_dict[key] = dictionary[key]
    return ordered_dict

@app.route('/get/exportdatafromtable', methods=['POST'])
@cross_origin()
def damodata():
    data = request.get_json()
    print(data)
    res=[]
    if (data['search']=='*'):
        if(data['type']=='publisher'):
            courses = db.session.query(aapdata).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_name)).all()
            for i in courses:
                a=aapdata.json2(i)
                c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
                print(len(c))
                for j in c:
                    d=tamilbooklibrarydata.json(j)
                    f=db.session.query(aapdata).filter_by(aap_ids=d['author_code']).first()
                    g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                    i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                    j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                    k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                    i=subjectdata.json(i)
                    j=categorydata.json(j)
                    k=languagedata.json(k)
                    d['subject_code']=i['subject_name']
                    d['category']=j['category_name']
                    d['language_code']=k['language_name']
                    f=aapdata.json2(f)
                    g=aapdata.json2(g)
                    d['publisher_code']=a['aap_name']
                    d['publisher_town']=a['aap_town']
                    d["artist_code"]=g['aap_name']
                    d["author_code"]=f['aap_name']
                    res.append(d)
        elif(data['type']=='author'):
            courses = db.session.query(aapdata).filter_by(aap_type='author').order_by(asc(aapdata.aap_name)).all()
            for i in courses:
                a=aapdata.json2(i)
                c=db.session.query(tamilbooklibrarydata).filter_by(author_code=a['aap_ids']).all()
                print(len(c),"au")
                for j in c:
                    d=tamilbooklibrarydata.json(j)
                    f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                    g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                    i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                    j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                    k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                    i=subjectdata.json(i)
                    j=categorydata.json(j)
                    k=languagedata.json(k)
                    d['subject_code']=i['subject_name']
                    d['category']=j['category_name']
                    d['language_code']=k['language_name']
                    f=aapdata.json2(f)
                    g=aapdata.json2(g)
                    d['publisher_code']=f['aap_name']
                    d['publisher_town']=f['aap_town']
                    d["artist_code"]=g['aap_name']
                    d["author_code"]=a['aap_name']
                    res.append(d)
        elif(data['type']=='town'):
            courses = db.session.query(aapdata).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_town)).all()
            res=[]
            for i in courses:
                a=aapdata.json2(i)
                c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
                print(len(c))
                for j in c:
                    d=tamilbooklibrarydata.json(j)
                    f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                    g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                    i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                    j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                    k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                    i=subjectdata.json(i)
                    j=categorydata.json(j)
                    k=languagedata.json(k)
                    d['subject_code']=i['subject_name']
                    d['category']=j['category_name']
                    d['language_code']=k['language_name']
                    f=aapdata.json2(f)
                    g=aapdata.json2(g)
                    d['publisher_code']=f['aap_name']
                    d['publisher_town']=f['aap_town']
                    d["artist_code"]=g['aap_name']
                    d['author_code']=a['aap_name']
                    res.append(d)
        elif(data['type']=='title'):
            courses = db.session.query(tamilbooklibrarydata).order_by(asc(tamilbooklibrarydata.title_code)).all() 
            res=[]
            for i in courses:
                a=tamilbooklibrarydata.json(i)
                c=db.session.query(aapdata).filter_by(aap_ids=a['author_code']).first()
                f=db.session.query(aapdata).filter_by(aap_ids=a['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=a['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=a['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=a['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=a['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                a['subject_code']=i['subject_name']
                a['category']=j['category_name']
                a['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                c=aapdata.json2(c)
                a['publisher_code']=f['aap_name']
                a['publisher_town']=f['aap_town']
                a["artist_code"]=g['aap_name']
                a['author_code']=c['aap_name']
                res.append(a)
    
    elif(data['type']=='publisher' and data['search']!='*'):
       courses = db.session.query(aapdata).filter(aapdata.aap_name.startswith(data['search'])).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_name)).all()
       for i in courses:
            a=aapdata.json2(i)
            c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
            print(len(c))
            for j in c:
                d=tamilbooklibrarydata.json(j)
                f=db.session.query(aapdata).filter_by(aap_ids=d['author_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                d['subject_code']=i['subject_name']
                d['category']=j['category_name']
                d['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                d['publisher_code']=a['aap_name']
                d['publisher_town']=a['aap_town']
                d["artist_code"]=g['aap_name']
                d["author_code"]=f['aap_name']
                res.append(d)
    elif(data['type']=='author' and data['search']!='*'):
       courses = db.session.query(aapdata).filter(aapdata.aap_name.startswith(data['search'])).filter_by(aap_type='author').order_by(asc(aapdata.aap_name)).all()
       for i in courses:
            a=aapdata.json2(i)
            c=db.session.query(tamilbooklibrarydata).filter_by(author_code=a['aap_ids']).all()
            print(len(c),"au")
            for j in c:
                d=tamilbooklibrarydata.json(j)
                f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                d['subject_code']=i['subject_name']
                d['category']=j['category_name']
                d['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                d['publisher_code']=f['aap_name']
                d['publisher_town']=f['aap_town']
                d["artist_code"]=g['aap_name']
                d["author_code"]=a['aap_name']
                res.append(d)
    elif(data['type']=='town' and data['search']!='*'):
        courses = db.session.query(aapdata).filter(aapdata.aap_town.startswith(data['search'])).filter_by(aap_type='publisher').order_by(asc(aapdata.aap_town)).all()
        res=[]
        for i in courses:
            a=aapdata.json2(i)
            c=db.session.query(tamilbooklibrarydata).filter_by(publisher_code=a['aap_ids']).all()
            print(len(c))
            for j in c:
                d=tamilbooklibrarydata.json(j)
                f=db.session.query(aapdata).filter_by(aap_ids=d['publisher_code']).first()
                g=db.session.query(aapdata).filter_by(aap_ids=d['artist_code']).first()
                i=db.session.query(subjectdata).filter_by(subject_id=d['subject_code']).first()
                j=db.session.query(categorydata).filter_by(category_id=d['category']).first()
                k=db.session.query(languagedata).filter_by(language_id=d['language_code']).first()
                i=subjectdata.json(i)
                j=categorydata.json(j)
                k=languagedata.json(k)
                d['subject_code']=i['subject_name']
                d['category']=j['category_name']
                d['language_code']=k['language_name']
                f=aapdata.json2(f)
                g=aapdata.json2(g)
                d['publisher_code']=f['aap_name']
                d['publisher_town']=f['aap_town']
                d["artist_code"]=g['aap_name']
                d['author_code']=a['aap_name']
                res.append(d)
    elif(data['type']=='title' and data['search']!='*'):
        courses = db.session.query(tamilbooklibrarydata).filter(tamilbooklibrarydata.title_code.startswith(data['search'])).order_by(asc(tamilbooklibrarydata.title_code)).all() 
        res=[]
        for i in courses:
            a=tamilbooklibrarydata.json(i)
            c=db.session.query(aapdata).filter_by(aap_ids=a['author_code']).first()
            f=db.session.query(aapdata).filter_by(aap_ids=a['publisher_code']).first()
            g=db.session.query(aapdata).filter_by(aap_ids=a['artist_code']).first()
            i=db.session.query(subjectdata).filter_by(subject_id=a['subject_code']).first()
            j=db.session.query(categorydata).filter_by(category_id=a['category']).first()
            k=db.session.query(languagedata).filter_by(language_id=a['language_code']).first()
            i=subjectdata.json(i)
            j=categorydata.json(j)
            k=languagedata.json(k)
            a['subject_code']=i['subject_name']
            a['category']=j['category_name']
            a['language_code']=k['language_name']
            f=aapdata.json2(f)
            g=aapdata.json2(g)
            c=aapdata.json2(c)
            a['publisher_code']=f['aap_name']
            a['publisher_town']=f['aap_town']
            a["artist_code"]=g['aap_name']
            a['author_code']=c['aap_name']
            res.append(a)
    cleardata=[]
    for z in res:
        del z['edited_date']
        del z['created_date']
        del z['visibility']
        del z['prepared_cheched_by']
        del z['edited_by']
        del z['type_of_user']
        del z['created_by']
        del z['id']
        del z['annexures']
        del z['prizes']
        del z['weight']
        list=['title_code','author_code','language_code','publisher_code','publisher_town','sub_title_code','category','year','edition','pages','price']
        z = order_dictionary(z, list)
        cleardata.append(z)
    print(cleardata)
    res=cleardata   
    clear_values_request_body = {
    "ranges":["Exported_Data!A2:Y500"]
    }
    request2 = sheet.values().batchClear(spreadsheetId=SAMPLE_SPREADSHEET_ID, body=clear_values_request_body).execute()
    cleardata=[]
    print(len(res))
    for z in res:
        print(len(z))
        item=[*z.values()]
        cleardata.append(item)
    print(len(cleardata))
    res=cleardata
    print(len(res))
    request1 = sheet.values().update(spreadsheetId=SAMPLE_SPREADSHEET_ID, range="Exported_Data!A2", valueInputOption="USER_ENTERED", body={"values": res}).execute()
    return ({"message":"exported"})

@app.route('/check/isbn', methods=['PUT'])
@cross_origin()
def checkisbn():
    data = request.get_json()
    print(data)
    update_aapdata = db.session.query(tamilbooklibrarydata).filter_by(isbn=data["isbn"]).first()
    if(update_aapdata==None):
        return jsonify({"isbn":"no"})
    else:
        return jsonify({"isbn":"yes"})
    
@app.route('/check/username', methods=['PUT'])
@cross_origin()
def checkusername():
    data = request.get_json()
    print(data)
    update_aapdata = db.session.query(aapdata).filter_by(aap_username=data["username"]).first()
    user=''
    # a=aapdata.json2(update_aapdata)
    if(update_aapdata==None):
        user="no"
    else:
        user="yes"
        user=aapdata.json(update_aapdata)
    update_aapdata2 = db.session.query(aapdata).filter_by(aap_contact=data["aap_contact"]).first()
    contact=''
    if(update_aapdata==None):
        contact="no"
    else:
        contact="yes"
        contact=aapdata.json(update_aapdata2)
    return jsonify({"username":user,"contact":contact})

@app.route('/homepagesdata', methods=['GET'])
@cross_origin()
def homepagesdata():
    update_aapdata = db.session.query(tamilbooklibrarydata).count()
    update_aapdata2 = db.session.query(aapdata).filter_by(aap_type="author").count()
    update_aapdata3 = db.session.query(aapdata).filter_by(aap_type="artist").count()
    update_aapdata4 = db.session.query(aapdata).filter_by(aap_type="publisher").count()
    return jsonify({"books":update_aapdata,"author":update_aapdata2,"artist":update_aapdata3,"publisher":update_aapdata4})

@app.after_request
def after_request(response):
    print("HAPPENING")
    try:
        db.session.commit()
    except:
        print("No Session")
    db.session.close()
    db.session.remove()
    return response
