# Generated by Django 3.2.7 on 2021-09-29 17:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_kit_categories'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='kit',
            name='cat_relation',
        ),
    ]
