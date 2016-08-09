'use strict';
(function (This) {
    This.WinnerGroup = function (newWinner) {
        var winners = [];

          var JSON = [
            { name: 'Jack Doe',
              dateBirth: '12/03/1974',
              email: 'jackDoe@mail.com',
              phoneNumber: '111 111 1111'
            },
            { name: 'July Doe',
              dateBirth: '06/05/1974',
              email: 'julyDoe@mail.com',
              phoneNumber: '111 111 1111'
            },
            { name: 'Ted Doe',
              dateBirth: '12/07/1987',
              email: 'tedDoe@mail.com',
              phoneNumber: '111 111 1111'
            },
            { name: 'Sam Doe',
              dateBirth: '12/03/1974',
              email: 'samDoe@mail.com',
              phoneNumber: '111 111 1111'
            },
            { name: 'ChuckDoe',
              dateBirth: '06/05/1974',
              email: 'chuckDoe@mail.com',
              phoneNumber: '111 111 1111'
            },
            { name: 'Anna Doe',
              dateBirth: '12/07/1987',
              email: 'annaDoe@mail.com',
              phoneNumber: '111 111 1111'
            }
        ];

        JSON.forEach (function (item) {
            var winner =  new app.Winner (item.name, item.dateBirth, item.email, item.phoneNumber);
            winners.push(winner);
            return winners;
        });

        this.forEach = function (callback) {
            winners.forEach(callback);
        };

        this.addWinner = function (newWinner) {
            winners.push(newWinner);
            m.publish('update-view', winners);
        };

    return this;

    }
})(app);
