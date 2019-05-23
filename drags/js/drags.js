
function allowDrop(ev) {
    ev.preventDefault();
}
var srcdiv = null;
var temp = null;
//当拖动时触发
function drag(ev, divdom) {
    srcdiv = divdom;
    temp = divdom.innerHTML;
}
//当拖动完后触发
function drop(ev, divdom) {
    ev.preventDefault();
    if (srcdiv != divdom) {
        srcdiv.innerHTML = divdom.innerHTML;
        divdom.innerHTML = temp;
    }
}
function addSpace() {
    $("#allSpace").append($(".oSpace").html());
}
$("body").on("click",".showD",function (e) {
    if($(this).children().next().is(":hidden")){
        $(this).children().next().show();
    }else {
        $(this).children().next().hide();
    }
})
function setOne(e) {
    $(e).parents(".oCard").find(".row").attr("class","rows");
}
function setTwo(e) {
    $(e).parents(".oCard").find(".rows").attr("class","row");
}
function deleteThis(e) {
    $(e).parents(".oCard").remove();
}