from django.contrib import admin

# Register your models here.

from .models import *
#add model name
admin.site.register(Kit)
admin.site.register(Category)
@admin.register(KitComments)
class KitCommentsAdmin(admin.ModelAdmin):
    list_display = ('id', 'kit', 'comment', 'user', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('comment',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    fields = ('comment',)
    readonly_fields = ('id', 'kit', 'comment', 'user', 'created_at', 'updated_at')