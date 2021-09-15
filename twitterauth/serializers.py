from djoser.serializers import UserCreateSerializer
from .models import *


class UserSerializer(UserCreateSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email',)

    def save(self, *args, **kwargs):
        if kwargs.has_key('request') and self.user is None:
            request = kwargs.pop('request')
            self.user = request.user
        super(User, self).save(**kwargs)
