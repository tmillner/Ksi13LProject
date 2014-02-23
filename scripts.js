//Javascript
//Get all country names at http://www.nationsonline.org/oneworld/countries_of_the_world.htm
//
var CountryProcessing={
	tables_with_countries:function(){
		//Get all tables
		var tables=window.document.getElementsByTagName("table");
		//Get tables which have countries (Denoted by a special class)
		var tables_with_countries=[];
		for(var i=0,L=tables.length;i<L;i++){
			if(tables[i].hasAttribute("class")&&tables[i].getAttribute("class")==="space"){
				tables_with_countries.push(tables[i]);
			}
		}
		return(tables_with_countries);
	}(),

	_Get_Country_And_Region:function(table){
		var country, region;
		var rows=table.getElementsByTagName("tbody")[0].children;
		for(var i=0,L=rows.length;i<L;i++){
			//Only rows with 5 children/td's have both country and region
			if(rows[i].childElementCount===5){
				//try to get the name of country which is a link or inner html - exception proof
				country=rows[i].children[1].getElementsByTagName("a")[0];
				country=country?country.childNodes[0].nodeValue:rows[i].children[1].innerHTML;
				//region is the last element, never hypertext
				region=rows[i].children[4].innerHTML;
				console.log(country+"|"+region);
			}
		}
	},

	Print_Formatted:function(){
		for(var i=0,L=this.tables_with_countries.length;i<L;i++){
			this._Get_Country_And_Region(this.tables_with_countries[i]);
		}
	},
};
CountryProcessing.Print_Formatted();
//=======================SAMPLE OUTPUT==================
/*
Afghanistan|South-Central Asia

Albania|Southern Europe

Algeria|Northern Africa

American Samoa|Polynesia, Oceania

Andorra|Southern Europe

Angola|Central Africa

Anguilla|Leeward Islands, Caribbean

Antarctica|Antarctica

Antigua and Barbuda|Leeward Islands, Caribbean

Argentina|Southern South America 

Armenia|Western Asia

Aruba|Leeward Islands, Caribbean

Australia|Australia

Austria|Western Europe

Azerbaijan|Caucasus, Western Asia

Bahamas|Caribbean

Bahrain|Arabian Peninsula, Middle East

Bangladesh|South-Central Asia

Barbados|Lesser Antilles, Caribbean

Belarus|Eastern Europe

Belgium|Western Europe

Belize|Central America 

Benin|West Africa

Bermuda|North America

Bhutan|South-Central Asia

Bolivia|Central South America

Bosnia and Herzegovina|Southern Europe

Botswana|Southern Africa

Brazil|Central Eastern  South America

Brunei Darussalam|Southeast Asia

Bulgaria|Eastern Europe

Burkina Faso|West Africa

Burundi|Eastern Africa, African Great Lakes

Cambodia|South-East Asia

Cameroon|Central Africa

Canada|North North America

Cape Verde|West Africa

Cayman Islands| Greater Antilles, Caribbean

Central African Republic|Central Africa

Chad|Central Africa

Chile|Western South America

China|Eastern Asia

Christmas Island|Southeast Asia

Cocos (Keeling) Islands|South-East Asia, Australia

Colombia|North West South America

Comoros|Eastern Africa

Democratic Republic of the Congo|Central Africa

Congo, Republic of|Central Africa

Cook Islands|Polynesia, Oceania

Costa Rica|Central America

Ivory Coast|West Africa

Croatia|Southern Europe

Cuba|Greater Antilles, Caribbean

Cyprus|Mediterranean, Western Asia

Czech Republic|Eastern Europe

Denmark|Northern Europe

Djibouti|Eastern Africa

Dominica|Lesser Antilles, Caribbean

Dominican Republic|Greater Antilles, Caribbean

East Timor|South-East Asia

Ecuador|North West South America

Egypt|Africa, Middle East

El Salvador|Central America

Equatorial Guinea|Central Africa

Eritrea|Eastern Africa

Estonia|Northern Europe

Ethiopia|Eastern Africa

Falkland Islands|Southern  South America

Faroe Islands|Northern Europe

Fiji|Melanesia, Oceania

Finland|Northern Europe

France|Western Europe

French Guiana|Northern South America

French Polynesia|Polynesia, Oceania

French Southern Territories|Southern South America, Antarctic

Gabon|Central Africa

Gambia|West Africa

Georgia|Western Asia

Germany|Western Europe

Ghana|West Africa

Gibraltar|Southern Europe

Great Britain| Northern Europe

Greece|Southern Europe

Greenland|North America

Grenada|Lesser Antilles, Caribbean

Guadeloupe|Lesser Antilles, Caribbean

Guam|Micronesia, Oceania

Guatemala|Central America

Guinea|West Africa

Guinea-Bissau|West Africa

Guyana|North Eastern South America

Haiti|Greater Antilles, Caribbean

Holy See|Southern Europe within Italy

Honduras|Central America

Hong Kong|Eastern Asia

Hungary|Eastern Europe

Iceland|Northern Europe

India|South-Central  Asia

Indonesia|Maritime South-East Asia

Iran (Islamic Republic of)|South-Central  Asia

Iraq|Middle East, Western Asia

Ireland|Northern Europe

Israel|Middle East, Western Asia

Italy|Southern Europe

Jamaica|Greater Antilles, Caribbean

Japan|Eastern Asia

Jordan|Middle East, Western Asia

Kazakhstan|Central Asia

Kenya|Eastern Africa

Kiribati|Micronesia, Oceania

Korea, Democratic People's Rep. (North Korea)|Eastern Asia

Korea, Republic of (South Korea)|Eastern Asia

Kosovo|Southern Europe

Kuwait|Middle East, Western Asia

Kyrgyzstan|Central Asia

Lao, People's Democratic Republic|South-East Asia

Latvia|Northern Europe

Lebanon|Middle East, Western Asia

Lesotho|Southern Africa

Liberia|West Africa

Libya|Northern Africa

Liechtenstein|Western Europe

Lithuania|Northern Europe

Luxembourg|Western Europe

Macau|Eastern Asia

Macedonia, Rep. of|Southern Europe

Madagascar|Eastern Africa

Malawi|Eastern Africa

Malaysia|Southeast Asia

Maldives|South-Central Asia

Mali|West Africa

Malta|Southern Europe

Marshall Islands|Micronesia, Oceania

Martinique|Lesser Antilles, Caribbean

Mauritania|West Africa

Mauritius|Eastern Africa

Mayotte|Eastern Africa

Mexico|North America

Micronesia, Federal States of|Micronesia, Oceania

Moldova, Republic of|Eastern Europe

Monaco|Southern Europe

Mongolia|Eastern Asia

Montenegro|Southern Europe

Montserrat|Lesser Antilles, Caribbean

Morocco|Northern Africa

Mozambique|Eastern Africa

Myanmar|Southeast Asia

Namibia|Southern Africa

Nauru|Micronesia, Oceania

Nepal|South-Central Asia

Netherlands|Western Europe

Netherlands Antilles|Caribbean

New Caledonia|Melanesia, Oceania

New Zealand|Oceania; Australia

Nicaragua|Central America

Niger|West Africa

Nigeria|West Africa

Niue|Polynesia, Oceania

Northern Mariana Islands|Micronesia, Oceania

Norway|Northern Europe

Oman|Middle East

Pakistan|South-Central Asia

Palau|Micronesia, Oceania

Palestinian territories|Middle East, Western Asia

Panama|Central America

Papua New Guinea|Maritime Southeast Asia, Melanesia, Oceania

Paraguay|Central South America

Peru|Western South America

Philippines|Southeast Asia

Pitcairn Island|Polynesia, Oceania

Poland|Eastern Europe

Portugal|Southern Europe

Puerto Rico|Greater Antilles, Caribbean

Qatar|Arabian Peninsula, Middle East

Reunion Island|Eastern Africa

Romania|Eastern Europe

Russian Federation|Eastern Europe - Northern Asia

Rwanda|Eastern Africa, African Great Lakes

Saint Kitts and Nevis|Lesser Antilles, Caribbean

Saint Lucia|Lesser Antilles, Caribbean

Saint Vincent and the Grenadines|Lesser Antilles, Caribbean

Samoa|Polynesia, Oceania

San Marino|Southern Europe within Italy

Sao Tome and Principe|Central Africa

Saudi Arabia|Arabian Peninsula, Middle East 

Senegal|West Africa

Serbia|Southern Europe

Seychelles|Eastern Africa

Sierra Leone|West Africa

Singapore|Southeast Asia

Slovakia (Slovak Republic)|Eastern Europe

Slovenia|Southern Europe

Solomon Islands|Melanesia, Oceania

Somalia|Eastern Africa

South Africa|Southern Africa

South Sudan| East-Central Africa

Spain|Southern Europe

Sri Lanka|South-Central  Asia

Sudan|Northern Africa

Suriname|North-Eastern South America

Swaziland|Southern Africa

Sweden|Northern Europe

Switzerland|Western Europe

Syria|Middle East, Western Asia

Taiwan|Eastern Asia

Tajikistan|Central Asia

Tanzania|Eastern Africa

Thailand|South-East Asia

Tibet|South-Central Asia

Timor-Leste|Maritime South-East Asia

Togo|West Africa

Tokelau|Oceania/Australia

Tonga|Polynesia, Oceania

Trinidad and Tobago|Northern South America, Caribbean

Tunisia|Northern Africa

Turkey|Southeastern Europe, Western Asia

Turkmenistan|Central Asia

Turks and Caicos Islands|Caribbean, parts of the Bahamas island chain.

Tuvalu|Polynesia, Oceania

Uganda|Eastern Africa

Ukraine|Eastern Europe

United Arab Emirates|Arabian Peninsula, Middle East

United Kingdom|Northern Europe

United States|North America

Uruguay|Central East South America 

Uzbekistan|Central Asia

Vanuatu|Melanesia, Oceania

Vatican City State (Holy See)|Southern Europe within Italy

Venezuela|Northern South America 

Vietnam|South-East Asia

Virgin Islands (British)|Lesser Antilles, Caribbean

Virgin Islands (U.S.)|Lesser Antilles, Caribbean

Wallis and Futuna Islands|Polynesia, Oceania

Western Sahara|Northern Africa

Yemen|Arabian Peninsula, Middle East

Zambia|Eastern Africa

Zimbabwe|Eastern Africa
*/

