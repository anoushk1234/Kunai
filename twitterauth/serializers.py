from djoser.serializers import UserCreateSerializer
from .models import *


class UserSerializer(UserCreateSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email',)
