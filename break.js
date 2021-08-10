// ==UserScript==
// @name         布雷克影院跳过支付
// @namespace    https://p00q.cn
// @version      0.1
// @description  该脚本用于跳过布雷克影院（http://www.breakvip.com）观影支付环节。
// @author       DanBai
// @match        http://www.breakvip.com/*
// @icon         http://breakvip.czmhgz.cn/wp-content/uploads/2018/11/c7925a33830e59.ico
// @grant        none
// @updateURL https://raw.githubusercontent.com/danbai225/breakvip/master/break.js
// ==/UserScript==

(function() {
    'use strict';
window.onload=function(){
    var httpRequest=new XMLHttpRequest();httpRequest.open("GET",window.url,true);httpRequest.send();var pattern=/http.*m3u8/;httpRequest.onreadystatechange=function(){if(httpRequest.readyState==4&&httpRequest.status==200){var dp=new DPlayer({element:document.getElementById("dplayer"),autoplay:true,preload:"auto",theme:"#00b2c2",loop:false,screenshot:false,hotkey:true,video:{url:pattern.exec(httpRequest.responseText)[0],type:"hls",customType:{hls:function(video,player){const hls=new Hls();hls.loadSource(video.src);hls.attachMedia(video)},}},})}};
}
})();