//Below is above original
var CountryRegionProcessing={
	print_formatted_result:"",

	Print_Formatted:function(){
		//It is important when a country is selected, the server processes
		//   the regions, if done without sync/wait, see how by looking 
		//   at what happens if performed (selecting by click) manually!
		var Countries=window.document.getElementById("SelectCountry");
		var num_countries=Countries.options.length;
		var Regions=window.document.getElementById("SelectRegion");
		var num_regions,country_name,region_name;
		this.print_formatted_result="";
		//Go through all countries (saving the name and selecting)
		//  NOTE FOR COUNTRIES AND REGIONS, START AT 1, 0th item is ".."
		for(var i=1;i<num_countries;i++){
			Countries.options.selectedIndex=i;
			country_name=Countries.options[i].childNodes[0].nodeValue;
			//With country selected, go through all the regions in it (After syncing)
			RS.Execute("WorldRegion.aspx","GetRegions","ABQIAAAAGbe15MnqXib6_AaXgHErgxSwjfvWQ-isB4Rz4D7GZAmS-xEErxQEqveaiCBNZdetB1hDaqHBggK21Q",i,UpdateRegion);
			num_regions=Regions.options.length;
			for(var j=1;j<num_regions;j++){
				region_name=Regions.options[j].childNodes[0].nodeValue;
				//At this point in both loops, we have a unique country & region
				console.log(country_name+"|"+region_name);
				this.print_formatted_result+=country_name+"|"+region_name+"\n";
			}
		}
	},
};
CountryRegionProcessing.Print_Formatted();

