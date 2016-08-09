'use strict';

var m = new Mediator ();

window.addEventListener ("DOMContentLoaded", load);

var app = {};

function load () {
    app.controller = new Controller();
}