/**
 * Created by Administrator on 2016/4/12.
 */
/*放大镜部分*/


$(document).ready(function(){
    clickSearch();//点击放大镜
    regAndLogin();//选择登录还是注册
    switchLogReg();//切换扥路注册
    closebtn();//关闭登录注册上的按钮
    backtotop();//滑动到顶端
    /*calcDistance();*/
    positionFooter();//自动绝对定位到最下面
    $(window).scroll(positionFooter).resize(positionFooter);
    clickBars();//点击导航栏的bars按钮
    clickUsers();//页面缩小后，导航栏隐藏，出现三个按钮代替，点击用户头像，弹出登录注册框
    tabs();
    pageSetting();

    locationImgs();//将瀑布流的图片全部排好
    $(window).scroll(loadImages);//滚动到底部加载
    clickNavItems();
})

//这是点击登录注册按钮的函数
function regAndLogin(){
    var forms = document.getElementsByClassName("forms");
    var logregs = document.getElementsByClassName("logreg");//得到装登录注册的大面板,通过这句话得到的对象一个数组
    var login = document.getElementById("login");
    var regin = document.getElementById("regin");
    var cover = document.getElementById("cover");
    for(var i=0; i<forms.length; i++){
        forms[i].onclick=function(){
            if(this.id=="form1"){//表明点击的是登录
                //alert(this.id);
                regin.style.zIndex="29";
                //regin.style.display="visible";
                regin.style.display="block";

                login.style.display="visible";
                login.style.display="block";
                login.style.zIndex="31";
                logregs[0].style.height="440px";
                regin.style.webkitTransform="rotateY(360deg)";//注册面板向右转180
                login.style.webkitTransform="rotateY(0deg)";
                //logregs[0].style.backgroundColor="white";
            }else if(this.id=="form2"){//表明点击的是注册
                login.style.zIndex="29";
                //login.style.display="visible";
                login.style.display="block";

                regin.style.display="visible";
                regin.style.display="block";
                regin.style.zIndex="31";
                logregs[0].style.height="500px";
                login.style.webkitTransform="rotateY(360deg)";
                regin.style.webkitTransform="rotateY(0deg)";
                //logregs[0].style.backgroundColor="white";
            }
            logregs[0].style.top="100px";
            logregs[0].style.left=($(window).width()/2-logregs[0].offsetWidth/2)+"px";
            cover.style.height="2796px";
            cover.style.width="100%";
            cover.style.zIndex="28";
            cover.style.display="block";
            cover.style.display="visible";
            cover.style.backgroundColor="rgba(0,0,0,0.5)";
        }
    }

}

//这是点击放大镜函数
function clickSearch(){
    var $searchSpan = $("#search span");
    var $search = $("#search");
    var $searchInput = $(".searchInput");
    var $divsnew = $(".newEights");
    var logo = $('.logo');
    //$searchInput.focus();
    $searchSpan.click(function(){
        $searchInput.css('marginLeft','-72%');
        $searchSpan.css('marginLeft','0%');
        for(var i=0; i<$divsnew.length; i++){
            $divsnew.eq(i).css('width','5.2%');
        }

        $search.css('right','150px')
            .css('backgroundColor','rgba(255,255,255,1)')
            .css('width','220px');
        $searchInput.css('width','91%')
            .css('visibility','visible')
            .css('float','right')
            .css('border','none')
            .css('outline','none');

        $searchSpan.css('color','rgba(127,127,127,0.8)');
        $searchInput.focus();


        $searchInput.blur(function() {
            $searchInput.css('visibility', 'hidden')
                .css('width','0px')
                .css('Left','78%');
            $searchSpan.css('marginLeft','80%');

            $search.css('right','48%')
                .css('backgroundColor','rgba(50,50,50,0.9)')
                .css('width','0px');

            for(var i=0; i<$divsnew.length; i++){
                $divsnew.eq(i).css('width','6.5%');
            }

        });
    });

    /*$searchSpan.click(function(){
     $searchInput.focus();
     $search.attr("id","search1");
     for(var i=0;i<$divs.length;i++){
     $divs.eq(i).css("margin-right","65px");
     }
     var $search1 = $("#search1");
     $searchInput.blur(function(){
     $search1.attr("id","search");
     $divs.css("marginRight","70px");
     $divone.css("marginRight","100px");
     });
     });*/


}

