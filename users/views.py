from django.shortcuts import render
from rest_framework.views import APIView
from . import models
from rest_framework.response import Response
from django.contrib.auth.models import User

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



# Create your views here.
