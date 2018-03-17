// 1. 实现点击轮播
// 2. 实现自动轮播
// 3. 实现高亮点击按钮
// 4. 鼠标浮在图片上，图片停止自动轮播
// 5. 鼠标离开图片，图片继续轮播
// 6. 当鼠标浮在按钮上，图片停止自动轮播


var allButtons = $('#buttons > span') //allButtons是一个伪数组
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()//判断点击的是第几个按钮
        var p = index * -300

        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index //重置n
        
        activeButton(allButtons.eq(n))
    })
}

var n =0
var size = allButtons.length

function activeButton($button){
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}
function playSlide(index){
    allButtons.eq(index).trigger('click')
    activeButton(allButtons.eq(index))
}
function setTimer(){
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 3000)
}
playSlide(n % size)

var timer = setTimer()

$('.window').on('mouseenter',function(){
    window.clearInterval(timer)
})

$('.window').on('mouseleave',function(){
    timer = setTimer()
})
