

//$(function(){})
(function($){
//	本函数只负责一个轮播的功能
//也就是说只会产生一个轮播图,这个函数只能分配给一个轮播图
//所以在调用本函数的时候务必把当前轮播的根标签作为实参传递过来
//这里的形参elem就是某个轮播的根标签
	var slide=function(elem){
//		转化为jQuery标签对象
		var $elem = $(elem);
		//添加默认设置选项
		var setting = {
//			控制刚开始变大的时间
			delay:1000,
//			控制轮播速度
			speed:2000,
			
		};
	//线规定好每张图片处于的位置和状态
	var states = [
		{zInde: 1,width: 120,height: 150,top: 69,left: 134,op: 0.4},
		{zInde: 2,width: 130,height: 170,top: 59,left: 0,op: 0.6}, 
		{zInde: 3,width: 170,height: 218,top: 35,left: 110,op: 0.8},
		{zInde: 4,width: 224,height: 288,top: 0,left: 263,op: 1},
		{zInde: 3,width: 170,height: 218,top: 35,left: 470,op: 0.8},
		{zInde: 2,width: 130,height: 170,top: 59,left: 620,op: 0.6}, 
		{Inde: 1,width: 120,height: 150,top: 69,left: 500,op: 0.4}];

//	找到当前轮播的子标签li
	var lis = $elem.find('li');
	//然每个里对应上面states的每个状态
	function move() {
		lis.each(function(index, ele) {
			var state = states[index];
			$(this).css('zIndex', state.zInde).finish().animate(state, setting.delay).find('img').css('opacity', state.op)
		})
	}
	//让li从正中间展开
	move();

	//下一张
	function next() {
		//	吧数组最后元素移到数组第一位
		//	$('#box li').first().appendTo($('#box ul'));
		states.unshift(states.pop());
		move();
	}
	//上一张
	function prev() {
		states.push(states.shift());
		move();
	}
	//点击下一张
	$elem.find('.zy-next').click(function() {
		next();
	})
	$elem.find('.zy-prev').click(function() {
			prev();
		})
		//自动轮播
	var intervalindex = null;

	function auto() {
		intervalindex = setInterval(next, setting.speed);
	};
	auto();
	//停止轮播
	$elem.find('section').add(lis).hover(function() {
		clearInterval(intervalindex);
	}, function() {
		auto();
	})
	}
	
//	找到要轮播的轮播图的根表签作为实参在slide函数调用
//	for (var i = 0; i < $('.zy-slide').length; i++) {
//	slide($('.zy-slide').eq(i));
//	}
//	$.fn:jquery封装插件方法,fn:以后写样式选择器
	$.fn.zySlide = function(){
		console.log(this);
		$(this).each(function(i,ele){
			slide(ele);
		})
	}
})(jQuery);
//jQuery实参






