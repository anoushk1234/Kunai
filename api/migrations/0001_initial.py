# Generated by Django 3.2.7 on 2021-09-11 06:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(default=None, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Kit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=200)),
                ('profile_image', models.URLField(default=None)),
                ('title', models.CharField(default='', max_length=200)),
                ('markdown_data', models.TextField(default='')),
                ('upvotes', models.IntegerField(default=0)),
                ('downvotes', models.IntegerField(default=0)),
                ('categories', models.TextField(choices=[('Web Dev', 'Web Dev'), ('Grapic Design', 'Grapic Design'), ('Data Science', 'Data Science'), ('Digital Marketing', 'Digital Marketing')], default='No Category')),
                ('cat_relation', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.category')),
            ],
        ),
        migrations.CreateModel(
            name='KitComments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=200)),
                ('user_id', models.IntegerField(default=0)),
                ('comment', models.TextField(default='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('upvotes', models.IntegerField(default=0)),
                ('downvotes', models.IntegerField(default=0)),
                ('kit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='api.kit')),
            ],
            options={
                'ordering': ('created_at',),
            },
        ),
    ]
