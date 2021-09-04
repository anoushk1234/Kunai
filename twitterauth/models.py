from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
from jsonfield import JSONField
class User(AbstractUser):
    dbtable = 'twitterauth_user'
    username=models.CharField(max_length=100,unique=True)
    USERNAME_FIELD='username'
    #PASSWORD_FIELD='twitter_key'
    # password=twitter_key
    # def get_username(self):
    #     return self.username
    
    def __str__(self):
        return '%s %s %s'%(self.username,self.password,self.email)