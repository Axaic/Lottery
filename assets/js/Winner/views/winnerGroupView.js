'use strict';

(function (This) {
This.WinnerGroupView  = function (winnerGroup) {
    var template, 
    table,
    value,
    key,
    div,


    table = document.getElementsByClassName('userWrapper')[0];
    render(winnerGroup);
  
    function render (winnerGroup){
        
        winnerGroup.forEach(function (winner, i) {
            template = templates.winner;
            for (key in winner.JSON()) {
                value = '%=' + key + '%';
                template = template.replace(value, replaceValue(winner.JSON()[key]));
                div = document.createElement('tr');
                div.innerHTML = template;  
            }

            table.appendChild(div);
            var index = document.getElementsByClassName('number')[i];
            index.innerHTML = i + 1;
        });  
    }

    function replaceValue (changedVal) {
            value = changedVal;
            return value;
    }

    this.update = function (winners) { 
        while (table.firstChild){              
            table.removeChild(table.firstChild);
        } 
        
        render(winners);
    }
}
})(app);