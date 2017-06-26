/**
 * Created by Administrator on 2017/6/26.
 */
  //var request = new ActiveXObject("Msxml2.XMLHTTP.3.0");  IE 的Ajax对象

  //var request = new XMLHttpRequest(); 其他浏览器

   function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
            catch (e) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch (e) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
            }
            return false;
        };
        return new XMLHttpRequest();
    }




