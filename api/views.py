from inspect import isabstract
import api
import re
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import KitSerializer, KitCommentsSerializer, CategorySerializer
from twitterauth.serializers import UserSerializer
from twitterauth.models import User
from allauth.socialaccount.models import SocialAccount, SocialToken
from .models import *
import json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def health(request):
    return JsonResponse({"status": "ok", "user": request.user.username})
@api_view(['GET'])
@permission_classes([AllowAny])
def get_kit_upvotes_and_downvotes(request, kit_id):
    kit = Kit.objects.get(id=kit_id)
    upvotes = Kit.objects.filter(id=kit_id).values('upvotes').count()
    #downvotes = Kit.objects.filter(id=kit_id).values('downvotes').count()
    return JsonResponse({"upvotes": str(upvotes)})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def upvote_this_kit(request, kit_id):
    kit = Kit.objects.get(id=kit_id)
    user = request.user
    print()
    if user in kit.upvotes.all():
        kit.upvotes.remove(user)
        print("removed upvote")
        print(kit.upvotes.all())
    else:
        kit.upvotes.add(user)
        print("added upvote")
        print(kit.upvotes.all())
    kit.save()
    return JsonResponse({"status": "ok"})
  

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def downvote_this_kit(request, pk):
#     kit = Kit.objects.get(pk=pk)
#     kit.downvotes -= 1
#     kit.save()
#     return JsonResponse({"status": "ok", "kit_downvotes": kit.downvotes})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_kit_comment(request):
    if request.method == 'POST':
        data = request.data
        kit_id = data['kit_id']
        comment = data['comment']
        print(data)
        # user_id = User.objects.get(username="anoushk").
        comment_obj = KitComments.objects.get_or_create(
            kit_id=kit_id, id=1, comment=comment)
        return JsonResponse({'status': 'ok', 'comment': str(comment_obj)})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_kit_comment(request):
    data = request.data
    kit_id = data['kit_id']
    comment_id = data['comment_id']
    comment = data['comment']
    print(data)
    if 1 == KitComments.objects.get(id=comment_id).user_id:
        comment_obj = KitComments.objects.get(id=comment_id, kit_id=kit_id)
        comment_obj.comment = comment
        comment_obj.save()
        return JsonResponse({'status': 'ok', 'comment': str(comment_obj.comment), 'user': str(comment_obj.user)})
    else:
        return JsonResponse({'status': 'error you are unauthorized'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_comments_for_kit(request, pk):
    if pk == 0:
        comments = KitComments.objects.all()
    else:
        comments = KitComments.objects.filter(kit_id=pk)
    serializer = KitCommentsSerializer(comments, many=True)
    if serializer.data:
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({'status': 'ok', 'comment': 'No comment'})


@staticmethod
def get_user(id_):
    try:
        return User.objects.get(pk=id_)
    except User.DoesNotExist:
        return None


@api_view(['POST'])
@permission_classes([AllowAny])
@method_decorator(csrf_exempt, name='dispatch')
def add_kit(request):
    '''
    user,title,markdown_data,upvotes,downvotes,Categories,cat_id
    '''
    if request.method == 'POST':
        screen_name = str(request.user.username)
        print("screen_name", screen_name)
        id = User.objects.get(username=screen_name).id
        print("mainuser_id", request.user.username)
        try:
            user_obj = SocialAccount.objects.get(user_id=id).extra_data

            #user_id = user_obj.user_id
            print(str(user_obj))
            profile_image_url = user_obj['profile_image_url']
            title = request.data['title']
            markdown_data = request.data['markdown_data']
            categories = request.data['categories']
            cat_id = request.data['cat_id']
            kit_serializer = KitSerializer(data={'user': screen_name, "profile_image": profile_image_url, 'title': title, 'markdown_data': markdown_data,
                                                 'upvotes': 0, 'downvotes': 0, 'categories': categories, 'cat_relation': cat_id})
        except Exception as e:
            print(e)
            return JsonResponse({'status': 'error', 'message': 'Invalid data', 'error': str(e)})
        if kit_serializer.is_valid():
            kit_serializer.save()
            return JsonResponse({'status': 'ok', 'kit': str(kit_serializer.data)})
        else:
            return JsonResponse({'status': 'error', 'errors': str(kit_serializer.errors)})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_kit(request, pk):
    if request.method == 'POST':
        kit_obj = Kit.objects.filter(id=pk).get()
        data = request.data
        try:
            kit_obj.title = data['title']
            kit_obj.markdown_data = data['markdown_data']
            kit_obj.categories = data['categories']
            kit_obj.cat_relation = data['cat_relation']
            kit_serializer = KitSerializer.update(kit_obj, data)
            return JsonResponse({'status': 'ok', 'kit': str(kit_serializer.data)})
        except Exception as e:
            return JsonResponse({'status': 'error', 'errors': str(e)})


@api_view(['GET'])
@permission_classes([AllowAny])
def get_kit_list(request):
    """
    List all the kits.
    """
    def Convert(a):
        it = iter(a)
        res_dct = dict(zip(it, it))
        return res_dct
    if request.method == 'GET':

        kit_list = Kit.objects.all()
        kit_serializer = KitSerializer(kit_list, many=True)
        items = [json.dumps(item) for item in kit_serializer.data]
        l = len(Convert(items))-5
        print(items)
        return JsonResponse({'status': 'ok', 'items': items})



@api_view(['GET'])
@permission_classes([AllowAny])
def get_kit_by_kit_id(request, pk):
    """
    List kit by kit_id.
    """
    if request.method == 'GET':
        kit_obj = Kit.objects.filter(id=pk).get()
        kit_serializer = KitSerializer(kit_obj)
        return JsonResponse({"status": "ok", "kit": json.dumps(kit_serializer.data)})


@api_view(['GET'])
@permission_classes([AllowAny])
def get_kit_by_category(request, category):
    """
    List all the kits.
    """
    if request.method == 'GET':
        kit_list = Kit.objects.filter(categories=category)
        kit_serializer = KitSerializer(kit_list, many=True)
        items = [json.dumps(item) for item in kit_serializer.data]
        return JsonResponse({'status': 'ok', 'items': items})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def delete_kit(request, pk):
    if request.method == 'GET':
        kit = Kit.objects.get(id=pk)
        kit.delete()
        return JsonResponse({'status': 'ok'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_kits(request):
    """
    List all the kits.
    """
    if request.method == 'GET':
        kits = Kit.objects.filter(user=request.user.username).get()
        serializer = KitSerializer(kits, many=True)
        return JsonResponse(str(kits), safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, username):
    if request.method == 'GET':
        user = User.objects.get(username=username)
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)