//这是在登录注册面板上点击切换登录注册函数
function switchLogReg(){//旋转还有问题的==================================================
    var switchs = document.getElementsByClassName("login-regin-switch");
    var logregs = document.getElementsByClassName("logreg");
    var login = document.getElementById("login");
    var regin = document.getElementById("regin");
    //var temp = login;
    for(var i=0; i<switchs.length; i++){
        switchs[i].onclick=function(){
            //alert(switchs.length);
            /*if(this.parentNode.id=="login"){
             /!*login.style.webkitTransition="all 0.4s linear";
             login.style.webkitTransform="rotateY(-360deg)";
             login.style.zIndex="29";
             //login.style.display="none";
             regin.style.webkitTransform="rotateY(0deg)";
             regin.style.zIndex="41";
             regin.style.display="block";
             regin.style.display="visible";*!/
             temp=regin;
             logregs[0].style.height="500px";
             }
             if(this.parentNode.id=="regin"){
             temp=login;
             logregs[0].style.height="450px";
             }
             this.parentNode.style.webkitTransition="all 0.3s linear";
             temp.style.webkitTransition="all 0.3s linear";
             this.parentNode.style.webkitTransform="rotateY(-180deg)";
             temp.style.webkitTransform="rotateY(0deg)";
             this.parentNode.style.zIndex="90";
             temp.style.zIndex="100";*/
            var logOrReg = this.parentNode;
            if(logOrReg.id=="login"){//说明这是登录面板上面的切换按钮
                login.style.webkitTransition="all 0.5s linear";
                login.style.webkitTransform="rotateY(180deg)";
                login.style.display="block";
                login.style.zIndex="90";

                regin.style.display="block";
                regin.style.zIndex="100";
                logregs[0].style.height="500px";
                regin.style.webkitTransform="rotateY(0deg)";
            }else if(logOrReg.id=="regin"){//说明这是注册面板上面的切换按钮
                regin.style.webkitTransition="all 0.5s linear";
                regin.style.webkitTransform="rotateY(-180deg)";
                regin.style.display="block";
                regin.style.zIndex="90";

                login.style.display="block";
                login.style.zIndex="100";
                logregs[0].style.height="440px";
                login.style.webkitTransform="rotateY(0deg)";
            }

        }

    }
}
//登录注册上的关闭按钮
function closebtn(){
    var closebtns = document.getElementsByClassName("fa fa-times");
    var logregs = document.getElementsByClassName("logreg");
    var login = document.getElementById("login");
    var regin = document.getElementById("regin");
    var cover = document.getElementById("cover");

    for(var i=0; i<closebtns.length; i++){
        closebtns[i].onclick=function(){
            //alert(closebtns.length);
            logregs[0].style.top="-1000px";
            login.style.display="none";
            regin.style.display="none";
            cover.style.display="none";
        }
    }


}
//返回到顶端的函数
function backtotop(){
    var backtoup = document.getElementById("backtotop");

    /*window.onscroll = function(){
     var y = window.scrollY;
     if(y>0){
     backtoup.style.display="block";
     backtoup.style.display="visible";

     }else if(y<=0){
     backtoup.style.display="none";
     }
     }这样也可以，以javascript的方式*/
    $(window).scroll(function(){
        var y = window.scrollY;
        if(y>0){
            backtoup.style.display="block";
            backtoup.style.display="visible";
            //backtoup.style.backgroundColor="rgba(0,0,0,0.7)";
        }else if(y<=0){
            backtoup.style.display="none";
        }
    });
    var tt;
    backtoup.onclick=function(){
        tt = window.setInterval(change,10);

    }
    function change(){
        if(window.scrollY<=0){
            clearInterval(tt);
        }
        window.scrollTo(0,window.scrollY-80);
    }
}

/*function calcDistance(){
 var topAndContentHeight = document.getElementById("topAndContent").scrollHeight;
 var footerHeight = document.getElementById("footer").scrollHeight;
 alert(footerHeight+"footgao");
 var allHeight = document.documentElement.clientHeight;
 //alert(allHeight);
 var footer = document.getElementById("footer");
 if((topAndContentHeight + footerHeight) < allHeight){
 alert("shao");
 footer.style.position = "absolute";
 footer.style.bottom = "0";
 }else if((topAndContentHeight + footerHeight) > allHeight){
 alert("duo");
 footer.style.position = "";
 footer.style.bottom = "";
 }
 setTimeout(function(){calcDistance();},10);
 }*/
//calcDistance();
//将低端定位到最下面（始终最下面）
function positionFooter(){
    var footer = $(".footer");
    //alert(footer.attr("id"));
    var footerHeight = footer.height();
    //alert(footerHeight);
    var clientHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    var footerTop = clientHeight+scrollHeight-footerHeight+"px";

    //alert(footerTop);
    /*alert($(document).height());//这个是整个网页的高度（即滚动条啦到最低时）
     alert($(window).height());//这是可见窗口的高度，这个随窗口的大小改变*/
    //alert($(document.body).height());//这个是网页的实际高度，不管看得到还是看不到

    //alert($(document.body).height());
    //alert(clientHeight);
    var contentHeight = $('#content').height();
    //alert(contentHeight);
    var headHeight = $('.imagenav').height();
    if(contentHeight+headHeight+footerHeight < clientHeight){
        //alert('ok');
        footer.css("position","absolute")
            .css("top",footerTop);
    }else{
        //alert('sdfsdf');
        footer.css("position","static");
    }

}

