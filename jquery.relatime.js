/*!
 * jQuery Relatime V.1.5.0
 * @name jRelatime
 * @requires jQuery v1.2.3+
 * @author Abdul Hafizdh K
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 * Copyright (c) 2014
 */
(function( $ ) {
 
    $.fn.jRelatime = function( option ) {
		var setting = $.extend({
			printTitle: false,
			multiFormat:false,
			maxYear: 5,
			string: {
				postfix: ' ago ',
				second: ' second ',
				minute: ' minute ',
				hour: ' hour ',
				day: ' day ',
				month: ' month ',
				year: ' year ',
				more: ' past '
			}
		},option);
		
		$(this).each(function(obj){
			var title = $(this).attr('title');
			var t_date = new Date(title);
			var now = new Date();
			var diff = Math.abs(now-t_date);
			var rel = {
				second:Math.floor(diff/1000),
				second_a:Math.abs(diff/1000),
				minute:Math.floor(diff/1000/60),
				minute_a:Math.abs(diff/1000/60),
				hour:Math.floor(diff/1000/60/60),
				hour_a:Math.abs(diff/1000/60/60),
				day:Math.floor(diff/1000/3600/24),
				day_a:Math.abs(diff/1000/3600/24),
				month:Math.floor(diff/1000/3600/24/30),
				month_a:Math.abs(diff/1000/3600/24/30),
				year:Math.floor(diff/1000/3600/24/30/12),
				year_a:Math.abs(diff/1000/3600/24/30/12),
			};
			var str = "";
			var add = "";
			if(rel.year > setting.maxYear){
				str += setting.string.more;
			}else if(rel.year >= 1){
				if(setting.multiFormat){
					add = (Math.floor(rel.year_a*10)%10);
					if(add > 0) add += setting.string.month;
					else add = '';
				}
				str += rel.year+setting.string.year+add+setting.string.postfix;
			}else if(rel.month >= 1){
				if(setting.multiFormat){
					add = (Math.floor(rel.month_a*10)%10);
					if(add > 0) add += setting.string.day;
					else add = '';
				}
				str += rel.month+setting.string.month+add+setting.string.postfix;
			}else if(rel.day >= 1){
				if(setting.multiFormat){
					add = (Math.floor(rel.day_a*10)%10);
					if(add > 0) add += setting.string.hour;
					else add = '';
				}
				str += rel.day+setting.string.day+add+setting.string.postfix;
			}else if(rel.hour >= 1){
				if(setting.multiFormat){
					add = (Math.floor(rel.hour_a*10)%10);
					if(add > 0) add += setting.string.minute;
					else add = '';
				}
				str += rel.hour+setting.string.hour+add+setting.string.postfix;
			}else if(rel.minute >= 1){
				if(setting.multiFormat){
					add = (Math.floor(rel.minute_a*10)%10);
					if(add > 0) add += setting.string.second;
					else add = '';
				}
				str += rel.minute+setting.string.minute+add+setting.string.postfix;
			}else if(rel.second >= 1){
				str += rel.second+setting.string.second;
			}
			if(setting.printTitle){
				$(this).append(title+" ( "+str+" ) ");
			}else{
				$(this).append(str);
			}
		});
        return this;
    };
}( jQuery ));
