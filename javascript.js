// Read cookie
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(' ' + c_name + '=');
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + '=');
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf('=', c_start) + 1;
        var c_end = c_value.indexOf(';', c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

// Set cookie
function setCookie(c_name, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? '' : '; expires='+exdate.toUTCString());
    document.cookie = c_name + '=' + c_value;
}

// Fire Floodlight
function floodlight(src, type, cat){
    // Build floodlight
    var axel = Math.random() + '';
    var a = axel * 10000000000000;
    var fl_url = 'https://fls.doubleclick.net/activityi;src=' + src + ';type=' + type + ';cat=' + cat + ';ord=' + a + '?';
    var fl_iframe = document.createElement('iframe');
    fl_iframe.src = fl_url;
    fl_iframe.width = '1';
    fl_iframe.height = '1';
    fl_iframe.style = 'display: none;'
    // Append Floodlight
    document.body.appendChild(fl_iframe);
}

$(document).ready(function(){
    // Check if new or repeated purchase
	if(getCookie('purchase') != '1'){ // New purchase
        // Fire Floodlight for new purchase
        floodlight(12345, 'type0', 'cat0');
        // Set "purchase" cookie with expiration 1460 days
        setCookie('purchase', '1', 1460);
	}
    else{ // Repeated purchase
        // Fire Floodlight for repeated purchase
        floodlight(67890, 'type1', 'cat1');
    }
});
