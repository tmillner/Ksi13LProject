#! /usr/bin/python

from django.contrib import admin
#import questionnaire.models
from questionnaire.models import *

#admin.site.register(questionnaire.models.*)
admin.site.register(Countries)
admin.site.register(States)
admin.site.register(Cities)
admin.site.register(Races)
admin.site.register(Cars)
admin.site.register(Languages)
admin.site.register(Educations)
