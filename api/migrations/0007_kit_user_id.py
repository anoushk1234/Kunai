# Generated by Django 3.2.7 on 2021-10-06 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_kit_cat_relation'),
    ]

    operations = [
        migrations.AddField(
            model_name='kit',
            name='user_id',
            field=models.IntegerField(null=True),
        ),
    ]
