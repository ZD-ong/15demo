function Carousel($ct){
    this.init($ct)
    this.bind()
}


Carousel.prototype = {
    constructor: Carousel,
    init: function($ct){
        this.$ct = $ct
        this.$imgCt   = this.$ct.find('.img-ct')
        this.$imgs    = this.$ct.find('.img-ct > li')
        this.$preBtn  = this.$ct.find('.pre') 
        this.$nextBtn = this.$ct.find('.next')
        this.$button  = this.$ct.find('.button li')
        
        this.imgWidth = this.$imgs.width()
        this.imgCount = this.$imgs.length
        this.index = 0
        
        this.$imgCt.append(this.$imgs.first().clone())
        this.$imgCt.prepend(this.$imgs.last().clone())
        this.$imgCt.width((this.imgCount + 2)*this.imgWidth)
        this.$imgCt.css({left: '-'+this.imgWidth+'px'})
    },
    bind: function(){
        var _this = this
        this.$preBtn.on('click',function(){
            console.log('pre...')
            _this.playPre()
        })
        this.$nextBtn.on('click',function(){
            console.log('next...')
            _this.playNext()
        })
        this.$button.on('click',function(){
            console.log($(this).index())
        })
        

    },
    playNext: function(){
        var _this = this
        this.$imgCt.animate({ left: '-=' + this.imgWidth},function(){
            _this.index++
            if(_this.index === _this.imgCount){
                _this.$imgCt.css({ left: '-' + _this.imgWidth + 'px' })
                _this.index = 0
            }
        })
    },
    playPre: function(){

    }
}

new Carousel($('.window').eq(0))

