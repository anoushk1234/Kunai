from django.urls import path
from . import views

urlpatterns = [
path('health/', views.health, name='health'),
path('get_kit/', views.get_kit_list, name='get_kit'),
path('add_com/', views.add_kit_comment, name='add_com'),
path('add_kit/', views.add_kit, name='add_kit'),
path('get_user/', views.get_user, name='get_user'),
path('get_userkit/', views.get_user_kits, name='get_usekits'),

]
