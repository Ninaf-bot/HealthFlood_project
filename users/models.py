from djongo import models
from django.contrib.auth.models import AbstractUserUser

class user_mod(AbstractUserUser):
    age=models.IntegerField()

    def setage(self,age):
        self.age=age
    def getage(self):
        return self.age


# Create your models here.
