define(function(require, exports, module) {
	var i18n = {
		chat:{
			send:"����",
			enterText:"��������",
			pressEnter:"��Enter��������Ϣ",
			pressCtrEnter:"��Ctrl+Enter��������Ϣ",
			error:{
				Empty:"�������ݲ���Ϊ��,���������롣",
				login:"�����ʺ�����һ̨�豸��¼�������µ�¼��"
			},
			msgType:['��ͼƬ��','��������','���ļ���','�����ӡ�','�鿴������Ϣ'],
		},
		title:{
			tip:"��ʾ"
		},
		popop:[
	       "���",
	       "��������������8���֡�",
	       "�½�����",
	       "��ӷ���",
	       "���÷���",
	       "�������",
	       "���ԣ�",
	       "��������",
	       "�༭����",
	       "��������",
	       "ɾ������",
	       "ȷ��ɾ���˷����� ",
	       "��ʾ��ɾ��ĳ�����飬������ɾ���÷����µĺ���",
	       "ȷ���ӵ�ǰ�����Ƴ���Щ����",
	       "����ѡ��",
	       "ȷ��Ҫɾ���ú�����",
		],
		renmei:[
	        "����",
	        "���÷���",
	        "��������",
	        "ɾ������",
	        "ȫ������",
	        "���ѷ���",
	        "��������",
	        "��ҵ�ֲ�",
	        "�������",
	        "δ����",
	        "���ѻ�Ա",
	        "��ӷ���",
	        "��������",
	        "��ӵ�",
	        "�Ƴ�����",
	        "�˳���������",
	        "ȡ��ѡ��","��ѡ��","��","�༭","ɾ��","�ɹ����� {0} ����ͨѶ¼�����ϵ�ˡ�","���䵼��ʧ�ܣ������µ���","һ����������","�鿴{0}����ϵ��","�ݲ����룬������","ȫ��","��ѡ��","��",
	        "���䷢�ͳɹ���"
	    ],
	    invite:["�������",'ȫ��',"�ȴ��Է�����","����","���ܹ�������<strong>{0}</strong>���Ӻ������룬������<strong>{1}</strong>�������ܱ���Ϊ<strong>{2}</strong>��������ƽ��ˮƽ<strong>{3}</strong>���� �������ѻ�Ա����߼Ӻ��ѳɹ��ʡ�","ֱ������","����","�ȴ��Է�����","����","�ܾ�","���·���","ɾ��","�������","���������������150������"],
		pagin:["��һҳ","��һҳ","��һҳ","���һҳ"],
		btn:{
			confirm:"ȷ��",
			cancel:"ȡ��"
		},
		chooseFace:{
			title:"ѡ�����"
		},
		upload:{
			title:"�ϴ�ͼƬ",
			text:function(arr){
				return i18n.implace("��{0}�ţ������ϴ�{1}��",arr);
			}
		},
		sinaWeibo:{
			bindSuccess:"�ѳɹ�������΢��"
		},
		PerfectLight:{
			share:"�����Լ�������Ȧ"
		},
		showpic:{
			s:"����",c:"�鿴��ͼ",xl:"������ת",xr:"������ת"
		},
		reply:function(arr){
			return i18n.implace("�ظ�@{0}��",arr);
		},
		validateMessage:{
			nologin:{
				email:{     
					required: "������һ�������ַ���ֻ�����",
		            renheAccount:"��������ȷ��������ֻ����룡"
		        },     
		        password:{     
		            required: "������������������",
		            minlength:function(arr){
		            	return i18n.implace('����������{0}λ',arr)
		            }
		        }
			},
			profiles:{
				required:function(arr){
	            	return i18n.implace('��{0}{1}',arr)
	            },
	            minlength:function(arr){
	            	return i18n.implace('{0}�������{1}λ',arr)
	            },
	            maxlength:function(arr){
	            	return i18n.implace('{0}����С��{1}λ',arr)
	            },
	            noval:function(arr){
	            	return i18n.implace('{0}��ʽ����ȷ',arr)
	            }
			}
		},
		delConfirm:"ȷ��ɾ����",
		select:"��ѡ��",
		searchRenmai:["����","��̬","�������","����ר��","�����ṩ","����õ�","���˼��","��Ӻ���","��ͨ��ʵ����֤","vip��Ա","�ƽ��Ա","�����Ա"]
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