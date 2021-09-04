from django.urls import path
from . import views

urlpatterns = [
path('health/', views.health, name='health'),
path('get_kit/', views.get_kit_list, name='get_kit'),
path('add_com/', views.add_kit_comment, name='add_com'),

]
