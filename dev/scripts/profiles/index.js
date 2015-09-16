define(function(require, exports, module) {
	var $ = require("$");
	var i18n = require("i18n");
	var Aid = require("aid");
	require('jquery.ui');
	require('tab');
	require("common");
	require('dropdown');
	require('cropit');
	require('jquery.fileupload');
	require('jquery.iframe-transport');
	require('cxselect');
	var Renhe = require('Renhe');
	var dataBinder = require('databinder');
	var Widget = new Renhe.Widget('#profilesMain');
	var profilesMain = Widget.extend({
		Event:{
			'.js-profiles-edit click':'profilesEdit',
			'.js-profiles-cancel click':'profilesCancel',
			'.js-profiles-finish click':'profilesFinish',
			'.js-add-panel click':'addPanel',
			'.js-remove-panel click':'removePanel',
			'.js-cropit-saveuserimg click':'cropitSaveUserImg'
		},
		Data:{
			base:new dataBinder("base"),
			work:new dataBinder("work"),
			project:new dataBinder("project"),
			contact:new dataBinder("contact"),
			other:new dataBinder("other"),
			cropit:new dataBinder("cropit")
		},
		initialize:function(){
			var self = this;
			$('.js-year').each(function(index,item){
				var vm = $(item);
				var tv = vm.val().match(/^\d+/);
				if(tv){
					vm.val(tv[0])
				}
			})
			$('.js-area-dist').cxSelect({ 
			  url: Aid.address,
			  selects: ['province', 'city', 'area'], 
			  nodata: 'none',
			  firstTitle:i18n.select
			});
			$('.js-area-industry').cxSelect({ 
			  url: Aid.industry,
			  selects: ['primary', 'secondary'], 
			  nodata: 'none',
			  firstTitle:i18n.select
			});
			this.uploadImg();
			this.cropper = $('#image-cropper').cropit({
				imageBackground: true,
				imageState: {
	                src: "http://scottcheng.github.io/cropit/images/3-960.jpg",
	                offset: {
	                    x: 0,
	                    y: 0
	                }
	            },
	            onZoomChange:function(zoon){
	            	self.Data.cropit.set('zoom',zoon)
				},
				onOffsetChange:function(offset){
					self.Data.cropit.set('squarex',-offset.x);
					self.Data.cropit.set('squarey',-offset.y)
				}
			})
			
		},
		cropitSaveUserImg:function(e){
			var self = this;
			var $this = $(e.currentTarget);
			var url = $this.data("url");
			var formEl = $($this.data("form-target"));
			$.ajax({
				url:url,
				dataType: 'json',
				type:'post',
				data:this.getFormData(formEl),
				success:function(res){
					if(res.success){
						$('.js-edit-userimg').attr('src',res.newFaceImg);
					}
				}
			})
		},
		uploadImg:function(){
			var self = this;
			$('#myImgUpload').fileupload({
		        dataType: 'json',
		        add: function (e, data) {
		        	var str = '';
		        	$.each(data.files,function(index,item){
		        		$("#myImgUploadName").text(item.name);
		        	})
		        	$('#myImgUploadSubmit').unbind("click").bind("click",function () {
	                    data.context = $(this).siblings("span").text('Uploading...');
	                    data.submit();
	                });
		        },
		        progressall: function (e, data) {
		            //var progress = parseInt(data.loaded / data.total * 100, 10);
		            //console.log(e, data)
		        }
		    }).on('fileuploaddone',function(e, data){
		    	console.log(data);
		    	var db = data.result;	
		    	data.context.text('');
		    	self.Data.cropit.set('dir',db.dir);
		    	self.cropper.cropit('imageSrc', "/wwwww/"+db.showMinImg).show();
		    });
		},
		getFormData:function(fm){
			var data = {};
			var fterArr = [
			    '[type="hidden"][name]',
			    'select[name]',
			    '[type="text"][name]:enabled',
			    'textarea',
			    '[type="radio"][name]:checked'
			]
			fm && fm.find(fterArr.join(',')).each(function(index,item){
				var nm = $(item).attr("name");
				var v = $(item).val();
				if(data[nm]){
					if(!$.isArray(data[nm])){
						data[nm] = [data[nm]];
					};
					data[nm].push(v);
				}else{
					data[nm] = v;
				}
			})
			return data;
		},
		getformHorizontal:function(ele){
			var content = [];
			var fterArr = [
			    '[type="hidden"][name]',
			    'select[name]',
			    '[type="text"][name]:enabled',
			    'textarea',
			    '[type="radio"][name]:checked'
			]
			ele.find('.form-horizontal').each(function(index,item){
				var data = {};
				$(item).find(fterArr.join(',')).each(function(idx,it){
					var k = $(it).attr("name");
					var v = $(it).val();
					if(data[k]){
						if(!$.isArray(data[k])){
							data[k] = [data[k]];
						};
						data[k].push(v);
					}else{
						data[k] = v;
					}
				})
				content.push(data);
			})
			return {content:content};
		},
		addPanel:function(e){
			var self = this;
			var $this = $(e.currentTarget);
			var template = $($this.data("template")).html();
			$this.closest('.js-add-opts').before(template);
		},
		removePanel:function(e){
			var self = this;
			var $this = $(e.currentTarget);
			$this.closest('.form-horizontal').remove();
		},
		profilesEdit:function(e){
			var self = this;
			var $this = $(e.currentTarget);
			this.showDetial($this,"edit")
		},
		profilesCancel:function(e){
			var self = this;
			var $this = $(e.currentTarget);
			this.showDetial($this)
		},
		profilesFinish:function(e){
			var self = this;
			var $this = $(e.currentTarget);
			var Panel = $this.closest(".panel").data("target").split(',');
			var $editPanel = $(Panel[0])
			var url = $editPanel.data("url");
			var getDataType = $editPanel.data("type")
			
			var data = this[getDataType]($editPanel)
			var dbType = $this.data("dbtype");
			$.ajax({
				url:url,
				data:data,
				dataType:"json",
				type:"post",
				traditional : true,
				success:function(res){
					self.setData(self.Data[dbType],data);
					self.showDetial($this)
				}
			})
		},
		setData:function(objBinder,data){
			return $.each(data,function(index,item){
				objBinder.set(index,item);
			})
		},
		showDetial:function(el,type){
			var $panel = el.closest(".panel");
			var $target = $panel.data('target').split(',');
			var d1='.js-detail-1',
				d2='.js-detail-2',
				e1=$target[0],
				e2=$target[1];
			if(type && type=="edit"){
				d1 = '.js-detail-2';
				d2 = '.js-detail-1';
				e1 = $target[1],
				e2 = $target[0];
			}
			if($panel.find(d2).length>0){
				$panel.find(d2).fadeOut("fast",function(){
					$panel.find(d1).fadeIn();
				})
			}
			$panel.find(e1).fadeOut("fast",function(){
				$panel.find(e2).fadeIn();
			})
		}
	})
	profilesMain.init();
})