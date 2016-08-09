(function() {
    $('.winners').tagsinput({
      maxTags: 3
    });

    $('.form-lottery').parsley().on('field:success', function() {
        this.$element.next().removeClass('parsley-errors-list');
        this.$element.next().addClass('glyphicon glyphicon-ok okIcon'); 
    });

    $('.form-lottery').parsley().on('field:error', function() {
        this.$element.next().addClass('parsley-errors-list'); 
        this.$element.next().removeClass('glyphicon glyphicon-ok okIcon');
    });


    $('.form-lottery').parsley().on('form:success', function() {
        m.publish('addNewWinner');
    });

    $('#phoneNumber').mask("(000) 000-0000", {placeholder: "(___) ___-____"});

    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        todayHighlight:'TRUE',
        autoclose: true
    });

    $(".form-lottery").on('submit', function(e){
        e.preventDefault();
        var form = $(this);
    });

})();