function clickBars(){
    var bars = $('#bars');
    var $divsnew = $(".newEights");
    var nav = $('nav');
    var closes = $('#close');
    bars.click(function () {
        for(var i=0; i<$divsnew.length; i++){
            $divsnew.eq(i).css('display','block');
            $divsnew.eq(i).css('visibility','visible');
            $divsnew.eq(i).css('opacity','1');
            $divsnew.eq(i).css('width','100%');
            bars.css('visibility','hidden');
            closes.css('visibility','visible');
        }
        //nav.css('height','500px');
    });
    closes.click(function(){
        bars.css('visibility','visible');
        closes.css('visibility','hidden');
        for(var i=0; i<$divsnew.length; i++){
            $divsnew.eq(i).css('display','inline-block');
            $divsnew.eq(i).css('width','6.5%');
            $divsnew.eq(i).css('visibility','hidden');
            $divsnew.eq(i).css('opacity','0');
        }

    });
}


function clickUsers(){

    var users = $('#users');
    var logregs = document.getElementsByClassName("logreg");//得到装登录注册的大面板,通过这句话得到的对象一个数组
    var login = document.getElementById("login");
    var regin = document.getElementById("regin");
    var cover = document.getElementById("cover");

    users.get(0).onclick=function(){
        if(this.id=="users"){//表明点击的是登录
            //alert(this.id);
            regin.style.zIndex="29";
            //regin.style.display="visible";
            regin.style.display="block";

            login.style.display="visible";
            login.style.display="block";
            login.style.zIndex="31";
            logregs[0].style.height="440px";
            regin.style.webkitTransform="rotateY(360deg)";//注册面板向右转180
            login.style.webkitTransform="rotateY(0deg)";
            //logregs[0].style.backgroundColor="white";
        }else if(this.id=="form2"){//表明点击的是注册
            login.style.zIndex="29";
            //login.style.display="visible";
            login.style.display="block";

            regin.style.display="visible";
            regin.style.display="block";
            regin.style.zIndex="31";
            logregs[0].style.height="500px";
            login.style.webkitTransform="rotateY(360deg)";
            regin.style.webkitTransform="rotateY(0deg)";
            //logregs[0].style.backgroundColor="white";
        }
        logregs[0].style.top="100px";
        //alert($(window).width());
        //alert(logregs[0].offsetWidth);
        //alert($(window).width()/2);
        logregs[0].style.left=($(window).width()/2-logregs[0].offsetWidth/2)+"px";
        cover.style.height="2796px";
        cover.style.width="100%";
        cover.style.zIndex="28";
        cover.style.display="block";
        cover.style.display="visible";
        cover.style.backgroundColor="rgba(0,0,0,0.5)";
    }

}


function tabs(){
    var twoconone = $('.twoconone');
    var threelis = $('.threelis li');
    threelis.eq(0).css({
        borderBottom:'1px solid #ccc'
    });

    for(var n=1;n<twoconone.length;n++){
        twoconone.eq(n).css({
            opacity:'0',
            visibility:'hidden'
        });
    }
    twoconone.eq(0).css({
        opacity:'1',
    });

    for(var i=0; i<threelis.length; i++){
        threelis.eq(i).click(function(){
            for(var j=0; j<threelis.length; j++){
                threelis.eq(j).css("borderBottom","");
            }
            $(this).css({
                borderBottom:'1px solid #ccc'
            });
            if($(this).html()=='全部'){
                twoconone.eq(0).css({
                    opacity:'1',
                    visibility:'visible'
                });
                twoconone.eq(1).css({
                    opacity:'0',
                    visibility:'hidden'
                });
            }
            if($(this).html()=='赛事'){
                twoconone.eq(0).css({
                    opacity:'0',
                    visibility:'hidden'
                });
                twoconone.eq(1).css({
                    opacity:'1',
                    visibility:'visible'
                });
            }
        });
    }
}

function pageSetting(){
    var covers = $('.covers');
    var contentsimg = $('.content img');
    var content = $('.content');
    var boxs = $('.box');
    var containers = $('.containers');
    var lastboxhei = boxs.last().height();
    var lasttop = boxs.last().offset().top;

    //containers.css('height');
    //设置覆盖面板的高度图像的高度一样
    for(var i=0; i<covers.length; i++){
        covers.eq(i).height(contentsimg.eq(i).height());
    }
    //设置最外面那个的高度
    containers.css('height',lasttop+lastboxhei+'px');

}

