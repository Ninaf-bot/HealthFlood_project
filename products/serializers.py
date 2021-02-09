from rest_framework import serializers
from . import models

class productserializer_mod(serializers.ModelSerializer):
    class Meta:
        model= models.food_item
        fields = ('id', 'Name', 'price', 'taste_meter')

class productserializer(serializers.Serializer):
    id=serializers.IntegerField()
    Name=serializers.CharField(max_length=50)
    price=serializers.IntegerField()
    taste_meter=serializers.IntegerField()