from django.db import models

# Create your models here.
class Form(models.Model):
    name = models.CharField(max_length = 255)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()



