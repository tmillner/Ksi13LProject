from django.http import HttpResponse
from django.shortcuts import render

from questionnaire.models import *

def index(request):
	#return HttpResponse("<h1>Questionnaire</h1><br /><h3><i>Please fill out the below</i></h3>")
	countries=Countries.objects.all().order_by('id')
	states=States.objects.all().order_by('id')
	cities=Cities.objects.all().order_by('id')
	languages=Languages.objects.all().order_by('id')
	races=Races.objects.all().order_by('id')
	educations=Educations.objects.all().order_by('id')
	cars=Cars.objects.all().order_by('id')

	context={'countries':countries,
			'states':states,
			'cities':cities,
			'languages':languages,
			'races':races,
			'educations':educations,
			'cars':cars}
	return render(request,"questionnaire/index.html",context)


# Create your views here.
