
var setport     = -1;       //-p옵션을 통해 넣었던 포트번호가 있으면 그 번호를 넣어야 함; 없을 경우 -1
var openport    = -1;       //openport가 실패할 경우 시도할 처음 port 번호
var findport    = false;    //setport 혹은 쿠키값으로 먼제 port 찾을때 false;

var is64bit = (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1);


var objProduct  = {};
var openurl_add = "/launcher/" + strProductNm;  //고정(변경불가) "/launcher/xplatform", "/launcher/nexacro"

var debugmode = {
    debug: false,
    loglevel: "debug"
}; // loglevel debug, info, error
var console = window.console || {
    log: function() {}
}; // console 객체가 없는 IE 를 위한 처리 (IE8 이하)

/**
 *  TPL 프로그램 다운로드 시 function 정의
 */
// TPLSvc.exe 다운 받기
function download_TPLSvc(type, contents) {
    if (type == "newlanucher") {
        var downURL = strDownloadPath + "/" + strLauncherFileName;
        istalledMsg("TPLDownloadNewLauncher", contents, downURL);
        return downURL;
    
    } else {
        
        var downURL = strDownloadPath + "/xplatform/" + strSetupRuntimeName;
        istalledMsg("EngineDownload", contents, downURL);
        return downURL;
    }
}

/**
 * [TPL_Download description]
 * TPLSvc 프로그램 다운로드 
 */
function TPL_LauncherDownload(str) {
    var msg = "설치 되지 않았습니다.";
    if (str == "update") {
        msg = "업데이트 되었습니다.";
    }
    var contents = "TPLSvc가 " + msg + " TPLSvc를 다운로드 후 설치를 진행해 주시기 바랍니다."; //"Please "+msg+" TPLSvc Laucher \n than Plese refresh browser or close browser and Run again";
    document.location = download_TPLSvc("newlanucher", contents);
}

/**
 * [EngineDownload description]
 * Engine 다운로드 
 */
function EngineDownload() {
    var contents = "Engine 이 설치 되지 않았습니다. 다운로드 후 설치를 진행해 주시기 바랍니다."; //"Please Install engine \nthan close browser and run browser again";
    document.location = download_TPLSvc("engine", contents);
}

function istalledMsg(str, msg, url) {
    if (typeof(nexaCallBack) == "function") {
        nexaCallBack(str, msg, url);
    }
}

function fn_closeMessage() {
    if (!bEndClose) return;
    var contents = "<H1>모든 설치가 완료되었습니다. <br> 새로고침 또는 재접속바랍니다.</H1>";
    istalledMsg("close", contents);
}

/**
 * [TPLService 사용 예]
 * TPL Service 의 경우 local 통신을 하게 되며 TPL Service 모듈의 설치 여부는 최초 통신의 성공 여부를 통해 통신이 실패 할 경우 모듈 설치를 진행
 * TPL Service 는 Window OS(XP SP3 이상) 의 services 항목에 추가 되어 구동 되기 때문에 Window services 에 정상 등록 되지 않을 경우 사용이 불가능 할 수 있으며
 * TPL Service 에서 사용하고 있는 port 를 혹시라도 PC 에서 사용을 막는 작업을 할 경우 사용 제한이 생길 수 있습니다.
 */

/**
 *  [trace description]
 *  Debug mode 를 위한 trace function 정의
 */
var trace = function() {
    var msg = "";
    if (debugmode.debug) {
        var domText = document.getElementById('debugTextBox');
        if (domText) {
            domText.style.display = "block";
            msg += arguments[0];
            for (var i = 1, len = arguments.length; i < len; i++) {
                msg += ", " + arguments[i];
            }
            domText.value += msg + "\n";
            console.log(msg);
        }
    }
}

if (window.addEventListener) { //firefox, IE9, 파이어폭스, 오페라, 사파리, 크롬 전용
    window.addEventListener("load", function() {
        tpl_start();
    });
    window.addEventListener("error", function() {
        http_onerror();
    });
} else if (window.attachEvent) { //IE 전용
    window.attachEvent("onload", function() {
        tpl_start();
    });
    window.attachEvent("onerror", function() {
        http_onerror();
    });
}

/**
 * [sendData CallBack]
 * TPLSvc 통신준비 callback function Error 가 발생 할 경우 http_onerror function 에서 설치 유무 확인
 * 통신이 성공 할 경우 TPLSvc launcher version 확인 
 */