//THIS Works
CountryRegionProcessing={
		print_formatted_result:"",

		Print_Formatted:function(){
			//It is important when a country is selected, the server processes
			//   the regions, if done without sync/wait, see how by looking 
		  //   at what happens if performed (selecting by click) manually!
			var Countries=window.document.getElementById("SelectCountry");
			var num_countries=Countries.options.length;
			var Regions=window.document.getElementById("SelectRegion");
			var num_regions,country_name,region_name;
			this.print_formatted_result="";
			//Go through all countries (saving the name and selecting)
			//  NOTE FOR COUNTRIES AND REGIONS, START AT 1, 0th item is ".."
			var i=1;
			var main=window.setInterval(function(){
				if(i<num_countries){
					Countries.options.selectedIndex=i;
					country_name=Countries.options[i].childNodes[0].nodeValue;
					//With country selected, go through all the regions in it (After syncing)
					RS.Execute("WorldRegion.aspx","GetRegions","ABQIAAAAGbe15MnqXib6_AaXgHErgxSwjfvWQ-isB4Rz4D7GZAmS-xEErxQEqveaiCBNZdetB1hDaqHBggK21Q",i,UpdateRegion);
					first_item=Regions.options[1].childNodes[0].nodeValue;
					var id=window.setInterval(function(){
						num_regions=Regions.options.length;
						if(num_regions>1&&first_item!==Regions.options[1].childNodes[0].nodeValue){
							for(var j=1;j<num_regions;j++){
								region_name=Regions.options[j].childNodes[0].nodeValue;
								//At this point in both loops, we have a unique country & region
								console.log(country_name+"|"+region_name);
								this.print_formatted_result+=country_name+"|"+region_name+"\n";
							}
							window.clearInterval(id);
						}
					},600);
					i+=1;
				}
				else{
					window.clearInterval(main);
					alert(this.print_formatted_result);
				}
			},3000);
	  },
};

