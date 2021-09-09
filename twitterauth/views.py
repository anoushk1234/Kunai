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
#from dotenv import load_dotenv
import os
# import tweepy
# from tweepy import OAuthHandler

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
    return redirect('/dashboard')
