from django.urls import path
from . import views

urlpatterns = [
path('health/', views.health, name='health'),
path('get_kit/', views.get_kit_list, name='get_kit'),
path('get_kit_coms/<int:pk>/', views.get_comments_for_kit, name='get_kit_coms'),
path('add_com/', views.add_kit_comment, name='add_com'),
path('edit_kit_com/', views.edit_kit_comment, name='edit_kit_com'),
path('add_kit/', views.add_kit, name='add_kit'),
path('get_user/<str:username>', views.get_user, name='get_user'),
path('get_userkit/', views.get_user_kits, name='get_usekits'),

]
