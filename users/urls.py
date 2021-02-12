from django.urls import path
from . import views

urlpatterns=[
    path('signup/',views.new_users.as_view(),name='signup')
]