define(function(require, exports, module) {
	var $ = require("$");
	var i18n = require("i18n");
	//require("./im-model");
	require("jquery.ui");
	require("dropdown");
	require("handlebars-helper");
	window.notifyNum = 0;
	var indexIMui = require("./im-model");
	var template = {
		chat:require("./chat.handlebars"),
		notify:require("./notify.handlebars"),
		nomalpersons:require("./friends.handlebars"),
		records:require("./records.handlebars"),
		msg:require("./msg.handlebars")
	}
	template["searchpersons"] = template.nomalpersons;
	var tipOption = {
		html:true,
		trigger:"manual"
	}
	var nsh = [92,72,163,123];
	
	var chart_dialog_cfg = {
			dialogClass: "no-close",
			draggable: false,
			dialogClass: "renhe-chat-dialog",
			resizable :'n,w,sw,nw',
			minHeight:345,
			minWidth:300,
			maxWidth:800,
			maxHeight:800,
			//resize: function( event, ui ) {},
			position: { my: "right bottom", at: "right bottom"}
		}
		function messagePages(){
			this.element = $("#messagePages");
			this.ctrBox = this.get("ctr-pgbox");
			this.pgBody = this.get("mp-body");
			this.nav = this.get("mp-nav");
			this.foldEle = this.get("fold");
			this.nofoldEle = this.get("nofold");
			this.navfix = $('[node-type=navfix]');
			this.chatMain = $('body');
			this.mnotifyNum = 0;
			this.cid = 0;
			this.type = 'notify';
			this.dg = {};
			this.isToger = false;
			this.init();
		}
		messagePages.prototype = {
			Event:{
				'[node-type="fold"] click':'fold',
				'[node-type="nofold"] click':'nofold',
				'[action-type="search-friends"] keyup':'searchFriends',
				'[action-type="detail-link"] click':function(e){
					var _target = $(e.currentTarget);
					window.open(_target.attr("data-cid"));
				},
				'.icon-remove click':'removeSearch'
			},
			init:function(){
				var self = this;
				this.eventBind();
				this.ajax({
					url:imIPC.notifyCount,
					success:function(res){
						if(res.success){
							self.mnotifyNum = res.data;
						}
						if(window.myIMUi && window.myIMUi.noReadNum){
							window.notifyNum = myIMUi.noReadNum + self.mnotifyNum;
						}
						if(window.notifyNum<=0){
							self.get("notify-num").hide();
						}else{
							self.get("notify-num").text(window.notifyNum).show();
						}
						
					}
				})
			},
			eventBind:function(){
				var self = this;
				var tm;
				this.mpTab();
				this.resizeInit();
				this.element.bind("mouseenter",function(){
					if(!self.isToger) return;
					clearTimeout(tm);
					self.foldEle.stop();
					self.foldEle.animate({
						left:-1*self.foldEle.width()+"px"
					},300)
				})
				self.element.bind("mouseleave",function(){
					tm = setTimeout(function(){
						self.foldEle.stop();
						self.foldEle.animate({
							left:0
						},300)
					},3000)
				})
				$.each(this.Event,function(index,itemFn){
					var nbs = index.split(' ');
					var evtName = nbs.pop();
					self.element.delegate(nbs.join(' '),evtName,(typeof(itemFn) == 'function')?itemFn:$.proxy(self,itemFn));
				})
			},
			get:function(str,eqs){
				eqs = eqs?eqs:'=';
				return this.element.find('[node-type'+eqs+'"'+str+'"]');
			},
			ajax:function(options){
				var settings = $.extend({
					type:"get",
					dataType:"json"
				},options);
				return $.ajax(settings);
			},
			getDataInto:function(type,data,callback){
				var self = this;
				var node = self.get(type);
				this.type = type;
				if(node.data("isAjax")){
					return;
				}
				this.ajax({
					url:imIPC[type],
					data:data,
					success:function(res){
						callback && typeof(callback) == "function" && callback(res,node)
					}
				})
			},
			mpTab:function(){
				var self = this;
				var tabLi = this.nav.find("[data-tab]");
				tabLi.bind("click",function(e){
					var sTarget = self.get($(this).attr("data-tab"));
					var dbType = $(this).attr("data-type");
					self.type = dbType;
					if(dbType != "records"){
						var $node = self.get(dbType);
						if(!$node.data("isAjax")){
							self.getDataInto(dbType,false,function(data){
								var $node = self.get(dbType);
								if(dbType =="nomalpersons") self.get("personNum").text(data.data.length);
								$node.find('[node-type="ctr-pgbox"]').html(template[dbType](data))
								$node.data("isAjax",true);
							});
						};
					}
					self.setCtrBoxH(dbType);
					$(this).addClass("on").siblings("[data-tab]").removeClass("on");
					sTarget.animate({
						"left":0
					},200).nextAll().animate({
						"left":240+"px"
					},200)
				})
				this.setSCHeight();
			},
			resizeInit:function(){
				var self = this;
				$(window).resize(function(){
				  self.setCtrBoxH(self.type);
				});
			},
			getFormData:function(form){
				var sendDta = {};
				form.find('[name]').each(function(index,item){
					sendDta[$(this).attr("name")] = $(this).val();
				})
				return sendDta;
			},
			imTipInit:function(_target,option){
				var setting = $.extend(tipOption,option);
				return _target.tooltip(setting)
			},
			searchFriends:function(e){
				var self = this;
				var _target = $(e.currentTarget);
				var _con = this.get("searchpersons");
				var n_con = this.get("nomalpersons");
				var data = {};
				if(_target.val() == ""){
					this.type = "nomalpersons";
					_con.hide();
					n_con.show();
					_target.siblings(".btn").removeClass("icon-remove").addClass("icon-search");
				}else{
					this.type = "searchpersons";
					n_con.hide();
					_con.show();
					data[_target.attr("name")] = $.trim(_target.val());
					self.getDataInto("searchpersons",data,function(res){
						if($.isEmptyObject(res)) return;
						_con.find('[node-type="ctr-pgbox"]').html(template.nomalpersons(res));
						self.setCtrBoxH("searchpersons");
					});
					_target.siblings(".btn").addClass("icon-remove").removeClass("icon-search");
				}
				this.setCtrBoxH('searchpersons');
			},
			removeSearch:function(e){
				var self = this;
				var _target = $(e.currentTarget);
				this.get("searchpersons").hide();
				this.get("nomalpersons").show();
				_target.removeClass("icon-remove").addClass("icon-search").siblings('input').val("");
			},
			fold:function(e){
				var self = this;
				var _target = $(e.currentTarget);
				this.pgToggle(function(){
					self.foldEle.hide();
				},function(){
					self.nofoldEle.show()
				})
			},
			nofold:function(e){
				var self = this;
				var _target = $(e.currentTarget);
				this.getDataInto("notify",{},function(res,node){
					node.data("isAjax",true);
					node.find('[node-type="ctr-pgbox"]').html(template["notify"](res));
					self.setCtrBoxH("notify");
					window.notifyNum = window.notifyNum - self.mnotifyNum;
					if(window.notifyNum<=0){
						self.get("notify-num").hide();
					}else{
						self.get("notify-num").text(window.notifyNum).show();
					}
				});
				
				this.pgToggle(function(){
					self.foldEle.show()
					self.nofoldEle.hide()
					self.setCtrBoxH("records");
				})
			},
			pgToggle:function(fn,callback){
				var self = this;
				//var _target = $(e.currentTarget);
				var nm = this.element.width(),mm,fmv;
				if(this.isToger){
					mm = -1*nm;
					fmv = 0;
					this.isToger = false;
				}else{
					mm = 0;
					fmv = -1*self.foldEle.width()+"px";
					this.isToger = true;
				}
				this.element.animate({'right':mm+'px'},200,'linear',function(){
					callback && typeof(callback) == 'function' && callback()
				});
				self.foldEle.animate({
					left:fmv
				},300)
				fn && typeof(fn) == 'function' && fn()
			},
			uploadInit:function(container){
				var self = this;
				var upnode = container.find('[action-type="chatUploader"]');
				var upurl = upnode.attr("data-upurl");
				upnode.fileupload({
			        url: upurl,
			        dataType: 'json',
			        add: function (e, data) {
			            data.submit();
			        },
			        progressall: function (e, data) {
			            //var progress = parseInt(data.loaded / data.total * 100, 10);
			            //console.log(e, data)
			        }
			    }).on('fileuploaddone',function(e, data){
			    	console.log(e,data)
			    });
			},
			setSCHeight:function(){
				var wdHeight = $(window).height();
				this.navfix.parent(".renhe-nav").height(nsh[0]);
			},
			setCtrBoxH:function(type){
				var wh = $(window).height();
				var ctrBox = this.get(type).find('[node-type="ctr-pgbox"]');
				this.pgBody.height(wh-nsh[1]);
				if(type == "notify" || type == "records") ctrBox.height(wh-nsh[1]);
				if(type == "nomalpersons") ctrBox.height(wh-nsh[2]);
				if(type == "searchpersons") ctrBox.height(wh-nsh[3]);
			}
		};
		new messagePages();
})