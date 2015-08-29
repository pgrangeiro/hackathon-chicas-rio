var AthletesService = function() {
    var url = "assets/data/athlets.csv";
    this.getData = function() {
        return $.get(url, function(){}).then(function(response){
            return $.parseJSON(csvToJson(response));
        });
    };
};


var ResultsService = function() {
    var url = "assets/data/results.csv";
    this.getData = function() {
        return $.get(url, function(){}).then(function(response){
            return $.parseJSON(csvToJson(response));
        });
    };
};

