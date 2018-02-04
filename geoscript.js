//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }


$(document).ready(function()  {
  console.log(0);
google.charts.load('upcoming', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMapInit);
});




var lt = 28.6139, ln=77.2090;

      function drawRegionsMapInit(lowTemp, highTemp, elevationMin, elevationMax, budget, pop) {
          var jsonD = [];

          pop*=2;



        var json = [];
        // var j2 = ['Germany', 0];
        // json[0]=j2;
        // console.log(json);

        json[0]=['Country', 'Popularity'];
        // for(var i=0;i<countryData.length;i++) {
        //   json[i+1] = [countryData[i].name, 1];
        // }


                var data = google.visualization.arrayToDataTable(json);





        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);




      }




      function drawRegionsMap(lowTemp, highTemp, elevationMin, elevationMax, budget, pop) {
        pop*=2;

      	lowTemp = parseInt(lowTemp);
      	highTemp = parseInt(highTemp);
      	elevationMin = parseInt(elevationMin);
      	elevationMax = parseInt(elevationMax);
      	      	budget = parseInt(budget);

      	// console.log(lowTemp+5);
      	//       	console.log(highTemp);
      	// console.log(elevationMin);
      	// console.log(elevationMax);

      	var jsonD=[];
      	var cnt=0;
      	jsonD[0]=['Country', 'Popularity'];
      	var cont,temp;
      	for(var i=0;i<countryData.length;i++)	{
      		cont = countryData[i];temp = calcCrow(lt,ln,cont.lat,cont.lng);
      		temp=temp/1.6;
      		temp=temp+5000;
      		console.log(budget);budget=parseInt(budget);
      		if(cont.temperature>=lowTemp && 
      			cont.temperature<=highTemp && 
      			cont.elevation>=elevationMin &&
      			cont.elevation<=elevationMax && temp<=budget && cont.popularity<=pop)	{
      			cnt++;
      			jsonD[cnt] = [cont.name, 1];
      			      			// console.log(cont.name + "  :  "+ cont.temperature + " , "+cont.elevation);

      		} 
      		else {
      			// console.log()
      			      			console.log(cont.name + "  :  "+ temp + " , "+(temp<=budget) + "  "+cont.popularity + "  "+ pop);
      			// jsonD[cnt] = [cont.name, 1];
      		}
      	}



        var data = google.visualization.arrayToDataTable(jsonD);





        var options = {datalessRegionColor:"#f5f5f5", color: "#eee", colorAxis: {colors: ['#dc407a']}};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);



      }


// $(document).ready(function()	{
// 	$('#updateBtn').click(function()	{
// 		var temp1= $('#temperature1').val();
// 		var temp2= $('#temperature2').val();
// 		var elev1= $('#elevation1').val();
// 		var elev2= $('#elevation2').val();
// 		var budget = $('#budget').val();
// 		drawRegionsMap(temp1, temp2, elev1, elev2, budget);
// 	});
// });