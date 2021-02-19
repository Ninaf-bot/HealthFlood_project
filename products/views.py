
from rest_framework.response import Response
from rest_framework.views import APIView
from . import models
from rest_framework import serializers
from . import serializers
from random import randint


class product_site(APIView):
    def get(self,request, productID):
        if request.method == 'GET':
            food_item = models.food_item.objects.get(id=productID)
            food_item_serialised=serializers.productserializer(food_item)
            return Response(food_item_serialised.data)

class products_recommendation(APIView):
    def post(self,request):
        if request.method == 'POST':
            userID=request.data
            recommendation=[randint(0,9) for i in range(0,10)]
            return Response({'recommendation':recommendation})

            




# Create your views here.

