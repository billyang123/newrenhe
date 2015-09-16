define(function(require, exports, module) {
	var faceObj = {
		domain:'http://www.renhe.cn/images/faces/',
		name:{
			"[�Ǻ�]" : "smilea.gif",
			"[�ɰ�]" : "tza.gif",
			"[����]" : "kl.gif",
			"[�ڱ�ʺ]" : "kbsa.gif",
			"[�Ծ�]" : "cj.gif",
			"[����]" : "zy.gif",
			"[����]" : "bz.gif",
			"[����]" : "lovea.gif",
			"[��]" : "sada.gif",
			"[͵Ц]" : "heia.gif",
			"[����]" : "qq.gif",
			"[����]" : "sb.gif",
			"[̫����]" : "mb.gif",
			"[��������]" : "ldln.gif",
			"[�Һߺ�]" : "yhh.gif",
			"[��ߺ�]" : "zhh.gif",
			"[��]" : "x.gif",
			"[˥]" : "cry.gif",
			"[ί��]" : "wq.gif",
			"[��]" : "t.gif",
			"[�����]" : "k.gif",
			"[����]" : "bba.gif",
			"[ŭ]" : "angrya.gif",
			"[����]" : "yw.gif",
			"[����]" : "cza.gif",
			"[�ݰ�]" : "88.gif",
			"[˼��]" : "sk.gif",
			"[��]" : "sweata.gif",
			"[��]" : "sleepya.gif",
			"[˯��]" : "sleepa.gif",
			"[Ǯ]" : "money.gif",
			"[ʧ��]" : "sw.gif",
			"[��]" : "cool.gif",
			"[����]" : "hsa.gif",
			"[��]" : "hatea.gif",
			"[����]" : "bs.gif",
			"[ץ��]" : "crazya.gif",
			"[����]" : "h.gif",
			"[����]" : "yx.gif",
			"[ŭ��]" : "nm.gif",
			"[��]" : "hearta.gif",
			"[����]" : "unheart.gif",
			"[΢Ц]" : "hl_smile_open_mouth.png",
			"[����]" : "hl_haha.png",
			"[����]" : "hl_xixi.png",
			"[ü����Ц]" : "hl_smiling_eyes.png",
			"[�⻷]" : "hl_smiling_halo.png",
			"[����]" : "hl_hushed_face.png",
			"[�ɻ�]" : "hl_confused_face.png",
			"[����]" : "hl_blush.png",
			"[����]" : "hl_joy.png",
			"[����΢Ц]" : "hl_sweat_smile.png",
			"[��ħ]" : "hl_horns.png",
			"[�ڴ�]" : "hl_neutral_face.png",
			"[����]" : "hl_angry_face.png",
			"[Ц�Ǻ�]" : "hl_smiley.png",
			"[������Ц]" : "hl_laughing.png",
			"[գ�۾�]" : "hl_wink.png",
			"[���ޱ���]" : "hl_expressionles.png",
			"[�����]" : "hl_grimacing.png",
			"[��ŭ]" : "hl_rage.png",
			"[����]" : "hl_curiousness.png",
			"[ʧ����]" : "hl_disappointed.png",
			"[�־�]" : "hl_fearful.png",
			"[����]" : "hl_worried.png",
			"[����]" : "hl_flushed.png",
			"[����]" : "hl_cry.png",
			"[��������]" : "hl_persevere.png",
			"[��ü]" : "hl_frowning.png",
			"[����]" : "hl_scream.png",
			"[��]" : "hl_dizzy.png",
			"[˯��]" : "hl_sleeping.png",
			"[ʤ��]" : "hl_triumph.png",
			"[����]" : "hl_anguished.png",
			"[�亹]" : "hl_cold.png",
			"[����]" : "hl_astonished.png",
			"[����]" : "hl_no_mouth.png",
			"[����]" : "hl_mask.png",
			"[ϲ��]" : "hl_heart_eyes.png",
			"[����]" : "hl_closed_eyes.png",
			"[��һ��]" : "hl_kissing_smiling_eyes.png",
			"[ī��]" : "hl_sunglasses.png",
			"[����]" : "hl_confounded.png",
			"[��ɥ]" : "hl_disappointed.png",
			"[����ͷ]" : "hl_stuck_out_tongue.png",
			"[��ζ]" : "hl_yum.png",
			"[����]" : "hl_kissing_heart.png",
			"[���]" : "hl_sob.png",
			"[��˼]" : "hl_pensive.png",
			"[����]" : "hl_unamused.png",
			"[գ��]" : "hl_winking_eye.png",
			"[��һ��]" : "hl_kissing.png",
			"[����]" : "hl_kissing_closed_eyes.png",
			"[������]" : "hl_relieved.png",
			"[����]" : "hl_sleepy.png",
			"[��Ц]" : "hl_smirk.png",
			"[����]" : "hl_raising_hand.png",
			"[����]" : "hl_no_good.png",
			"[����]" : "hl_pouting_face.png",
			"[��Цè]" : "hl_smirk_cat.png",
			"[ϲ��è]" : "hl_heart_eyes_cat.png",
			"[����]" : "hl_sweat.png",
			"[��ף]" : "hl_raised_hands.png",
			"[����]" : "hl_ok_woman.png",
			"[����]" : "hl_pray.png",
			"[Ц��è]" : "hl_smile_cat.png",
			"[����è]" : "hl_kissing_cat.png",
			"[ƣ��]" : "hl_tired_face.png",
			"[��üͷ]" : "hl_frowning.png",
			"[�Ϲ�]" : "hl_bow.png",
			"[΢Цè]" : "hl_smiley_cat.png",
			"[����è]" : "hl_joy_cat.png",
			"[����è]" : "hl_crying_cat.png",
			"[����]" : "hl_baby.png",
			"[�к�]" : "hl_boy.png",
			"[��]" : "hl_couple.png",
			"[����]" : "hl_couple_with_heart.png",
			"[����]" : "hl_couplekiss.png",
			"[��ͥ]" : "hl_family.png",
			"[Ů��]" : "hl_girl.png",
			"[ʺ]" : "hl_hankey.png",
			"[����]" : "hl_hear_no_evil.png",
			"[����]" : "hl_man.png",
			"[��үү]" : "hl_older_man.png",
			"[������]" : "hl_older_woman.png",
			"[����è]" : "hl_pouting_cat.png",
			"[���]" : "hl_scream_cat.png",
			"[����]" : "hl_see_no_evil.png",
			"[��˵]" : "hl_speak_no_evil.png",
			"[��������]" : "hl_two_men_holding_hands.png",
			"[��Ů]" : "hl_woman.png",
			"[��ʹ]" : "hl_angel.png",
			"[����]" : "hl_bride_with_veil.png",
			"[����]" : "hl_bust_in_silhouette.png",
			"[˫������]" : "hl_busts_in_silhouette.png",
			"[��������]" : "hl_construction_worker.png",
			"[����]" : "hl_cop.png",
			"[����]" : "hl_dancer.png",
			"[����]" : "hl_dancers.png",
			"[����]" : "hl_guardsman.png",
			"[����]" : "hl_haircut.png",
			"[ǰ̨]" : "hl_information_desk_person.png",
			"[ñ������]" : "hl_man_with_gua_pi_mao.png",
			"[��˹������]" : "hl_man_with_turban.png",
			"[��Ħ]" : "hl_massage.png",
			"[��Ů��]" : "hl_person_with_blond_hair.png",
			"[����]" : "hl_princess.png",
			"[ʥ������]" : "hl_santa.png",
			"[Ů����ǣ��]" : "hl_two_women_holding_hands.png",
			"[ȭͷ]" : "hl_punch.png",
			"[����]" : "hl_wave.png",
			"[����]" : "hl_point_up.png",
			"[����]" : "hl_point_down.png",
			"[����]" : "hl_point_left.png",
			"[����]" : "hl_point_right.png",
			"[����]" : "hl_point_up2.png",
			"[����]" : "hl_open_hands.png",
			"[����]" : "hl_clap.png",
			"[ָ����]" : "hl_nail_polish.png",
			"[ʳ��ħ]" : "hl_japanese_ogre.png",
			"[����]" : "hl_japanese_goblin.png",
			"[С��]" : "hl_imp.png",
			"[��]" : "hl_ghost.png",
			"[���ǹ���]" : "hl_alien_monster.png",
			"[������]" : "hl_extraterrestrial_alien.png",
			"[­��]" : "hl_skull.png",
			"[�۾�]" : "hl_eyes.png",
			"[����]" : "hl_ear.png",
			"[����]" : "hl_nose.png",
			"[���]" : "hl_mouth.png",
			"[��ͷ]" : "hl_tongue.png",
			"[����]" : "hl_heart.png",
			"[��ӡ]" : "hl_footprints.png",
			"[��]" : "hl_kiss.png",
			"[����]" : "hl_blue_heart.png",
			"[����]" : "hl_muscle.png",
			"[����]" : "hl_green_heart.png",
			"[����]" : "hl_yellow_heart.png",
			"[����]" : "hl_sparkling_heart.png",
			"[����]" : "hl_heartbeat.png",
			"[�������]" : "hl_gift_heart.png",
			"[�ɳ�����]" : "hl_heartpulse.png",
			"[����]" : "hl_broken_heart.png",
			"[һ������]" : "hl_cupid.png",
			"[����]" : "hl_purple_heart.png",
			"[��ת����]" : "hl_revolving_hearts.png",
			"[װ�ε���]" : "hl_heart_decoration.png",
			"[������]" : "hl_two_hearts.png",
			"[��]" : "hl_good.png",
			"[OK]" : "hl_ok_hand.png",
			"[����]" : "hl_fist.png",
			"[��]" : "hl_hand.png",
			"[Ү]" : "hl_victory.png",
			"[����]" : "hl_step.png"
		},
		getFaceBytext:function(msg){
			var Reg = /\[[\u2E80-\u9FFF]+\]/g;
			var value = msg.match(Reg);
			if(value){
				value.forEach(function(v){
					var str = '<img src="'+faceObj.domain+faceObj.name[v]+'" width="22" height="22"/>';
					msg = msg.replace(v,str);
				})
			}
			return msg;
		},
		getFaceByName:function(value){
			return '<img src="'+faceObj.domain+faceObj.name[value]+'"/>'
		}
	}
	module.exports = faceObj
});