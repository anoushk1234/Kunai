from django.db import models
from django.utils import timezone
# Create your models here.
from twitterauth.models import User


class Category(models.Model):
    category = models.CharField(max_length=100, null=True, default=None)
    #related_kits=models.ManyToManyField('Kit', related_name='related_categories')

    def __str__(self):
        return '%s' % (self.category)


class Kit(models.Model):
    CATEGORIES = (
        ('Web Dev', 'Web Dev'),
        ('Graphic Design', 'Graphic Design'),
        ('Crypto', 'Crypto'),
        ('Data Science', 'Data Science'),
        ('Digital Marketing', 'Digital Marketing'),
    )
    user = models.CharField(max_length=200)
    profile_image = models.URLField(max_length=200, default=None)
    title = models.CharField(max_length=200, default='')
    markdown_data = models.TextField(default='')
    upvotes = models.ManyToManyField(User, related_name='upvotes')
    # downvotes = models.IntegerField(default=0)
    categories = models.TextField(choices=CATEGORIES, default='No Category')
    cat_relation = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=True, default=None)

    def __str__(self):
        return "%s %s %s %s %s %s %s" % (self.user, self.markdown_data, self.title, self.upvotes, self.categories, self.cat_relation)


class KitComments(models.Model):
    kit = models.ForeignKey(
        Kit, on_delete=models.CASCADE, related_name='comments')
    user = models.CharField(max_length=200)
    user_id = models.IntegerField(default=0)
    comment = models.TextField(default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)

    class Meta:
        ordering = ('created_at',)

    def __str__(self):
        return '%s %s %s' % (self.user, self.kit, self.comment)
