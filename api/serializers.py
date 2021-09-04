from rest_framework import serializers
from .models import Kit

class KitSerializer(serializers.ModelSerializer):
	class Meta:
		model = Kit
		fields ='__all__'

class KitCommentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Kit
		fields ='__all__'