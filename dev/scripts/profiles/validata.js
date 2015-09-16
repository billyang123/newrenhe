define(function(require, exports, module) {
	var i18n = require("i18n");
	require('metadata');
    require('jquery-validate');
    
    $.metadata.setType("attr", "validate");
    $.validator.setDefaults({
       debug: true
    })
    $.validator.addMethod("mobile", function(value, element, param) {
        var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        return reg.test(value);
    });
    $.validator.setDefaults({    
        submitHandler: function(form) { form.submit(); },
        errorPlacement: function(error, element) {
            if(element.attr('aria-invalid') == 'false'){
                return
            }
            var errorDocArr = [
                '<div class="alert alert-danger alert-dismissible fade in" role="alert">',
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button>',
                '<p>'+error.html()+'</p>',
                '</div>'
            ]
            element.closest('form').find('.js-renhe-error').html(errorDocArr.join(''))
        },
        success:function(label,elem){
            $(elem).closest('form').find('.js-renhe-error').empty();
        }
    });
})