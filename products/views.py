from django.shortcuts import render
from rest_framework.views import APIView
from . import models

class product_site(APIView):
    def get(self,request, productID):
        if request.method == 'GET':

            d={'product_name':productID,'productID':productID}
            return render(request,'product_template.html', d)


# Create your views here.

