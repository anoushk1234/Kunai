from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
from jsonfield import JSONField


class User(AbstractUser):
    dbtable = 'twitterauth_user'
    username = models.CharField(max_length=100, unique=True)
    USERNAME_FIELD = 'username'

    def save(self, **kwargs):
        if kwargs.has_key('request') and self.user is None:
            request = kwargs.pop('request')
            self.user = request.user
        super(User, self).save(**kwargs)

    def __str__(self):
        return '%s %s %s' % (self.username, self.password, self.email)
