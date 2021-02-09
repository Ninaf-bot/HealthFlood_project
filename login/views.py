from django.shortcuts import render
from rest_framework.views import APIView
from . import models
from django.contrib.auth import authenticate

class user_sign_up(APIView):
    def get(self,request):
        if request.method=='GET':
            render(request,'signup.html')

    def post(self,request):
        if request.method=='POST':
            new_user=models.user_mod()
            new_user.username=request.username
            new_user.first_name=request.first_name
            new_user.likings=request.linkings
            new_user.email=request.email
            new_user.age=request.age
            new_user.set_password(request.password)


class user_login(APIView):
    def get(self,request):
        if request.method=='GET':
            render(request,'login.html')
    def post(self,request):
        if request.method=="POST":
            current_user=authenticate(username=request.username,password=request.password)
            if current_user is not None:
                render(request.url)
# Create your views here.
