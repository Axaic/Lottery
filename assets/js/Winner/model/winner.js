'use strict';

(function (This) {
    This.Winner = function (_name, _dateBirth, _email, _phoneNumber) {
        var name = _name,
        dateBirth = _dateBirth,
        email = _email,
        phoneNumber = _phoneNumber,
        index = templates.counter++;

        this.JSON = function () {
            return {
                name : name,
                dateBirth : dateBirth,
                email : email,
                phoneNumber: phoneNumber,
                index : index
            }; 
        };

        var json = this.JSON();

        this.getName = function () {
            return json.name;
        };
   }; 
})(app);

