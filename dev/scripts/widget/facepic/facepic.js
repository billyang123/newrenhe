define(function(require, exports, module) {
	var $ = require("$");
	var face = require("face");
	var i18n = require("i18n");
	var template = require("./facepictmp.handlebars");
	var default_settings = {
		title: i18n.chooseFace.title,
		width:296,
		height:250,
		draggable: false,
		resizable: false,
		closeOnEscape: false,
		position: {
			my: "left-70 top",
			at: "left bottom",
			collision:'none'
		},
		open: function( event, ui ) {
			//Renhe.innerFace( event, ui , AddFaceEle ,afterFn);
		},
		close:function(event, ui){
			//AddFaceEle.trigger("focus");
		},
		dialogClass: "renhe-dialog-popover",
		show:{ effect: "fadeIn", duration: 400 }
	}
	//require("jqueryUi")
	var messageFacePic = function(element,options){
		this.default_settings = default_settings;
		this.settings = options || {};
		this.element = element;
		this.trigger = $(element);
		this.face = face;
		this.addfacepicid = null;
		this.inputArea = null;
		this.init();
	}
	messageFacePic.prototype = {
		init:function(){
			var self = this;
			$(document).delegate(this.element,"click",function(){
				var target = $(this);
				self.addfacepicid = target.attr("addfacepicid");
				self.inputArea = $('#'+self.addfacepicid);
				self.dgOpts = $.extend(self.default_settings,{
					position: {
						my: "left-70 bottom",
						at: "left top",
						of: this,
						collision:'none'
					}
				},self.settings)
				if(self.dgElement) {
					self.dgElement.dialog("option",self.dgOpts)
					self.dgElement.dialog("isOpen")?self.dgElement.dialog("close"):self.dgElement.dialog("open");
					return;
				}
				self.dgElement = $( template({
					data:self.face.name,
					domain:self.face.domain
				}) ).dialog(self.dgOpts)
				self.dgElement.delegate('li',"click",function(){
					var liEl = $(this).find('img');
					var fnm = liEl.attr("addfacespic");
					self.inputArea.val(self.inputArea.val()+fnm);
					self.dgElement.dialog('close');
				})
			})
		}
	}
	return messageFacePic;
})