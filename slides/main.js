let n 
init()
setInterval(()=>{
    makeLeave(getImg(n))
        .one('transitionend',(e)=>{
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImg(n+1))
    n += 1
},3000)





var length = $('.images > img').length
function x(n){
    if(n > length){
        n = n%length
        if(n === 0){
            n = length
        }
    }
    return n
}

function getImg(n){
    return $(`.images > img:nth-child(${x(n)})`)
}

function init(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
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