var Cars={
	car_list:"",

	Get_List_Of_Cars:function(){
		//Find element with dropdown, get size of options, 
		//select each element, and get textual node value
		this.car_list=""
		var dropdown=window.document.getElementById("j_id_3b-j_id_3d-j_id_3e_8u-j_id_3e_9k-j_id_3e_9n-j_id_3e_9o-make");
		var dropdown_size=dropdown.options.length;
		for(var i=0;i<dropdown_size;i++){
			dropdown.options.selectedIndex=i;
			var element_value=dropdown.options[i].childNodes[0].nodeValue;
			console.log(element_value);
			this.car_list+=element_value+"\n";
		}	
	},
};
//OUTPUT
/*
Any Make
Acura
Alfa Romeo
AMC
Aston Martin
Audi
Bentley
BMW
Buick
Cadillac
Chevrolet
Chrysler
Daewoo
Datsun
DeLorean
Dodge
Eagle
Ferrari
FIAT
Fisker
Ford
Freightliner
Geo
GMC
Honda
HUMMER
Hyundai
Infiniti
Isuzu
Jaguar
Jeep
Kia
Lamborghini
Land Rover
Lexus
Lincoln
Lotus
Maserati
Maybach
Mazda
McLaren
Mercedes-Benz
Mercury
MINI
Mitsubishi
Nissan
Oldsmobile
Plymouth
Pontiac
Porsche
RAM
Rolls-Royce
Saab
Saturn
Scion
smart
SRT
Subaru
Suzuki
Tesla
Toyota
Volkswagen
Volvo
Yugo
 * */

//Improved from TALEO Using working version of prior Original
CountryRegionProcessing={
		print_formatted_result:"",

		Print_Formatted:function(){
			//It is important when a country is selected, the server processes
			//   the regions, if done without sync/wait, see how by looking 
		  //   at what happens if performed (selecting by click) manually!
			//   This function needs to use jquery to trigger a change event
			var Countries=window.document.getElementById("editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_1972143019_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-0");
			var jcountries=$("#editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_1972143019_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-0");
			var num_countries=Countries.options.length;
			var Regions=window.document.getElementById("editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_1972143019_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-1");
			var jregions=$("#editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_1972143019_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-1");
			var Cities=window.document.getElementById("editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_1972143019_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-2");
			var num_regions,num_cities,country_name,region_name,city_name;
			this.print_formatted_result="";
			//Go through all countries (saving the name and selecting)
			//  NOTE FOR COUNTRIES,REGIONS,CITIES START AT 1, 0th item is "Not Specified"
			var i,j,k,arr_country_values=[];
			//Save all country values
			for(i=0;i<num_countries;i++){
				arr_country_values.push(Countries.options[i].value);
			}
			//sequentially set each country 
			for(i=1;i<num_countries;i++){
				jcountries.val(arr_country_values[i]).change();
				//may need to wait here
				//go through all regions/states
				country_name=Countries.options[i].childNodes[0].nodeValue;
				var arr_region_values=[];
				num_regions=Regions.options.length;
				for(j=0;j<num_regions;j++){
					arr_region_values.push(Regions.options[j].value);
				}
				//sequentially set each region
				for(j=1;j<num_regions;j++){
					jregions.val(arr_region_values[j]).change();
					//may need to wait here
					//go through all cities IF THEY EXIST (They always do just hidden)
					//  so check if only 1 option
					region_name=Regions.options[j].childNodes[0].nodeValue;
					num_cities=Cities.options.length;
					if(num_cities>1&&Regions.options[1].childNodes[0].nodeValue!==region_name){
						for(k=1;k<num_cities;k++){
							city_name=Cities.options[k].childNodes[0].nodeValue;
							console.log(country_name+"|"+region_name+"|"+city_name);
							this.print_formatted_result+=country_name+"|"+region_name+"|"+city_name+"<br />";
						}
					}
					else{
						console.log(country_name+"|"+region_name);
						this.print_formatted_result+=country_name+"|"+region_name+"<br />";
					}
				}
			}
		},
};
CountryRegionProcessing.Print_Formatted()

