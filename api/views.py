import re
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import KitSerializer, KitCommentsSerializer
from twitterauth.serializers import UserSerializer
from twitterauth.models import User
from .models import *
# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def health(request):
    return Response({"status": "ok"})

@api_view(['POST'])
@permission_classes([AllowAny])
def add_kit_comment(request):
    if request.method == 'POST':
        data = request.data
        kit_id = data['kit_id']
        comment = data['comment']
        print(data)
        #user_id = User.objects.get(username="anoushk").
        comment_obj = KitComments.objects.get_or_create(kit_id=kit_id, id=1, comment=comment)
        return JsonResponse({'status': 'ok', 'comment': str(comment_obj)})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_kit(request):
    if request.method == 'POST':
        data = request.data
        print(data)
        kit_serializer = KitSerializer(data=data)
        if kit_serializer.is_valid():
            kit_serializer.save()
            return JsonResponse({'status': 'ok'})
        else:
            return JsonResponse({'status': 'error', 'errors': kit_serializer.errors})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_kit_list(request):
    """
    List all the kits.
    """
    if request.method == 'GET':
        kit_list = Kit.objects.all()
        kit_serializer = KitSerializer(kit_list, many=True)
        return JsonResponse(kit_serializer.data, safe=False)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_kits(request):
    """
    List all the kits.
    """
    if request.method == 'GET':
        kits = Kit.objects.filter(user=request.user)
        serializer = KitSerializer(kits, many=True)
        return JsonResponse(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    if request.method == 'GET':
        user = User.objects.get(username=request.user)
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)
    
