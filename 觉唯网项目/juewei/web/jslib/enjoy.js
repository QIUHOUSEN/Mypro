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