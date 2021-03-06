$(document).ready(function(){
    // Scroll to comment
    $('#commentsLink').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        //var target = $(href == "#" || href == "" ? 'html' : href);
        var target = $(href);
        if (target && target.offset && target.offset()) {
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
        }
        return false;
    });
});


// コメントを非表示
var collapse = function(comment_id, collapseFlag) {
    if (collapseFlag) {
        $('#comment_' + comment_id).addClass('hide');
        $('#comment_collapse_' + comment_id).removeClass('hide');
        $('#collapse_on_' + comment_id).addClass('hide');
        $('#collapse_off_' + comment_id).removeClass('hide');
    } else {
        $('#comment_' + comment_id).removeClass('hide');
        $('#comment_collapse_' + comment_id).addClass('hide');
        $('#collapse_on_' + comment_id).removeClass('hide');
        $('#collapse_off_' + comment_id).addClass('hide');
    }
    // 保存
    var url = _CONTEXT + '/protect.knowledge/collapse/';
    $.ajax({
        type : 'POST',
        url : url,
        data : 'commentNo=' + comment_id + '&collapse=' + collapseFlag,
        scriptCharset: 'utf-8',
        success : function(datas, dataType) {
            console.log(datas);
            $.notify(datas.message, 'success');
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            $.notify('[fail] collapse', 'warn');
        }
    });
};
