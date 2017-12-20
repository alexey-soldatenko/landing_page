function getCookie(name){
	/* получение значения куки по её имени*/
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function ajax_request_form(mode){
	/* функция передачи и обработки ajax-запроса пользователя*/
	if (mode == 'phone'){
		document.getElementById('wrapper2').style.display = 'none';

		var form = document.forms.phone_form;

		var name = form.elements.name.value;
		var phone = form.elements.phone.value;

		var data = "name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone) + "&mode=0";
	}
	else if (mode == 'email'){
		document.getElementById('wrapper').style.display = 'none';

		var form = document.forms.email_form;

		var name = form.elements.name.value;
		var phone = form.elements.phone.value;
		var email = form.elements.email.value;

		var data = "name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone) + "&email=" + encodeURIComponent(email) + "&mode=1";
	}
	// блок вывода сообщения
	var message_block = document.getElementById('message_block');
			message_block.style.display = 'block';
			var message_text = document.getElementById('message_text');
			message_text.innerHTML = "Отправка сообщения...";


	// ajax-запрос
	var httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', "/user_request", true);

	var csrftoken = getCookie('csrftoken');

	httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	httpRequest.setRequestHeader('X-CSRFToken', csrftoken);

	httpRequest.onreadystatechange = function(){
		if (httpRequest.readyState == 4 && httpRequest.status == 200){
			var answer = httpRequest.responseText;

			var message_block = document.getElementById('message_block');
			message_block.style.display = 'block';
			var message_text = document.getElementById('message_text');
			message_text.innerHTML = answer;
			
			// убрать блок сообщения через 5 сек.
			setTimeout(function(){
				document.getElementById('message_block').style.display = 'none'
			}, 5000);
		}
	};
	httpRequest.send(data);

}
