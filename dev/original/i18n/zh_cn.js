define(function(require, exports, module) {
	var i18n = {
		chat:{
			send:"发送",
			enterText:"输入文字",
			pressEnter:"按Enter键发送信息",
			pressCtrEnter:"按Ctrl+Enter键发送信息",
			error:{
				Empty:"发送内容不能为空,请重新输入。",
				login:"您的帐号在另一台设备登录，请重新登录。"
			},
			msgType:['【图片】','【语音】','【文件】','【链接】','查看更多消息'],
		},
		title:{
			tip:"提示"
		},
		popop:[
	       "完成",
	       "输入分组名，最多8个字。",
	       "新建分组",
	       "添加分组",
	       "设置分组",
	       "分享给：",
	       "留言：",
	       "分享人脉",
	       "编辑分组",
	       "分组名：",
	       "删除分组",
	       "确定删除此分组吗？ ",
	       "提示：删除某个分组，并不会删除该分组下的好友",
	       "确定从当前分组移出这些人吗？",
	       "请先选择",
	       "确定要删除该好友吗？",
		],
		renmei:[
	        "聊天",
	        "设置分组",
	        "分享人脉",
	        "删除好友",
	        "全部人脉",
	        "好友分组",
	        "地区发布",
	        "行业分布",
	        "邀请管理",
	        "未分组",
	        "付费会员",
	        "添加分组",
	        "批量管理",
	        "添加到",
	        "移出此组",
	        "退出批量管理",
	        "取消选择","已选择","人","编辑","删除","成功导入 {0} 邮箱通讯录里的联系人。","邮箱导入失败！请重新导入","一键发送邀请","查看{0}个联系人","暂不邀请，可跳过","全部","已选择","个",
	        "邮箱发送成功！"
	    ],
	    invite:["邀请管理",'全部',"等待对方处理","接受","您总共发出了<strong>{0}</strong>个加好友邀请，被接受<strong>{1}</strong>个，接受比例为<strong>{2}</strong>％，低于平均水平<strong>{3}</strong>％。 升级付费会员，提高加好友成功率。","直接邀请","引荐","等待对方处理","接受","拒绝","重新发送","删除","人脉快递","留言内容请控制在150字以内"],
		pagin:["第一页","上一页","下一页","最后一页"],
		btn:{
			confirm:"确定",
			cancel:"取消"
		},
		chooseFace:{
			title:"选择表情"
		},
		upload:{
			title:"上传图片",
			text:function(arr){
				return i18n.implace("共{0}张，还能上传{1}张",arr);
			}
		},
		sinaWeibo:{
			bindSuccess:"已成功绑定新浪微博"
		},
		PerfectLight:{
			share:"分享自己的人脉圈"
		},
		showpic:{
			s:"收起",c:"查看大图",xl:"向左旋转",xr:"向左旋转"
		},
		reply:function(arr){
			return i18n.implace("回复@{0}：",arr);
		},
		validateMessage:{
			nologin:{
				email:{     
					required: "请输入一个邮箱地址或手机号码",
		            renheAccount:"请输入正确的邮箱或手机号码！"
		        },     
		        password:{     
		            required: "请输入您的邮箱密码",
		            minlength:function(arr){
		            	return i18n.implace('密码必须大于{0}位',arr)
		            }
		        }
			},
			profiles:{
				required:function(arr){
	            	return i18n.implace('请{0}{1}',arr)
	            },
	            minlength:function(arr){
	            	return i18n.implace('{0}必须大于{1}位',arr)
	            },
	            maxlength:function(arr){
	            	return i18n.implace('{0}必须小于{1}位',arr)
	            },
	            noval:function(arr){
	            	return i18n.implace('{0}格式不正确',arr)
	            }
			}
		},
		delConfirm:"确定删除？",
		select:"请选择",
		searchRenmai:["人脉","动态","人脉快递","个人专长","我能提供","我想得到","个人简介","添加好友","已通过实名认证","vip会员","黄金会员","铂金会员"]
	}
	i18n.implace = function(str,arr){
		for(var i=0;i<arr.length;i++){
			var reg = new RegExp("\\{"+i+"\\}","g");
			str = str.replace(reg,arr[i]);
		}
		return str;
	}
	module.exports = i18n;
});