from django.urls import path, include
from twitterauth import views
from twitterauth.views import *
urlpatterns = [
    # path('', include('djoser.urls')),
    # path('', include('djoser.urls.authtoken')),
    path('health/', views.health_check, name='health'),
    path('home/', views.home, name='home'),
    #path('userdetails/', views.login, name='login'),
    path('userdetails/', views.get_user_details, name='userdetails'),
    # path('home/', views.home, name='home'),
]
