/**
 * Created by Administrator on 2017/6/26.
 */


function getNewContent(){
    var request = getHTTPObject();
    // 如果有Ajax对象则返回true  否者返回false ;
    if(request){
        // 向在Ajax同等目录下的example文本发送GET请求， true表示异步加载
        request.open("GET","example.txt",true);
        //  onreadystatechange 是服务器给XMLHTTPRequest对象发送回响时被触发执行一个事件处理函数
        request.onreadystatechange = function() {
            // readyState 有五个可能的值 0表示未初始化，1表示正在加载，2表示加载完毕，3表示正在交互，4表示完成
            if (request.readyState == 4) {
                var para = document.createElement("p");
                //responseText属性  用于访问保存文本为字符串形式的数据。
                // 还有另外一个是responseXML属性 用于保存Content-Type 头部中指定为“text/xml”的数据。
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null); //发送请求
    }else{
        alert("Sorry, your browser doen\'t support XMLHTTPRequest");
    }
    alert("Function Done");  // 测试异步性，
}

addLoadEvent(getNewContent());