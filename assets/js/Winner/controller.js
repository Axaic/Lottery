 'use strict';

 function Controller () { 
    var winnerGroupView,
    winnerGroup,
    lotteryButton,
    winnersButton,
    winnerNames,
    result,
    newWinner;

    winnerGroup = new app.WinnerGroup();
    winnerGroupView = new app.WinnerGroupView(winnerGroup);

    m.subscribe('update-view', updateWinners);
    m.subscribe('addNewWinner', addWinner);

     function addWinner (){
        newWinner = getInfo();
        winnerGroup.addWinner(newWinner);

     }

    function updateWinners (winners){

        winnerGroupView.update(winners);
    }

    //adding new winner to table

    function getInfo() {
        var name = document.getElementById('userName').value,
        dateBirth = document.getElementById('datepicker').value,
        email = document.getElementById('email').value,
        phoneNumber =document.getElementById('phoneNumber').value;
        newWinner = new app.Winner(name, dateBirth, email, phoneNumber);

        return newWinner;
    };

    //random choice of winners
    winnersButton = document.getElementsByClassName('newWinnerButton')[0];
    winnersButton.addEventListener('click', showWinners);

    function showWinners () {    
        winnerNames = [];
        winnerGroup.forEach(function (winner) {
            winnerNames.push(winner.getName());
        });

        result = winnerNames[Math.floor(Math.random() * winnerNames.length)];
        $('.winners').tagsinput('add', result);
    }

return this;
}