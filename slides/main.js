let n 
init()
var timer = setTimer()
$('.window').on('mouseenter',function(){
    window.clearInterval(timer)
})
$('.window').on('mouseleave', function () {
    timer = setTimer()
})



var whichBtn =n
var whichPic =n
function setTimer() {
    return setInterval(() => {
        whichBtn +=1
        // console.log(whichBtn)
        makeLeave(getImg(n))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
        activeButton(getBtn(whichBtn))
        makeCurrent(getImg(n + 1))
        n += 1
    }, 3000)
}

var length = $('.images > img').length
// function x(n){
//     if(n > length){
//         n = n%length
//         if(n === 0){
//             n = length
//         }
//     }
//     return n
// }

function x(n){
    if(n>length){
        n = 1
    }
    return n
}

function getImg(n){
    return $(`.images > img:nth-child(${x(n)})`)
}
function getBtn(n){
    return $(`.buttons > span:nth-child(${x(n)})`)
}


function init(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
    $(`.buttons > span:nth-child(${n})`).addClass('black')
        .siblings('.black').removeClass('black')
}

function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('current leave').addClass('enter')
}

var allButtons = $('#buttons > span')
for(let i = 0; i  < allButtons.length; i++){
    $(allButtons[i]).on('click',function(e){
        var index = $(e.currentTarget).index()
        whichPic = index
        whichBtn = index
        n = index
        activeButton(allButtons.eq(whichPic))
        makeLeave(getImg(whichPic))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
        makeCurrent(getImg(whichPic + 1))
    })

}

function activeButton($button){
    $button
        .addClass('black')
        .siblings('.black').removeClass('black')
}
