$(document).ready(function(){

    var athletesService = new AthletesService();
    var resultsService = new ResultsService();
    var chart1 = $("#chart1.chart");
    var chart2 = $("#chart2.chart");

    

    athletesService.getData().then(function(dataAthletes) {
        // console.table(dataAthletes);       
	    resultsService.getData().then(function(dataResults) {
	        // console.table(dataResults);

	        var categorias = ['Shot Put', 'Discus'];
		    var anosSP = [];
		    var anosD = [];
		    var recordesSP = [];
		    var recordesD = [];
		    $(dataResults).each(function(){
		    	
		    	if(this.Note1 == "WR" && this.Event == 'Shot Put'){
		    		recordesSP.push(parseFloat(this.Result1));
		    		if(anosSP.indexOf(this.Year) == -1){
			    		anosSP.push(this.Year.slice(0,4));
			    	}
		    	}else if(this.Note1 == "WR" && this.Event == 'Discus'){
		    		recordesD.push(parseFloat(this.Result1));
		    		if(anosD.indexOf(this.Year) == -1){
			    		anosD.push(this.Year.slice(0,4));
			    	}
		    	}
		    });
		    console.log(recordesSP);
		    anosSP = anosSP.sort();	
		    anosD = anosD.sort();	
		    console.log(anosSP);


		    chart1.highcharts({
		        chart: {
		            type: 'line'
		        },
		        title: {
		            text: ''
		        },
		        colors: ["#CD2725"],
		        xAxis: {
		            categories: anosSP
		        },
		        yAxis: {
		            title: {
		                text: ''
		            }
		        },
		        series: [{
		            name: 'Arremesso de pesos',
		            data: recordesSP
		        }]
		    });

		    chart2.highcharts({
		        chart: {
		            type: 'line'
		        },
		        title: { 
		            text: ''
		        },
		        colors: ["#CD2725"],
		        xAxis: {
		            categories: anosD
		        },
		        yAxis: {
		            title: {
		                text: ''
		            }
		        },
		        series: [{
		            name: 'Lançamento de discos',
		            data: recordesD
		        }]
		    });

		    var marks1 = chart1.find('.highcharts-markers.highcharts-tracker path');
		    console.log(marks1.length);
		    marks1.on('click', function(){
		    	var index = $(this).index();
		    	anosSP.reverse();
		    	console.log(anosSP, anosSP[index]);
		    });
		    
	    });


    });
  
});
