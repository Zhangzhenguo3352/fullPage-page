
function wowFn(offset){
  var wow = new WOW({
  	boxClass: 'wow',
  	animateClass: 'animated',
  	offset: offset,
  	mobile: true,
  	live: true
  });
  wow.init();
}
// 第一屏 动画实现
function page3(ele, index) {
  $(ele).eq( index ).attr('class')
}
// 第二屏 动画实现
function page2(ele, index) {
  $(ele).eq( index ).attr('class')
}
// 第一屏 动画实现
function page1(ele, index) {
  $(ele).eq( index ).attr('class')
}
function removePage(index) {
  $('.section').find('.wow').hide()
  $('.section').find('.wow').removeClass('wow slideInRight')
}
function page(index) {
  var offset = $('#dowebok').offset().top
  $('.section').eq(index-1).find('h3').show()
  $('.section').eq(index-1).find('h3').addClass('wow slideInRight')
  wowFn(offset)
}

function fullpageInit() {
  var offset = $('#dowebok').offset().top
  $('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		onLeave: function(anchorLink, index) {
			console.log('滚动前的回调函数')
		},
		afterRender: function() {
			console.log('页面初始化完成后的回调函数')
      wowFn(offset)
		},
		afterLoad: function(anchorLink , index) {
			console.log('滚动到某一屏后的回调函数', anchorLink , index)
      removePage( index )
      page( index )
		},
		onSlideLeave: function() {
			console.log('某一水平滑块滚动前的回调函数')
		},
		afterSlideLoad: function() {
			console.log('滚动到某一水平滑块后的回调函数')
		}
	});
}

$(function() {
  fullpageInit() // 全屏插件 初始化
})
