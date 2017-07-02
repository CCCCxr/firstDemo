/**
 * Created by Administrator on 2017/7/2.
 */
function dispalyAbbreviations(){ //获取和存放页面上所有缩略语的信息。
    var abbre = document.getElementsByTagName("abbr");
    if (abbre.length<1) return false;
    var defs = [];  //定义一个数组来存放abbr的信息
    var Alength = abbre.length;
    for(var i=0;i<Alength;i++){
        var current_abbr = abbre[i];
        var definition = current_abbr.getAttribute("title"); //获取abbr标签上的title属性的值，也就是文本节点的全称
        var key = current_abbr.lastChild.nodeType;   //   获得abbr里面的缩略语,也是就是元素中文本节点的值。
        defs[key]=definition;  //将信息已键值对的形式保存到数组中
    }
}