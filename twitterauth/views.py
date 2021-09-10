from logging import error
from django.http.response import JsonResponse
from django.shortcuts import redirect, render
from rest_framework import response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
# import tweepy
import json
import time
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
# import the Response module
from rest_framework.response import Response
from allauth.socialaccount.templatetags.socialaccount import get_social_accounts
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from dj_rest_auth.registration.views import SocialLoginView
from dj_rest_auth.social_serializers import TwitterLoginSerializer
from .models import *
from allauth.socialaccount.models import SocialAccount, SocialToken
# from dotenv import load_dotenv
import os
import tweepy
from dotenv import load_dotenv
# define keys for tweepy from .env file
load_dotenv()
APP_KEY = os.environ['API_KEY']
APP_SECRET = os.environ['API_SECRET_KEY']
# import tweepy
# from tweepy import OAuthHandler
auth = tweepy.OAuthHandler(APP_KEY, APP_SECRET)
api = tweepy.API(auth)
# Create your views here.


class TwitterLogin(SocialLoginView):
    serializer_class = TwitterLoginSerializer
    adapter_class = TwitterOAuthAdapter


@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def home(request, *args, **kwargs):
    return redirect('https://kunai-frontend.vercel.app/dashboard')


@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_details(request, *args, **kwargs):
    # authorization of consumer key and consumer secret

    # allowed_uris = 'http://127.0.0.1:3000/'
    # print(request.user.id)
    try:
        user = api.get_user(request.user.username)
        # print(user)

        user_details = {}

        user_details['name'] = user.name
        # user_details['email'] = u.user.email
        user_details['screen_name'] = user.screen_name
        user_details['profile_image_url'] = user.profile_image_url

        return JsonResponse(user_details, status=status.HTTP_200_OK)
    except tweepy.TweepError as e:
        print(e)
        return JsonResponse({'error': 'Invalid username'}, status=status.HTTP_400_BAD_REQUEST, error=e)
