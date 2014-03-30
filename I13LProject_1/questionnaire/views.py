from django.http import HttpResponse
from django.shortcuts import render
from django.utils import timezone

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
			'cars':cars,
			'request':request}
	return render(request,"questionnaire/index.html",context)

def submit(request):
	try:
		#Get the arguments passed from the form at submit
		a_name=request.POST['Name']
		a_education=Educations.objects.get(id=request.POST['Education'])
		a_language=Languages.objects.get(id=request.POST['Language'])
		a_country=Countries.objects.get(id=request.POST['Country'])
		a_state=States.objects.get(id=1) #TODO request.POST['State']
		a_city=Cities.objects.get(id=24813) #TODO request.POST['City']
		a_race=Races.objects.get(id=request.POST['Race'])
		a_car=Cars.objects.get(id=request.POST['Car'])

		#Save the record in the DB
		user_record=Records(
				name=a_name,
				education=a_education,
				language=a_language,
				country=a_country,
				state=a_state,
				city=a_city,
				race=a_race,
				car=a_car,
				submitted_at=timezone.now())
		user_record.save()

		#Generate cookie so this user can't resubmit
		request.session.set_expiry(0)
		request.session['has_submitted']=True
		#Generate thank you message
		context={'stored_user':a_name,
				'request':request}
		#Actually submit
		return render(request,"questionnaire/index.html",context)
	except (KeyError):
		#Redisplay the questionnaire with an error messge
		return render(request,"questionnaire/index.html",{'request':request,
			'error':"An error occurred. Please review your form before sumbission"})

# Create your views here.
