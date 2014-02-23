#! /usr/bin/python python
#Remove duplicate rows in file (look at last line and
#  compare with current)

first_line=""

#Create output files 
out_file_state=open("states2","w")

#Open file the TRADITIONAL way (not utilizing 'with' kword)
in_file=open("states","r")
try:
	for next_line in in_file:
		if first_line!=next_line:
			out_file_state.write(next_line)
		first_line=next_line
finally:
	out_file_state.close()
