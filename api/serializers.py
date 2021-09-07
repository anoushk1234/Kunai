from rest_framework import serializers
from .models import Category, Kit,KitComments

class KitSerializer(serializers.ModelSerializer):
	class Meta:
		model = Kit
		fields ='__all__'

class KitCommentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = KitComments
		fields ='__all__'
  
class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields ='__all__'