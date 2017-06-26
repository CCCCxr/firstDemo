/**
 * Created by Administrator on 2017/6/19.
 */


// windows.onload 方法同时运行多个函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

// 在某个元素之前插入一个元素。  newElement 是要插入的节点，targetElemet 是目标节点

function inserAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//  创建一个新的img和P元素，并设置相关属性，并且将它们插入id为pic的元素的前面
function preparePlaceholder(){
    var img = document.createElement("img");
    img.setAttribute("id","img");
    img.setAttribute("src","images/1.jpg");
    img.setAttribute("alt","图片");
    var p = document.createElement("p");
    p.setAttribute("id","des");
    var pText = document.createTextNode("我的图片");
    p.appendChild(pText);
    document.getElementsByTagName("body")[0].appendChild(img);
    document.getElementsByTagName("body")[0].appendChild(p);
    var pic  = document.getElementById("pic");
    pic.parentNode.insertBefore(img,pic);
    pic.parentNode.insertBefore(p,pic);
}

preparePlaceholder();
addLoadEvent(prepareGallery());


//将说明文字替换成当前图片的title内容
function showimg(whichpic){
    if(!document.getElementById("img")) return false;
    var source=whichpic.getAttribute('href');
    var img=document.getElementById('img');
    img.setAttribute("src",source);
    if(document.getElementById('des')){
        var text = whichpic.getAttribute('title');
        var des=document.getElementById('des');
        des.firstChild.nodeValue = text;
    }
    return true;
}


//为每个li标签绑定点击事件，来切换图片
function prepareGallery(){
    if(!document.getElementsByTagName||!document.getElementById)return false;
    var gellery = document.getElementById("pic");
    var link = gellery.getElementsByTagName("a");
    for(var i =0; i <link.length ; i++){
        link[i].onclick = function(){
            return !showimg(this);
        };
    }
}

