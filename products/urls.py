from django.urls import path
from . import views

urlpatterns=[
    path('product=<int:productID>/',views.product_site.as_view(),name='product details')

]