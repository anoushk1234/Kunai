from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health, name='health'),
    path('votes/<int:kit_id>', views.get_kit_upvotes_and_downvotes, name='votes'),
    path('up/<int:kit_id>', views.upvote_this_kit, name='up'),
    #path('down/<int:pk>', views.downvote_this_kit, name='down'),
    path('search/<str:search_term>/', views.advanced_search, name="search"),
    path('getkit/', views.get_kit_list, name='getkit'),
    path('getkit/<int:pk>/', views.get_kit_by_kit_id, name='getkitbyid'),
    path('getkitcoms/<int:pk>/', views.get_comments_for_kit, name='getkitcoms'),
    path('addcom/', views.add_kit_comment, name='add_com'),
    path('editkitcom/', views.edit_kit_comment, name='editkitcom'),
    path('addkit/', views.add_kit, name='addkit'),
    path('editkit/<int:pk>/', views.update_kit, name='editkit'),
    path('deletekit/<str:username>/', views.delete_kit, name='deletekit'),
    path('getuser/', views.get_twitter_user, name='getuser'),
    path('getuserkit/', views.get_user_kits, name='getusekits'),
    path('kitcategory/<str:category>/',
         views.get_kit_by_category, name='kitcategory'),

]
