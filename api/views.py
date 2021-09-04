from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import KitSerializer, KitCommentsSerializer

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
        user_id = request.user.id
        comment_obj = KitComments(kit_id=kit_id,user="dummy", user_id='1', comment=comment)
        comment_obj.save()
        return JsonResponse({'status': 'ok'})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_kit_list(request):
    """
    List all the kits.
    """
    if request.method == 'GET':
        kits = Kit.objects.all()
        serializer = KitSerializer(kits, many=True)
        comment=KitComments.objects.all().get(id=1)
        return Response(serializer.data,data={'comment':comment.comment})