function httpCallBackReturn(result, gubun) {

    if (result.action) {
        //console.log("httpCallBackReturn:" + result.action);
        var action = result.action;
        if (action == "create") {
            setCookie("tplsvcopenport", openport, 14);
            if (debugmode.loglevel == "debug") {
                trace("createProcess", "after setCookie", "action : " + objProduct.action);
            }
            if (result.result == "success") {
                objProduct.action = 'check';
                objProduct.value = {
                    "getlauncherversion": {}
                };
                sendData(true);
            }
        }
        else if (action == "check") {
            var strLocLauncherVer = result.value["getlauncherversion"].productversion;
            
            var bUpdateCheck = fn_checkVersion(strLauncherVersion, strLocLauncherVer ,',');  //1,1,0,200		
            if (!bUpdateCheck) {
                console.log("업데이트 진행");
                TPL_LauncherDownload("update");
            } else {
                console.log("업데이트 진행 안함");
                istalledMsg("newlanucher");
                objProduct.action = "method";
                objProduct.value = {
                    "getengineversion": {
                        "param": [strEnginesetupkey],
                        "result": null
                    }
                };
                sendData(true);
            }

        } else if (action == "setproperty") {
            if (!bEngineCheck) {
                return;
            }
            if (typeof(bMakeShortcut) == undefined) {
                do_method('makeshortcut'); // 단축아이콘 생성
                sendData(true);
                return;
            } else if (bMakeShortcut == true) {
                do_method('makeshortcut'); // 단축아이콘 생성
                sendData(true);
                return;
            } else if (typeof(bAddWebInfo) !== undefined && bAddWebInfo === true) {
                do_method('addWebInfo'); // 단축아이콘 생성
                sendData(true);
                return;
            } else {
                do_method('launch'); // nexacro 실행
                sendData(true);
            }
        } else if (action == "method") {
            if (result.result == "success") {
                if (result.value.makeshortcut) {
                    if (typeof(bAddWebInfo) !== undefined && bAddWebInfo === true) {
                        do_method('addWebInfo'); // 단축아이콘 생성
                        sendData(true);
                    } else {
                        do_method('launch'); // nexacro 실행
                        sendData(true);
                    }
                } else if (result.value.isexistshortcut) {} else if (result.value.download) {} else if (result.value.addWebInfo) {
                    do_method('launch'); // nexacro 실행
                    sendData(true);
                } else if (result.value.getengineversion) {
                    
                    var rtnEngineVer = result.value.getengineversion.result;
                   
                    var bUpdateCheck = fn_checkVersion(strEngineVersion, rtnEngineVer, '.');		//17.1.1.200
                    if (!bUpdateCheck) {

                        do_property('setproperty', 'basic');
                        sendData(true);
                        do_method('downloadresource'); // SetupResource.zip 다운로드													
                        sendData(true);
                        EngineDownload();

                    } else {
                        bEngineCheck = true;
                        istalledMsg("nexacro");
                        do_property('setproperty', 'basic'); // nexacro 구동을 위한 기본 속성 설정
                        sendData(true);

                        do_method('makeshortcut'); // 단축아이콘 생성
                        do_method('launch'); // nexacro 실행
                    }

                } else if (result.value.deleteshortcut) {} else if (result.value.launch == true || result.value.launch == "ok") {
                    setTimeout(function() {
                        tpl_finish();
                    }, 1000);
                }
            } else {
                trace("error======================");
                return http_onerror();
            }
        } else if (action == "destroy") {
            fn_closeMessage();
        }
    } else {
        return http_onerror();
    }
}


/**
 * [sendData CallBack]
 * TPLSvc 통신준비 callback function Error 가 발생 할 경우 http_onerror function 에서 설치 유무 확인
 * 통신이 성공 할 경우 TPLSvc launcher version 확인 
 */
function httpCallBack(__ajax) {
    return function() {
        if (!__ajax) {
            trace("httpCallBack _ahax error-----");
            return;
        }
        var ajax_handle = __ajax;
        if (ajax_handle.readyState == 4) {
            if (ajax_handle.status == 200) {
                var data = ajax_handle.responseText;
                if (launcher_response(data)) {
                    if (debugmode.loglevel == "debug") {
                        trace(data);
                    }
                    var result = JSON.parse(data);
                    httpCallBackReturn(result);
                }
            } else {
                return http_onerror();
            }
        } else if (ajax_handle.readyState === 0) {
            if (debugmode.loglevel == "debug") {
                trace("createProcess function Error XMLHttpRequest status : " + ajax_handle.status);
            }
            return http_onerror();
        } else if (ajax_handle.readyState == undefined) { // XDomainRequest
            var data = ajax_handle.responseText;
            if (launcher_response(data)) {
                if (debugmode.loglevel == "debug") {
                    trace(data);
                }
                var result = JSON.parse(data);
                httpCallBackReturn(result);
            } else {
                return http_onerror();
            }
        }
    };
}

/**
 *  [tpl_start description]
 *  TPLService 와 통신을 하기 위한 준비 function 
 */
