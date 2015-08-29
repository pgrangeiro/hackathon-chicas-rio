$(document).ready(function(){

    var athletesService = new AthletesService();
    var resultsService = new ResultsService();

    athletesService.getData().then(function(result) {
        console.log(result);
    });
});
