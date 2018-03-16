var allButtons = $('#buttons > span') //allButtons是一个伪数组
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()//判断点击的是第几个按钮
        var p = index * -300

        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
    })
}

// var n =0
// console.log(n%4)//四个一循环
// setInterval(()=>{
//     n += 1
//     console.log(n%4)
// },1000)