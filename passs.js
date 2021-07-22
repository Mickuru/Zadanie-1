function validatePassword() {
	  /*Функция валидации пароля.Ошибка изначально скрыта, но если вводиться не валидный пароль, ошибка отображаеться на экране. Какая из ошибок отображаеться зависит от введенного пароля */
    var p = document.getElementById('pass1').value;
	var errAmount1 = document.getElementById('errAmount');
	var errUpReg1 = document.getElementById('errUpReg');
	var errLowReg1 = document.getElementById('errLowReg');
	var errNumber1 = document.getElementById('errNumber');
	var errSpec1 = document.getElementById('errSpec');
      
	  errAmount1.style.display = "none";
	  errLowReg1.style.display = "none";
	  errNumber1.style.display = "none";
	  errSpec1.style.display = "none";
	  errUpReg1.style.display = "none";
    if (p.length < 6) {
       errAmount1.style.display = "block"; 
    }
    if (p.search(/[a-z]/) < 0) {
       errLowReg1.style.display = "block"; 
	}
	if (p.search(/[A-Z]/) < 0) {
        errUpReg1.style.display = "block"; 
    }
    if (p.search(/[0-9]/) < 0) {
       errNumber1.style.display = "block"; 
	}
	if (p.search(/(?=.*[!@#$%^&*])/) < 0) {
        errSpec1.style.display = "block"; 
    }
	validateEmail();
    return true;
}
    /*Функция валидации email. Работает так же как и валидация пароля. Для валидации использвется  регулярное выражение: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ */
	function validateEmail() {	
	var emailString = document.getElementById('email_field').value;	
	var emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var emailValidationError = document.getElementById('errInvalidEmail');
	emailValidationError.style.display = "none";
	if(!emailRegex.test(emailString)) {
		emailValidationError.style.display = "block";
	} 
	return true;
}

/* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }
	/* функция получения текущей даты и времени */
function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }
/* Функция распознавания браузера IE */
function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    }
    else  // Если другой браузер вернется 0. Если не работает разрешить IE отправку всплывающих окон. 
    {
        alert('otherbrowser');
    }

    return false;
}
