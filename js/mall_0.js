function PageObj(){

}

PageObj.prototype.init = function(){
    $(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
    $(".sideMenu").slide({titCell:"h3", targetCell:"ul",defaultIndex:0,effect:"slideDown",delayTime:300,trigger:"click"});
    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",scroll:4,vis:4,easing:"easeOutElastic"});
    var arrs = $(".nav-content").find("li");

    for(var i = 0,len = arrs.length;i < len;i++){
        (function(){
            return function(){
                var li = arrs[i];
                var $li = $(li);
                $li.hover(function(){
                    $(this).addClass("on");
                    $(this).next().addClass("on");
                },function(){
                    $(this).removeClass("on");
                    $(this).next().removeClass("on");
                })
            }()
        })()
    }
}

$(function(){
    var pageobj = new PageObj();
    pageobj.init();
})
