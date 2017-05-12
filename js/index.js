$(function(){
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    var list = $('#slide ul li');
    var timer = null;
    var num = 4000; //自动播放间隔时间
    var flag = true;//节流阀功能

    //封装一下图片移动到各个位置的函数
    function move(){
        for( var i = 0; i < list.length; i++){
            list.eq( i ).animate(config[i],500,function(){
                flag = true;
            })
        }   
    }

    move();
    //鼠标进入图片范围
    $('#wrap').mouseenter(function(){
        //显示左右箭头
        $('#arrow').show(500);
        //清除自动播放
        clearInterval(timer);
    });
    $('#wrap').mouseleave(function(){   //鼠标离开
        //隐藏箭头
        $('#arrow').hide(500);
        //添加自动播放
        timer = setInterval(function(){
            $('#arrRight').click();
        },num)
    })
    //点击箭头
    $('#arrRight').click(function(){
        if(flag){
            config.push(config.shift());
            move(); 
            flag = false;
        }
    })
    $('#arrLeft').click(function(){
        if(flag){
            config.unshift(config.pop());
            move();
            flag = false;
        } 
    })
    //自动播放（自动点击右箭头）
    timer = setInterval(function(){
        $('#arrRight').click();
    },num)

})