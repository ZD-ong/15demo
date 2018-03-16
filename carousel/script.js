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
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

var n =0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')

var timer = setInterval(()=>{
    n += 1
    allButtons.eq(n%size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
},3000)

$('.window').on('mouseenter',function(){
    window.clearInterval(timer)
})

$('.window').on('mouseleave',function(){
    timer = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 3000)
})
