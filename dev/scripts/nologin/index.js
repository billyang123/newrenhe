define(function(require, exports, module) {
	var $ = require("$");
	var i18n = require("i18n");
	var validateMessage = i18n.validateMessage.nologin;
    require('metadata');
    require('jquery-validate');
    require('tab');
    require('alert');
    $.metadata.setType("attr", "validate");
    $.validator.setDefaults({
       debug: true
    })
    $.validator.addMethod("renheAccount", function(value, element, param) {
        var reg = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$)/;
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
    var idx = 0;
    var sde = $('.rh-circle-list a');
    var tmFn =function(){ 
    	return setInterval(function(){
	    	$(sde[idx]).tab('show')
	    	idx==sde.length-1 ? idx=0:idx++;
	    },4000)
    }
    var tm = tmFn();
    sde.mouseenter(function(e) {
    	idx = sde.index(this)
        $(this).tab('show')
    }).on("shown.bs.tab",function(e){ 	
    	$($(e.relatedTarget).attr('data-tg')).fadeOut(function(){
    		$($(e.target).attr('data-tg')).fadeIn();
    	});
    })
    $('.rh-circle-list').mouseenter(function(){
    	clearInterval(tm)
    })
    $('.rh-circle-list').mouseleave(function(e){
    	tm = tmFn();
    })    
    $('#renheRegister').validate({
        messages: {
        	email:{     
                required: validateMessage.email.required,
                renheAccount:validateMessage.email.renheAccount
            },     
            password:{     
                required: validateMessage.password.required,
                minlength:validateMessage.password.minlength([6])
            }
        }
    });
    $('#renheLogin').validate({
        messages: {
        	email:{     
                required: validateMessage.email.required,
                renheAccount:validateMessage.email.renheAccount
            },     
            pass:{     
                required: validateMessage.password.required,
                minlength:validateMessage.password.minlength([6])
            }
        }
    });
    
    return $;
})