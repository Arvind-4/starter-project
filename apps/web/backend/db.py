from decouple import config

from django.conf import settings

BASE_DIR = settings.BASE_DIR

DATABASE_NAME = config("DATABASE_NAME", cast=str)
DATABASE_USER = config("DATABASE_USER", cast=str)
DATABASE_PASSWORD = config("DATABASE_PASSWORD", cast=str)
DATABASE_HOST = config("DATABASE_HOST", cast=str)
DATABASE_PORT = config("DATABASE_PORT", cast=int)
DATABASE_IS_AVAILABLE = config("DATABASE_IS_AVAILABLE", cast=bool)

if all([DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_IS_AVAILABLE]):
    print("Using PostgreSQL in Docker")
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            "NAME": DATABASE_NAME,
            "USER": DATABASE_USER,
            "PASSWORD": DATABASE_PASSWORD,
            "HOST": DATABASE_HOST,
            "PORT": DATABASE_PORT,
    }
}
    
else:
    print("Using SQLite")
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }