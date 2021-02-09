from djongo import models


class food_item(models.Model):
    Name = models.CharField(max_length=50)
    price = models.IntegerField()
    taste_meter = models.IntegerField()
    objects = models.DjongoManager()

    def __str__(self):
        return self.id

class user(models.Model):
    User_Name=models.CharField(max_length=50)
    Name=models.CharField(max_length=50)
    Email_ID=models.CharField(max_length=50)
    age=models.IntegerField()
    objects = models.DjongoManager()

    def __str__(self):
        return self.id

class view_event(models.Model):
    food_item=models.ForeignKey(food_item, on_delete=models.CASCADE)
    user=models.ForeignKey(user, on_delete=models.CASCADE)
    objects=models.DjongoManager()

class ratings(models.Model):
    food_item = models.ForeignKey(food_item, on_delete=models.CASCADE)
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    rating=models.CharField(max_length=300)
    objects = models.DjongoManager()

# Create your models here.