function locationImgs(){//这个函数是定位瀑布流第二行的图片的位置
    var boxs = $('.box');
    console.log(boxs.length);
    var arrHeight = new Array();//放第一行的所有content的高度
    var arrWidth = boxs.eq(0).outerWidth();//所有的box的宽度都是271px
    //计算列数
    var cols =Math.floor($(window).width()/arrWidth);
    console.log(cols);
    //设置父元素container的宽度不变
    var containers = $('.containers');
    containers.css({
        'width':cols*arrWidth+'px',
        'margin':'0 auto'

    });

    var minHeight;//一行最小高度
    var minHeightIndex;

    for(var i=0; i<boxs.length; i++){
        //当一排不满4个的时候,将每一个box的高度放入数组,再挑选出数组里面最小高度的那个一
        if(i<cols){
            arrHeight[i]=boxs.eq(i).outerHeight();
        }else{//大于4的时候进入第二行，判断第5个box该放在哪儿
            minHeight=Math.min.apply(null,arrHeight);
            //alert(minHeight);
            minHeightIndex = $.inArray(minHeight,arrHeight);//最小高度在数组中的位置
            boxs.eq(i).css({
                'position':'absolute',
                'top':minHeight,
                'left':boxs.eq(minHeightIndex).position().left
            });
            arrHeight[minHeightIndex]+=boxs.eq(i).outerHeight();
        }
    }
}

//检查是否到了滚动加载其余图片的位置
function checkScroll(){
    var boxs = $('.box');
    var lastHeight = $('.box').last().height();
    var lasttop = boxs.last().offset().top;

    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    return ((scrollTop+windowHeight)>(lastHeight/2+lasttop))?true:false;
}

function loadImages(){
    var containers = $('.containers');
    var imgs = {'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'}]};
    var objsLength = imgs.data.length;
    if(checkScroll()){//判断到了要加载的地方
        for(var i=0; i<objsLength; i++){
            var box = $('<div>').addClass('box').appendTo(containers);
            var content = $('<div>').addClass('content').appendTo(box);
            var img = $('<img>').attr('src','images/beauty/'+imgs.data[i].src).appendTo(content);

            var textspan = $('<div>').addClass('textspan').appendTo(content);
            var span1 = $('<span>').html('孙允珠').appendTo(textspan);
            var span2 = $('<span>').addClass('fa fa-comment-o').html('0').appendTo(textspan);
            var span3 = $('<span>').addClass('fa fa-heart-o').html('0').appendTo(textspan);
            var ap = $('<p>').html('暂时没有评论，你可以成为第一人').appendTo(textspan);

            var tubiaos = $('<div>').addClass('tubiaos').appendTo(textspan);
            var tspan1 = $('<span>').addClass('fa fa-star').appendTo(tubiaos);
            var tspan2 = $('<span>').addClass('fa fa-weibo').appendTo(tubiaos);
            var tspan3 = $('<span>').addClass('fa fa-tencent-weibo').appendTo(tubiaos);
            var tspan4 = $('<span>').addClass('fa fa-hacker-news').appendTo(tubiaos);
            var tspan5 = $('<span>').addClass('fa fa-facebook-square').appendTo(tubiaos);
            var tspan6 = $('<span>').addClass('fa fa-tumblr-square').appendTo(tubiaos);

            var covers = $('<div>').addClass('covers').appendTo(content);
            var div1 = $('<div>').appendTo(covers);
            var cspan1 = $('<span>').addClass('fa fa-eye').appendTo(div1);

            var div2 = $('<div>').appendTo(covers);
            var cspan2 = $('<span>').addClass('fa fa-link').appendTo(div2);


        }
        locationImgs();

    }



}



function allDingyi(){
    var containersHei = $('.containers');
    //alert(containersHei);
    var scrollHeight = $(window).scrollTop();
    //alert(scrollHeight);
    var windowHeight = $(window).height();
    //alert(windowHeight);
    containersHei.css('height',scrollHeight+windowHeight);


}

function clickNavItems(){
    var items = $('.items');
    var submenus = $('#submenu>li');
    for(var i=0; i<items.length; i++){
        items.eq(i).click(function(){
            var ids = $(this).attr('id');
            if(ids==0){//跳转到相应的页面
                location.href='index.html';
            }if(ids==1){
                location.href='article.html';
            }if(ids==2){
                location.href='enjoy.html';
            }if(ids==3){
                location.href='source.html';
            }if(ids==4){
                location.href='exchange.html';
            }if(ids==5){
                location.href='activity.html';
            }if(ids==6){
                location.href='beauty.html';
            }
        });
    }
    for(var i=0; i<submenus.length; i++){
        submenus.eq(i).click(function(){
            var texts = $(this).html();
            if(texts=='关于觉唯'){
                location.href='More.html';
            }if(texts=='留言联系'){
                var texts = encodeURI(texts);//将中文先进行编码
                location.href='More.html?texts='+texts;//传递参数
            }
        });
    }
}














