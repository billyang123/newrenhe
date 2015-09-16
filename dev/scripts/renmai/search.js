define(function(require, exports, module) {
	var $ = require("$");
	require("common");
	require('dropdown');
	var Renhe = require("Renhe")
	var i18n = require("i18n");
	var Aid = require("aid");
	require('ajaxRails');
	require('cxselect');
	require("pagination");
	require("handlebars-helper");
	var databinder = require("databinder");
	var Widget = new Renhe.Widget('#renmaiSearch');
	var dataBinder = new databinder("renmai");
	var template = require("./search-list.handlebars")
	var renmaiSearch = Widget.extend({
		Event:{
			'#searchRenMai click':'searchRenMai'
		},
		initialize:function(){
			var self = this;
			
			this.$content = this.get('content',this.element);
			this.$main = this.get('main',this.element);
			this.$filter = this.get('filter-area',this.element);
			this.$doMoreFilter = this.get('do-more-filter',this.$filter);
			this.$MoreFilter = this.$filter.find('.more-filter');
			this.morefilter = false;
			this.$main.after('<div class="remai-pagin" style="display:none;"><ul node-type="pagin" class="pagination"></ul></div>')
			this.searchKey = this.GetRequest();
			this.$doMoreFilter.on("click",function(e){
				var $this = $(e.currentTarget);
				self.$MoreFilter.slideToggle("fast");
				self.morefilter = !self.$MoreFilter.has(':hidden');
				$this.find('span').toggle();
				$this.siblings('span').toggle();
			})
			this.$pagin = this.get('pagin',this.element);
			if(!$.isEmptyObject(this.searchKey)){
				$("html,body").animate({
		    		scrollTop:this.$main.offset().top-92
		    	},500)
			}
			$('#elementAreaDist').cxSelect({ 
			  url: Aid.address,
			  selects: ['province', 'city', 'area'], 
			  nodata: 'none',
			  firstTitle:i18n.select
			});
			$('#elementAreaIndustry').cxSelect({ 
			  url: Aid.industry,
			  selects: ['primary', 'secondary'], 
			  nodata: 'none',
			  firstTitle:i18n.select
			});
			this.$pagin.jqPaginator({
			    totalPages: 100,
			    visiblePages: 10,
			    currentPage: 1,
			    onPageChange: function (num, type) {
			    	
			    	self.searchKey.pageNo = num;
			    	self.search(self.searchKey,function(res){
			    		self.$pagin.jqPaginator('option', {
			    			currentPage: num,
			    			totalPages:res.data.pagination.totalPage
			    		});
			    		dataBinder.set('find-num',res.data.pagination.totalRow);
			    		if(type=="init"){
				    		self.$pagin.parent('div').show();
				    	}
			    	})
			    	
			    }
			});
		},
		searchRenMai:function(e){
			var self = this;
			self.searchKey = this.getFormData(this.$filter);
			self.search(self.searchKey,function(res){
	    		self.$pagin.jqPaginator('option', {
	    			currentPage: 1,
	    			totalPages:res.data.pagination.totalPage
	    		})
	    		dataBinder.set('find-num',res.data.pagination.totalRow);
	    	})
	    	$("html,body").animate({
	    		scrollTop:this.$main.offset().top-92
	    	},500)
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
				data[$(item).attr("name")] = $(item).val();
			})
			return data;
		},
		GetQueryString:function(name){
		     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
		},
		GetRequest:function(){
			var url = window.location.search;
		    var theRequest = {};
		    if (url.indexOf("?") != -1) {
		        var str = url.substr(1);
		        strs = str.split("&");
		        for(var i = 0; i < strs.length; i ++) {
		        	var st = strs[i].split("=");
		            theRequest[st[0]] = unescape(st[1]);
		        }
		    }
		    return theRequest;
		},
		search:function(data,callback){
			var self = this;
			this.ajax({
				url:IpcUrl.search,
				data:data
			},function(res){
				res.i18n = i18n.searchRenmai;
				self.$content.html(template(res));
				if(res.data.pagination.totalPage>1){
					self.$pagin.closest('.remai-pagin').show();
				}else{
					self.$pagin.closest('.remai-pagin').hide();
				}
				callback && typeof(callback) == "function" && callback(res)
			})
		},
		ajax:function(options,callback){
			var config = $.extend({},{
				dataType:"json",
				type:"get",
				success:function(res){
					callback && typeof(callback) == "function" && callback(res)
				}
			},options)
			$.ajax(config);
		}
	})
	renmaiSearch.init();
})