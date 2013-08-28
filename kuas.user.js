// ==UserScript==
// @name            KUAS Enhanced Mod
// @namespace	    http://www.grd.idv.tw/about
// @description	    fix every vbscript and no need IE anymore.
// @include         http://140.127.113.231/kuas/*
// @include         http://140.127.113.231/kuas/system/*
// @version         1.0
// @author          Louie Lu (grapherd at gmail dot com)
// @updateURL       http://userscripts.org/scripts/source/176759.user.js
// @downloadURL     http://userscripts.org/scripts/source/176759.user.js
// ==/UserScript==

var switch_yms = "function switch_yms() { url = document.location.href; thisform.spath.value = url.substring(url.indexOf('=', 40) + 1, url.length); spath = thisform.spath.value;ls = thisform.yms.value.split(',');  thisform.arg01.value = ls[0]; thisform.arg02.value = ls[1];  thisform.action = '../' + thisform.spath.value.substring(0, thisform.spath.value.length - 1);thisform.submit();}"
var of_display = "function of_display(fncid) {thisform.fncid.value = fncid;thisform.submit();}";
var ag112_go_next = 'function go_next(sid){thisform.unt_id.value=sid;thisform.action="ag112_02.jsp";thisform.submit()}';
var ag201_go_next = 'function go_next(s1){thisform.sentvalue.value=s1;thisform.action="ag201_1.jsp";thisform.submit()}';
var ag222_go_next = 'function go_next(s1,s2,s3){thisform.arg01.value=s1;thisform.arg02.value=s2;thisform.arg04.value=s3;thisform.action="ag064_print.jsp";thisform.submit()}';
var ag300_send_onclick = 'function send_onclick(){thisform.action="ag300_02.jsp";thisform.target="bottom";thisform.submit();}';
var ag300_reload = 'function reload(){thisform.action="";thisform.target="top";thisform.submit()}';
//var ag304_go_next = 'function go_next(s){thisform.arg.value=s;thisform.submit()}';
var ag304_go_next = 'function go_next(s1,s2,s3){if(typeof s2=="undefined"&&typeof s3=="undefined"){thisform.arg.value=s1;thisform.submit()}else{thisform.arg01.value=s1;thisform.arg02.value=s2;thisform.arg04.value=s3;thisform.action="ag064_print.jsp";thisform.submit()}}';
var ag402_reload = 'function reload(s){thisform.action="ag402_01.jsp";thisform.submit()}';
var ag402_qry = 'function qry(s){if(s=="Y"){if(thisform.emut_kind.value=="dgr"){if(thisform.etxt_list.value!="%"){thisform.action="ag402_02_1.jsp"}else{thisform.action="ag402_02_2.jsp"}}else{thisform.action="ag402_02_3.jsp"}thisform.submit()}}';
var ag450_reload = 'function reload(){thisform.action="ag450_01.jsp";thisform.target="top";thisform.submit()}';
var ag450_go_qry = 'function go_qry(){svalue=[thisform.exditem.value,thisform.examdate.value,thisform.exd_prd.value,thisform.division.value,thisform.romkid.value].join("*$*");thisform.content.value=svalue;thisform.action="ag450_03.jsp";thisform.submit()}';


function add_function(func, check_url) {
    if (check_url) {
        if (!~document.location.href.search(check_url)) {
            return 0;
        }
    }
    
    var script = document.createElement("script");
    script.innerHTML = func;
    document.body.appendChild(script);
}

// Finish function
add_function(of_display, 'f_left.jsp'); // 側邊欄
add_function(switch_yms, 'ag008.jsp'); // 學期成績
add_function(ag222_go_next, 'ag222.jsp'); // 個人課表
add_function(ag222_go_next, 'ag302'); // 教室課表
add_function(ag112_go_next, 'ag112_01.jsp'); // 開課資訊 
add_function(ag201_go_next, 'ag201.jsp'); // 課程規劃表  
add_function(ag300_send_onclick, 'ag300'); // 開課課表 
add_function(ag300_reload, 'ag300'); // 開課課表 
add_function(ag304_go_next, 'ag304'); // 班級課表
//add_function(ag222_go_next, 'ag304'); // 班級課表-教學綱要
add_function(ag402_reload, 'ag402'); // 班級人數
add_function(ag402_qry, 'ag402'); // 班級人數

// Untest function
add_function(ag450_reload, 'ag450');
add_function(go_qry, 'ag450');


/*
 * TODO LIST:
 * 	學務資訊查詢
 *	總務資訊查詢
 *  教務登錄作業
 *  學務登錄作業
 *  教務申請作業
 *  學務申請作業
 *  卓越教學
 *  其它作業
 *  校友功能
 *
 * DO LIST:
 * 教務資訊查詢：
 *  【學生】學籍資料        OK
 *  【學生】學期成績        OK, ag008, switch_yms
 *  【學生】期中預警資料     NaN
 *  【學生】試務資料        Not in time
 *  【學生】歷年成績        OK
 *  【選課】選課清單        Not in time
 *  【暑修】開課資訊        OK, ag112_go_next
 *  【系所】課程規劃表      OK, ag201_go_next
 *  【系所】課程資料        OK, original javascript
 *  【學生】個人課表        OK, ag222_go_next
 *  【教師】開課課表        !half, send error
 *  【系所】教室課表        OK, ag222_go_next
 *  【系所】班級課表        OK, ag304_go_next, ag222_go_next
 *  【系所】班級人數        OK
 *  未考試教室查詢         Untest
 *  【學生】通識課程查詢      OK, original done
 *  【學生】畢業預審報表(測試中) Not in time
 *  教師補(調)課查詢        NO DATA, white page
 *  學程修習狀況查詢        OK, original javascript
 *  可修學程建議查詢        NO DATA
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
