from django.db import models

# Create your models here.

class Kit(models.Model):
  user = models.CharField(max_length=200)
  markdown_data = models.TextField(default='')
      
  def __str__(self):
    return "%s %s"%(self.user, self.markdown_data)
  
class KitComments(models.Model):
  kit = models.ForeignKey(Kit, on_delete=models.CASCADE,related_name='comments')
  user = models.CharField(max_length=200)
  user_id=models.IntegerField(default=0)
  comment = models.TextField(default='')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  upvotes = models.IntegerField(default=0)
  downvotes = models.IntegerField(default=0)
  
  class Meta:
    ordering = ('created_at',)
  
  def __str__(self):
    return 'Comment by {} on {}'.format(self.user, self.post) 