function tpl_start() {
    //생성 및 id 할당
    trace("tpl start", "생성 및 id 할당");
    //objProduct.platform = 'nexacro'; //필수 세팅
    objProduct.platform = strProductNm; //필수 세팅
    
    
    objProduct.action = 'create'; //필수 세팅
    //objProduct.id = '';            // 통신이 성공하면 정보가 채워지므로 생략해도 무방

    if (setport > 0) {
        openport = setport;
    } else {
        openport = parseInt(getCookie("tplsvcopenport"), 10) | 0;
    }
    if (openport > 0) {
        findport = false;
    } else {
        findport = true;
        openport = minport;
    }
    sendData(true); // sendData(openpost, is_create, resultCallback)
}


function tpl_finish() {
    //종료 ==> 종료는 생략할 수 있으나 런처 서비스에서 관련 정보를 일정 시간 동안 가지고 있지 않게 하려면 호출해야 함;
    if (debugmode.loglevel == "debug") {
        objProduct.action = 'destroy';
    }
    sendData(true);
}

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
}

function getCookie(name) {
    var nameOfCookie = name + '=';
    var x = 0;
    var endOfCookie;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) {
                endOfCookie = document.cookie.length;
            }
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(' ', x) + 1;
        if (x == 0) {
            break;
        }
    }
    return '';
}

function sendData(openpost, resultCallback) {
    var xhrObj = {};
    var __ajax;
    if (window.XDomainRequest) {
        xhrObj.handle = new XDomainRequest();
        xhrObj.reqType = 2;
    } else if (window.XMLHttpRequest) {
        xhrObj.handle = new XMLHttpRequest();
        xhrObj.reqType = 1;
    }
    __ajax = xhrObj.handle;
    if (xhrObj == null) {
        trace("It can not create XMLHttpRequest or XDomainRequestx");
        return null;
    }

    var callback = httpCallBack(__ajax);
    /*
	  if(resultCallback == "aaaa") {
		  callback = httpCallBack2222(__ajax);
	  }
	  */
    if (xhrObj.reqType != 2) {
        __ajax.onreadystatechange = callback;
    } else {
        __ajax.onload = callback;
        __ajax.onerror = http_onerror;
        __ajax.ontimeout = http_ontimeout;
    }

    var jsonData;
    jsonData = JSON.stringify(objProduct);
    var timestamp = "/" + new Date().getTime(); //cache 방지용
    var send_url = openurl + ":" + openport + openurl_add + timestamp;

    if (xhrObj.reqType != 2) {
        if (openpost) {
            __ajax.open("POST", send_url, "true");
            __ajax.send(jsonData);
        } else {
            __ajax.open("GET", send_url + "?" + jsonData, "true");
            __ajax.send();
        }
    } else {
        if (openpost) {
            __ajax.open("POST", send_url);
            __ajax.send(jsonData);
        } else {
            __ajax.open("GET", send_url);
            __ajax.send();
        }
    }
    __ajax = null;
}

function http_ontimeout() {
    if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
        trace("http_ontimeout");
    }
    return http_onerror();
}

function http_onerror() {
    if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
        trace("http_onerror ", "first line", "action : " + objProduct.action, "oepnport : " + openport);
    }

    if (objProduct.action == 'create') {
        var isAttempt = localStorage.getItem("isAttempt");
        if (isAttempt == null || isAttempt == "error") {
            //localStorage.setItem("isAttempt", "ok"); // TPLSvc 파일 다운로드 flag 값 : 설치전까지 자동다운되도록 수정 : mkn - 2020.02.10
            TPL_LauncherDownload();
        } else {
            if (findport == false) {
                if (setport > 0) {
                    setport = 0;
                    openport = parseInt(getCookie("tplsvcopenport"), 10) | 0;
                    if (openport > 0) {
                        sendData(true);
                        return;
                    }
                }
                openport = minport;
            } else {
                openport++;

            }
            findport = true;

            if (openport <= maxport) {
                sendData(true);
            } else {
                localStorage.setItem("isAttempt", "error");
                if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
                    trace("프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");
                }
                istalledMsg("error", "프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");
            }
        }
    } else {
        istalledMsg("error", "[Error] action : " + objProduct.action + "oepnport : " + openport);
    }
}

function launcher_response(result) {
    if (result.length <= 0) {
        return false;
    }
    try {
        var objResult = JSON.parse(result);
        //var objResult = eval('(' + result + ')');
        if (objResult.result == "success" && objResult.id.length > 0) {
            objProduct = objResult;
            return true;
        } else {
            if (debugmode.loglevel == "debug" || debugmode.loglevel == "error")
                trace("launcher_response error msg", objResult.result);
            return false;
        }
    } catch (e) {
        if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
            trace("launcher_response : " + e.message)
            return false;
        }
    }
}

