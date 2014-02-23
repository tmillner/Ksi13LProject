from django.db import models

class Cars(models.Model):
    id = models.IntegerField(primary_key=True)
    model = models.CharField(max_length=25, blank=True)
    class Meta:
        db_table = 'cars'

class Countries(models.Model):
    id = models.IntegerField(primary_key=True)
    country = models.CharField(max_length=50, blank=True)
    class Meta:
        db_table = 'countries'

class States(models.Model):
    id = models.IntegerField(primary_key=True)
    state = models.CharField(max_length=70, blank=True)
    #c_id = models.IntegerField()
    c_id = models.ForeignKey(Countries)
    class Meta:
        db_table = 'states'

class Cities(models.Model):
    id = models.IntegerField(primary_key=True)
    city = models.CharField(max_length=70, blank=True)
    #s_id = models.IntegerField()
    s_id = models.ForeignKey(States)
    class Meta:
        db_table = 'cities'

class Educations(models.Model):
    id = models.IntegerField(primary_key=True)
    education = models.CharField(max_length=40, blank=True)
    class Meta:
        db_table = 'educations'

class Languages(models.Model):
    id = models.IntegerField(primary_key=True)
    language = models.CharField(max_length=30, blank=True)
    class Meta:
        db_table = 'languages'

class Races(models.Model):
    race = models.CharField(max_length=30, blank=True)
    id = models.IntegerField(primary_key=True)
    class Meta:
        db_table = 'races'



# Create your models here.
