import {Popup as UIPopup} from '/resources/js/modules/ui/Popup.js';
import {Tab as UITab} from '/resources/js/modules/ui/Tab.js';

$(()=>{ // dom ready
	// tab
	{
		const tab = new UITab({tab:'#tab ul li', tabCont:'#tab-cont ul li'});
	}

	// gnb
	{
		const pathName = location.pathname;
		const $gnb = $('#gnb');
		const $depth1 = $gnb.find('.depth1 > li');
		const $depth2 = $depth1.find('.depth2 > li');
		let d1, d2, titValue;
		
		$depth1.on('mouseover', function(e){
			$(this).addClass('on');
			$(this).find('.depth2').stop().slideDown(200);
		});
		
		$depth1.on('mouseout', function(e){
			if(d1 != $(this).index()){
				 $(this).removeClass('on');
			}
			$(this).find('.depth2').stop().slideUp(200);
		});
		
		// gnb active
		$depth1.each(function(i){
			let href = $(this).find('> a').attr('href');

			if(href == pathName){
				d1 = i;
			}

			$(this).find('.depth2 li').each(function(j){
				let href = $(this).find('a').attr('href');

				if(href == pathName){
					d1 = i;
					d2 = j;
				}
			});
		});

		if(d1 !== undefined){
			$depth1.eq(d1).addClass('on');
			/*$depth1.eq(d1).trigger('mouseover');
			if(d2 !== undefined){
				$depth1.eq(d1).find('.depth2 li').eq(d2).addClass('on');
			}*/
		}
	}

	// main
	{
		const $title01 = $('.main-visual .title01');
		const $title02 = $('.main-visual .title02');
		const $character = $('.main-visual .character');
		const $jalkton = $('.main-visual .jalkton');
		const $present = $('.main-visual .present');
		const $buttonGroup = $('.main-content .button-group');

		$character.delay(900).fadeIn(800);
		$jalkton.delay(1200).fadeIn(800);
		$title01.stop().delay(0).animate({opacity:1, top:60}, {duration:800});
		$title02.stop().delay(200).animate({opacity:1, top:200}, {duration:800});
		$present.stop().delay(1700).animate({opacity:1, top:320}, {duration:800});
		$buttonGroup.stop().delay(2200).animate({opacity:1, top:650}, {duration:800});
	}
});


// define Popup
window.definePopup = function(param){
	const popup = new UIPopup(param);
	return popup;
}