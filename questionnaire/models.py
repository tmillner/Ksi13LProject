# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#     * Rearrange models' order
#     * Make sure each model has one field with primary_key=True
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.
from __future__ import unicode_literals

from django.db import models

class AuthGroup(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=80)
    class Meta:
        db_table = 'auth_group'

class AuthGroupPermissions(models.Model):
    id = models.IntegerField(primary_key=True)
    group = models.ForeignKey(AuthGroup)
    permission = models.ForeignKey('AuthPermission')
    class Meta:
        db_table = 'auth_group_permissions'

class AuthPermission(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    content_type = models.ForeignKey('DjangoContentType')
    codename = models.CharField(max_length=100)
    class Meta:
        db_table = 'auth_permission'

class AuthUser(models.Model):
    id = models.IntegerField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField()
    is_superuser = models.BooleanField()
    username = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=75)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    class Meta:
        db_table = 'auth_user'

class AuthUserGroups(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(AuthUser)
    group = models.ForeignKey(AuthGroup)
    class Meta:
        db_table = 'auth_user_groups'

class AuthUserUserPermissions(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(AuthUser)
    permission = models.ForeignKey(AuthPermission)
    class Meta:
        db_table = 'auth_user_user_permissions'

class Cars(models.Model):
    id = models.IntegerField(primary_key=True)
    model = models.CharField(max_length=25, blank=True)
    class Meta:
        db_table = 'cars'
    def __unicode__(self):
      return self.model

class Cities(models.Model):
    id = models.IntegerField(primary_key=True)
    city = models.CharField(max_length=70, blank=True)
    s = models.ForeignKey('States')
    class Meta:
        db_table = 'cities'
    def __unicode__(self):
      return self.city

class Countries(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True)
    class Meta:
        db_table = 'countries'
    def __unicode__(self):
      return self.country

class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    class Meta:
        db_table = 'django_content_type'

class DjangoSession(models.Model):
    session_key = models.CharField(max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()
    class Meta:
        db_table = 'django_session'

class DjangoSite(models.Model):
    id = models.IntegerField(primary_key=True)
    domain = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    class Meta:
        db_table = 'django_site'

class Educations(models.Model):
    id = models.IntegerField(primary_key=True)
    education = models.CharField(max_length=40, blank=True)
    class Meta:
        db_table = 'educations'
    def __unicode__(self):
      return self.education

class Languages(models.Model):
    id = models.IntegerField(primary_key=True)
    language = models.CharField(max_length=30, blank=True)
    class Meta:
        db_table = 'languages'
    def __unicode__(self):
      return self.language

class Races(models.Model):
    race = models.CharField(max_length=30, blank=True)
    id = models.IntegerField(primary_key=True)
    class Meta:
        db_table = 'races'
    def __unicode__(self):
      return self.race

class States(models.Model):
    id = models.IntegerField(primary_key=True)
    state = models.CharField(max_length=70, blank=True)
    c = models.ForeignKey(Countries)
    class Meta:
        db_table = 'states'
    def __unicode__(self):
      return self.state

class Records(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True)
    language = models.ForeignKey(Languages, null=True, db_column='language', blank=True)
    education = models.ForeignKey(Educations, null=True, db_column='education', blank=True)
    country = models.ForeignKey(Countries, null=True, db_column='country', blank=True)
    state = models.ForeignKey(States, null=True, db_column='state', blank=True)
    city = models.ForeignKey(Cities, null=True, db_column='city', blank=True)
    race = models.ForeignKey(Races, null=True, db_column='race', blank=True)
    car = models.ForeignKey(Cars, null=True, db_column='car', blank=True)
    submitted_at = models.DateTimeField()
    class Meta:
        db_table = 'records'
