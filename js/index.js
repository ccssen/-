
//线规定好每张图片处于的位置和状态
var states =[
	{zInde: 1,width: 120,height: 150,top: 69,left: 134, op:0.4 },
	{zInde: 2,width: 130,height: 170,top: 59,left: 0, op:0.6 },
	{zInde: 3,width: 170,height:218 ,top: 35,left: 110, op:0.8 },
	{zInde: 4,width: 224,height: 288,top:0 ,left: 263, op:1 },
	{zInde: 3,width: 170,height: 218,top: 35,left: 470, op: 0.8},
	{zInde: 2,width: 130,height: 170,top: 59,left: 620, op: 0.6},
	{zInde: 1,width: 120,height: 150,top: 69,left: 500, op: 0.4}
];

var lis =$('#box li');
//然每个里对应上面states的每个状态

function move(){
	lis.each(function(index,ele){
		var state = states[index];
		$(ele).css('zIndex',state.zInde).finish().animate(state,1000).find('img').css('opacity',state.op)
	})
}
//让li从正中间展开
move();

//下一张
function next(){
//	吧数组最后元素移到数组第一位
	states.unshift(states.pop());
	move();
}
//上一张
function prev(){
	states.push(states.shift());
	move();
}
//点击下一张
$('#box .next').click(function(){
	next();
})
$('#box .prev').click(function(){
	prev();
})
//自动轮播
var intervalindex = null;
function auto(){
	intervalindex = setInterval(next,3000);
};
auto();
//停止轮播
$('#box li').add('#box section').hover(function(){
	clearInterval(intervalindex);
},function(){
	auto();
})
