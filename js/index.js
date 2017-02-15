//闭包(方法里套方法是一种(函数作用于变量会一张存在知道变量不在使用))
//首先我们准备吧代码这样改
//function slide(){
////	把下面的所有的代码全部黏贴过来
////轮播图代码...
//}
/*function slide() {
	
}
slide();*/
//自运行的匿名函数
//$(function(){})
(function(){
	//	把下面的所有的代码全部黏贴过来
	//轮播图代码...
	//线规定好每张图片处于的位置和状态
	var states = [
		{zInde: 1,width: 120,height: 150,top: 69,left: 134,op: 0.4},
		{zInde: 2,width: 130,height: 170,top: 59,left: 0,op: 0.6}, 
		{zInde: 3,width: 170,height: 218,top: 35,left: 110,op: 0.8},
		{zInde: 4,width: 224,height: 288,top: 0,left: 263,op: 1},
		{zInde: 3,width: 170,height: 218,top: 35,left: 470,op: 0.8},
		{zInde: 2,width: 130,height: 170,top: 59,left: 620,op: 0.6}, 
		{Inde: 1,width: 120,height: 150,top: 69,left: 500,op: 0.4}];

	var lis = $('#box li');
	//然每个里对应上面states的每个状态

	function move() {
		lis.each(function(index, ele) {
			var state = states[index];
			$(this).css('zIndex', state.zInde).finish().animate(state, 1000).find('img').css('opacity', state.op)
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
	$('#box .next').click(function() {
		next();
	})
	$('#box .prev').click(function() {
			prev();
		})
		//自动轮播
	var intervalindex = null;

	function auto() {
		intervalindex = setInterval(next, 3000);
	};
	auto();
	//停止轮播
	$('#box li').add('#box section').hover(function() {
		clearInterval(intervalindex);
	}, function() {
		auto();
	})
})();

//变量的作用域
//1全局域 [Window] 2Function函数域 3Block域
//全局域从页面被打开之后到页面被关闭之前始终存在
//函数域:存在于函数调用的一瞬间(也不一定,考虑闭包的存在)
//闭包的理解
//作用:1.可以保留函数的作用域(要不然闭包里面的函数move()就不能使用slide()函数域里面的变量如:states,lis等)
//产生必要条件:函数里套函数(内层函数要使用外层函数的变量同时需要内层函数保留一段时间)
//全局变量不会产生闭包(因为全局变量一致存在,不能存在闭包)

//封装插件:
//1:插件中最好不要使用id来作为选择器(原因插件是能够被重复使用的,使用的id可能导致重复使用冲突
//2:变量的命名和方法的命名:states interval move() next(),用户使用这个插件的时候可能还会引入自己创建的js文件,也有这样的命名,那么产生冲突了.
//3class选择器,选择标签不要太大众化,容易引起冲突
//4插件命名问题,不要太大众化
//



////线规定好每张图片处于的位置和状态
//var states = [{
//	zInde: 1,
//	width: 120,
//	height: 150,
//	top: 69,
//	left: 134,
//	op: 0.4
//}, {
//	zInde: 2,
//	width: 130,
//	height: 170,
//	top: 59,
//	left: 0,
//	op: 0.6
//}, {
//	zInde: 3,
//	width: 170,
//	height: 218,
//	top: 35,
//	left: 110,
//	op: 0.8
//}, {
//	zInde: 4,
//	width: 224,
//	height: 288,
//	top: 0,
//	left: 263,
//	op: 1
//}, {
//	zInde: 3,
//	width: 170,
//	height: 218,
//	top: 35,
//	left: 470,
//	op: 0.8
//}, {
//	zInde: 2,
//	width: 130,
//	height: 170,
//	top: 59,
//	left: 620,
//	op: 0.6
//}, {
//	zInde: 1,
//	width: 120,
//	height: 150,
//	top: 69,
//	left: 500,
//	op: 0.4
//}];
//
//var lis = $('#box li');
////然每个里对应上面states的每个状态
//
//function move() {
//	lis.each(function(index, ele) {
//		var state = states[index];
//		$(this).css('zIndex', state.zInde).finish().animate(state, 1000).find('img').css('opacity', state.op)
//	})
//}
////让li从正中间展开
//move();
//
////下一张
//function next() {
//	//	吧数组最后元素移到数组第一位
//	//	$('#box li').first().appendTo($('#box ul'));
//	states.unshift(states.pop());
//	move();
//}
////上一张
//function prev() {
//	states.push(states.shift());
//	move();
//}
////点击下一张
//$('#box .next').click(function() {
//	next();
//})
//$('#box .prev').click(function() {
//		prev();
//	})
//	//自动轮播
//var intervalindex = null;
//
//function auto() {
//	intervalindex = setInterval(next, 3000);
//};
//auto();
////停止轮播
//$('#box li').add('#box section').hover(function() {
//	clearInterval(intervalindex);
//}, function() {
//	auto();
//})

