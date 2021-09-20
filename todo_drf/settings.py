"""
Django settings for todo_drf project.

Generated by 'django-admin startproject' using Django 3.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
import django_heroku
import dj_database_url
from dotenv import load_dotenv


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Initialise environment
load_dotenv()
SETMODE = os.environ['SETMODE']

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '-c1cg^-j%2l-e_-(0+ey030&yvz@^k$x@%w0pwgm#of%)qrqe+'

# SECURITY WARNING: don't run with debug turned on in production!
if SETMODE == 'prod':
    DEBUG = True
else:
    DEBUG = True

CORS_ALLOW_ALL_ORIGINS = True
ALLOWED_HOSTS = ['*']

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.IsAdminUser'
    ]
}

if SETMODE == 'prod':
    ACCOUNT_SIGNUP_REDIRECT_URL = 'https://kunaikit.herokuapp.com/#/dashboard/'
    LOGIN_REDIRECT_URL = 'https://kunaikit.herokuapp.com/#/dashboard/'
    ACCOUNT_LOGOUT_REDIRECT_URL = 'https://kunaikit.herokuapp.com/#/'
else:
    ACCOUNT_SIGNUP_REDIRECT_URL = 'http://127.0.0.1:8000/#/dashboard'
    LOGIN_REDIRECT_URL = 'http://127.0.0.1:8000/#/dashboard'
    ACCOUNT_LOGOUT_REDIRECT_URL = 'http://127.0.0.1:8000/#/'

SOCIAL_AUTH_TWITTER_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, name, screen_name,access_token,access_token_secret,profile_image_url,description'
}
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'djoser',
    'twitterauth.apps.TwitterauthConfig',
    'allauth',
    'psycopg2',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.twitter',
    'rest_framework.authtoken',
    'api.apps.ApiConfig',
    'django.contrib.sites',
    'corsheaders',
    'rest_framework',

]
SESSION_SAVE_EVERY_REQUEST = True
if SETMODE == 'prod':
    SITE_ID = 7
else:
    SITE_ID = 4
# 6 for production, 4 for local
# use the .env file to check if SETTINGS_MODE is dev, if it is set SITE_ID to 6 else 4
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'todo_drf.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR + '/skeltz_frontend/build', ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # "allauth.account.context_processors.account",
                # "allauth.socialaccount.context_processors.socialaccount",

            ],
        },
    },
]

WSGI_APPLICATION = 'todo_drf.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
AUTH_USER_MODEL = 'twitterauth.User'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'kunai',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'USER': 'kunaiadmin',
        'PASSWORD': 'maverick1828',
    }
}
db_from_env = dj_database_url.config()
DATABASES['default'].update(db_from_env)

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR + '/skeltz_frontend/build/static/',
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
django_heroku.settings(locals())