/**
 * 속성 및 메소드를 가져오기 위해서느 json 형식으로 값을 전달 후 json 으로 값을 받을 수 있습니다.
 * TPlSvc 의 proeryt 값을 가져오기 위한 셋팅 - json 형식으로 값을 전달 후 json 형식으로 값을 전달 받음
 * @param  {[action string]}
 * @param  {[action_sub string]}
 * @return 
 */
function do_property(action, action_sub) {
    if (action == 'setproperty') { //property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
        objProduct.action = 'setproperty';
        if (action_sub == 'basic') {
            
            objProduct.value = {
                "key"               : strKey,
                "xadl"              : strStartFile,
                "splashimage"       : strSplashimage,
                "componentpath"     : strComponentPath,
                "loadingimage"      : strLoadingimage,
                "globalvalue"       : strGlobalvalue,
                "onlyone"           : bOnlyone,			
                "splashmessage"     : strSplashmessage,				 
                "version"           : strProductVersion,
                "enginesetupkey"    : strEnginesetupkey,	 
                "commthreadcount"   : 3,
                "errorfile"         : strErrFile,                            
                "showiniterror"     : false,
                "usewininet"        : true  
            };
            
            
        }
    } else if (action == 'getproperty') {
        objProduct.action = 'getproperty'; //property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
        
        objProduct.value = {
            "key"               : "",
            "xadl"              : "",
            "componentpath"     : "",
            "cachedir"          : "",
            "splashimage"       : "",
            "loadingimage"      : "",
            "commthreadwaittime": 0,
            "version"           : "",
            "commthreadcount"   : 0,
            "errorfile"         : "",
            "globalvalue"       : "",
            "onlyone"           : bOnlyone,
            "showiniterror"     : false,
            "usewininet"        : true,
            "enginesetupkey"    : "",
            "splashmessage"     : ""  
        };
        
        
    } else {
        return;
    }
}

/**
 * @param  {[action string]}
 * @return about:blank
 */
function do_method(action) {
    objProduct.action = 'method';

    //trace(">>>>>>>>>>>>>>do_method","action=",action);
    if (action == 'makeshortcut') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
        objProduct.value = {
            "makeshortcut": {
                "param": [strWallpapericonNm, strWallpapericon, "", strWallpaperposition, false]
            }
        };
    } else if (action == 'launch') {
        //method 실행 ==> action = 'method' value = {"method명" :  };
        objProduct.value = {
            "launch": true
        };
    } else if (action == 'isexistshortcut') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
        objProduct.value = {
            "isexistshortcut": {
                "param": [strWallpapericonNm, "startmenu", true],
                "result": null
            }
        };
    } else if (action == 'downloadresource') {
        objProduct.value = {
            "downloadresource": {
                "param": [strSetupResourcePath] //SetupResource.zip 존재하는 경로
            }
        };

    } else if (action == 'download') {
        //method 실행 ==> action = 'method' value = {"method명" : };
        objProduct.value = {
            "download": null
        };
    } else if (action == 'addWebInfo') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
        objProduct.value = {
            "addWebInfo": {
                "param": [window.document.cookie]
            }
        };
    } else if (action == 'getengineversion') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
        objProduct.value = {
            "getengineversion": {
                "param": [strEnginesetupkey],
                "result": null
            }
        };
    } else if (action == 'deleteshortcut') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
        objProduct.value = {
            "deleteshortcut": {
                "param": [strWallpapericonNm, "startmenu", true],
                "result": null
            }
        };
    } else {
        return;
    }
}

function get_event(action) {
    objProduct.action = 'event';
    if (action == 'error') {
        //get event info  ==> action = 'event' value = {"event명" : {...}};
        if (add_value) {
            objProduct.value = '{ "error": { "code": 0, "message": "" } }';
        } else {
            objProduct.value = {
                "error": {
                    "code": 0,
                    "message": ""
                }
            };
        }
    } else {
        return;
    }

    sendData(true);
}


/**
 * [fn_checkVersion]
 * 런처 버전 비교 로직 추가 - 2020.02.06 추가(versionB(local)이 낮으면 false)
 */
function fn_checkVersion(versionA, versionB, delimiter) {

    let compareResult = true;

    versionA = versionA.split(delimiter);
    versionB = versionB.split(delimiter);

    const length = Math.max(versionA.length, versionB.length);

    for (let i = 0; i < length; i += 1) {
        const a = versionA[i] ? parseInt(versionA[i], 10) : 0;
        const b = versionB[i] ? parseInt(versionB[i], 10) : 0;

        if (a > b) {
            compareResult = false;
            break;
        }
    }
    return compareResult;
}