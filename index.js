
//假设qjwry出让了$使用权限(也就是说从这里开始$将不是jQuery,只能用变量jQuery)
jQuery.noConflict();
//.zySlide()方法只要做轮播根标签就能轮播
//前两个和第三个轮播速度不一样
jQuery('.slide').zySlide({speed:1000});
jQuery('#slide').zySlide({delay:1900});











