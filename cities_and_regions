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
		var i=1;
		window.setInterval(function(){
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
				},1000);
				i+=1;
			}
		},4000);
	},
};
CountryRegionProcessing.Print_Formatted();
