from djongo import models
from django.contrib.auth.models import AbstractUser

class user_mod(AbstractUser):
    likings=models.ArrayField()
    age=models.IntegerField()

    def get_linking(self):
        return self.likings
    def get_age(self):
        return self.age
# Create your models here.
