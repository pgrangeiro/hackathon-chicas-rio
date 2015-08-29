var AthletesService = function() {
    //TODO recuperar dados da planilha de atletas
    var url = "assets/data/athlets.csv";

    this.getData = function() {
        $.get(url, function(response) {
            var csv = $.parseJSON(csvToJson(response));
            return csv;
        });
    };

};

var ResultsService = function() {
    //TODO recuperar dados da planilha de resultados
    var url = "assets/data/results.csv";

    this.getData = function() {
        getToJson(url, function(data) {
            return data;
        });
    };
};
