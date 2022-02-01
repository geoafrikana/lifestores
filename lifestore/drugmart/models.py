# from traceback import print_exception
# from unicodedata import name
# from unittest import skipUnless
from django.db import models

class Drug(models.Model):
    name = models.CharField(max_length=120)
    description = models.CharField(max_length=300)
    sku= models.CharField(max_length=8)
    price = models.IntegerField()
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    