//THIS WORKS, SPENT LARGE AMOUNT OF TIME WHEN MISTAKE WAS LOOP PLACEMENT :|	
CountryRegionProcessing.Print_Formatted()

ountryRegionProcessing={
		print_formatted_result:"",

		Print_Formatted:function(){
			//It is important when a country is selected, the server processes
			//   the regions, if done without sync/wait, see how by looking 
		    //   at what happens if performed (selecting by click) manually!
			//   This function needs to use jquery to trigger a change event
			var Countries=window.document.getElementById("editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_874817430_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-0");
			var jcountries=$("#editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_874817430_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-0");
			var num_countries=Countries.options.length;
			var Regions=window.document.getElementById("editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_874817430_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-1");
			var jregions=$("#editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_874817430_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-1");
			var Cities=window.document.getElementById("editTemplate-editForm-content-flowTemplateFull-genericPage-j_id_jsp_874817430_15pc7-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-2");
			var num_regions,num_cities,country_name,region_name,city_name;
			this.print_formatted_result="";
			//Go through all countries (saving the name and selecting)
			//  NOTE FOR COUNTRIES,REGIONS,CITIES START AT 1, 0th item is "Not Specified"
			var i,j,k,arr_country_values=[];
			//Save all country values
			for(i=0;i<num_countries;i++){
				arr_country_values.push(Countries.options[i].value);
			}
			//sequentially set each country 
			i=1
			var country_interval=window.setInterval(function(){
				jcountries.val(arr_country_values[i]).change();
				//may need to wait here
				//go through all regions/states
				country_name=Countries.options[i].childNodes[0].nodeValue;
				var arr_region_values=[];
				//sequentially set each region
				j=1
				var region_interval=window.setInterval(function(){
					num_regions=Regions.options.length;
					if(num_regions<2||num_regions==="undefined"){
					   window.clearTimeout(region_interval)
					   console.log(country_name);
						   this.print_formatted_result+=country_name+"<br />";
						}
						else{
							jregions.val(Regions.options[j].value).change();
							//may need to wait here
							//go through all cities IF THEY EXIST (They always do just hidden)
							//  so check if only 1 option
							region_name=Regions.options[j].childNodes[0].nodeValue;
							window.setTimeout(function(){
							num_cities=Cities.options.length||0;
							for(k=1;k<num_cities;k++){
								if(num_cities>1&&Cities.options[k].childNodes[0].nodeValue!==region_name){
									city_name=Cities.options[k].childNodes[0].nodeValue;
									console.log(country_name+"|"+region_name+"|"+city_name);
									this.print_formatted_result+=country_name+"|"+region_name+"|"+city_name+"<br />";
								}
									else{
										console.log(country_name+"|"+region_name);
										this.print_formatted_result+=country_name+"|"+region_name+"<br />";
									}
							}},200);
						    j+=1
						    if(+j>=num_regions) window.clearInterval(region_interval);
				    }
				},710);
				i+=1;
				if(+i>=num_countries){
				    window.clearInterval(country_interval);
				    document.write(this.print_formatted_result);
				};
			},60000);
		},
};
CountryRegionProcessing.Print_Formatted()

	}
//script for languages
//javascript
//http://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers
var target_table=document.getElementsByClassName("wikitable sortable jquery-tablesorter")[1]
var target_body=target_table.getElementsByTagName("tbody")[0]
var rows=target_body.getElementsByTagName("tr")
var result=''
for(var i=0,L=rows.length;i<L;i++){
	get first td in row (it has language name)
  result+=language=rows[i].getElementsByTagName("td")[0].getElementsByTagName("b")[0].getElementsByTagName("a")[0].childNodes[0].nodeValue)+"<br />";
}
document.write(result);

