from django.db import models


class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)


niand=Person()
niand.first_name='ninad'
niand.last_name='sawdekatrt'
niand.save()

# Create your models here.
