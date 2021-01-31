from django.shortcuts import render
from rest_framework import response
from rest_framework.views import APIView


class Load_site(APIView):

    def get(self,request):
        if request.method == 'GET':
            d={
                'productID1': 1,
                'productID2': 2,
                'productID3': 3,
                'productID4': 4,
                'productID5': 5,
                'productID6': 6,
                'productID7': 7,
                'productID8': 8,
            }
            return render(request,'index.html',d)
    '''def post(self,request):
        if request.method == 'POST':
            return response'''

class Load_product_page(APIView):
    def get(self,request):
        if request.method == 'GET':
            return render(request,'product_template.html',{'title_of_product' :'full Meal'})



# Create your views here.
