#! /usr/bin/python python
# Open the file which contains pipe delimited country,
#  state, city, then convert into a db like format w/
#  foreign keys
#NOTES: a line format is: 0=country, 1=state, 2=city

first_line=["","",""]
idx_country=0
idx_state=0

#Create output files for country, state, & city
out_file_country=open("countries_TEST","w")
out_file_state=open("states_TEST","w")
out_file_city=open("cities_TEST","w")

#Open file the TRADITIONAL way (not utilizing 'with' kword)
in_file=open("countries_cities_regions","r")
try:
	for line in in_file:
		line=line.replace("\n","")
		next_line=line.split("|")
		
		#determine if we should add a new country using equality
		if first_line[0]!=next_line[0]:
			idx_country+=1
			out_file_country.write(next_line[0]+"\n")
		#determine if we should add a new state using equality
		if len(next_line)>1 and (len(first_line)==1 or first_line[1]!=next_line[1]):
			idx_state+=1
			out_file_state.write(str(idx_country)+"|"+next_line[1]+"\n")
		#determine if we should add a new city if not ""
		if len(next_line)>2:
			out_file_city.write(str(idx_state)+"|"+next_line[2]+"\n")
		#advance first line to next line for next iteration
		first_line=next_line
finally:
	in_file.close()
	out_file_country.close()
	out_file_state.close()
	out_file_city.close()
