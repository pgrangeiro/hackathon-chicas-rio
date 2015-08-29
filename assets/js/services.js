var AthletesService = function() {
    var url = "assets/data/athlets.csv";
    var data;

    this.setData = function() {
        $.get(url, function(){}).success(function(response){
            data = $.parseJSON(csvToJson(response));
        });
    };

    this.getData = function() {
       return data;
    };

    this.init = function() {
       this.setData();
    };

    this.init();

};


var ResultsService = function() {
    var url = "assets/data/results.csv";
    var data;

    this.setData = function() {
        $.get(url, function(){}).success(function(response){
            data = $.parseJSON(csvToJson(response));
        });
    };

    this.getData = function() {
       return data;
    };

    this.init = function() {
       this.setData();
    }

    this.init();
};
