var RCookie = (function(){

	var set = function(name,value,Days = 30){
		// var Days = 30; 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	    document.cookie = name + '='+ escape (value) + ';expires=' + exp.toGMTString() + ';path=/'; 
	}

	var get = function(name){
		var arr,reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');
 
	    if(arr=document.cookie.match(reg))
	        return unescape(arr[2]); 
	    else 
	        return null; 
	}

	var delect = function(name){
		var exp = new Date(); 
	    exp.setTime(exp.getTime() - 1); 
	    var cval=getCookie(name); 
	    if(cval!=null) 
	        document.cookie= name + '='+cval+';expires='+exp.toGMTString(); 
	}

	return {
		set:set,
		get:get,
		delect:delect
	}
})();