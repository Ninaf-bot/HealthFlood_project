from django.shortcuts import render
from rest_framework.views import APIView
from . import models
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class new_users(APIView):
    def post(self,request):
        if request.method=='POST':
            user_data=request.data
            new_user=User.objects.create_user(username=user_data['username'],password=user_data['password'])
            return Response({'action':'successful'})
    def get(self,request):
        if request.method=='GET':
            userr = User.objects.create_user('ninad_rocks', 'ninad', 'nin@gmil.com')
            return Response({'action': 'successful'})

class login(APIView):
    def post(self,request):
        if request.method=='POST':
            login_user_data=request.data
            login_user=authenticate(username=login_user_data['username'],password=login_user_data['password'])
            if login_user!=None:
                return Response({'username': login_user_data['username'],
                                 'password': login_user_data['password'],
                                 'userID':login_user.id,
                                 'loggedin': True})
            return  Response({'loggedin':False})



# Create your views here.
