function httpRequestAsync(url, method, headers, data, callback) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open(method, url, true); // true for asynchronous
    
    xmlHttp.withCredentials = true;

    xmlHttp.onload = function() {
        if (xmlHttp.readyState === 4)
            callback(xmlHttp.status, xmlHttp.responseText);
    };

    xmlHttp.ontimeout = function () {
        console.log("timeout");
        console.log(url);
        console.log(data);
    };

    if (headers !== null) {
        for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
                xmlHttp.setRequestHeader(header, headers[header])
            }
        }
    }

    xmlHttp.timeout = 20000;

    xmlHttp.send(data);
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function crypt(str, key){
    var newstr = '';
  
    for(var i=0; i < str.length; i++) {
      var char = str.charCodeAt(i) ^ key.charCodeAt(i);
      newstr += String.fromCharCode(char);
    }
  
    return newstr;
  }

function getVMList(url, callbackSuccess, callbackError) {
    function parseVMs(status, text) {
        if (status !== 200) {
            resp = JSON.parse(text);
            callbackError(resp['reason'], resp['human_reason']);
        } else {
            try {
                var data = JSON.parse(text);
                callbackSuccess(data['list']);
            } catch (err) {
                console.log(err);
            }
        }

    }

    httpRequestAsync(
        url + "vm",
        "GET",
        null,
        null,
        parseVMs
    );
}