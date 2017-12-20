from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from datetime import datetime
from django.core.mail import send_mail

def show_page(request):
	return render(request, 'main.html')

def person_request(request):
	''' функция обработки запросов пользователей'''
	if request.is_ajax() and request.method == 'POST':

		mode = request.POST['mode']
		#почта центра отправления и почта обработчика сообщений
		acceptor_email = 'acceptor@gmail.com'
		central_email = 'central@gmail.com'

		if mode == '0':
			#форма заказа звонка
			name = request.POST['name']
			phone = request.POST['phone']
			date = datetime.now()

			message = render_to_string('phone_order.html', {'name':name, 'phone': phone, 'message_date': date})
			mail_subject = "Новый запрос от клиента! Срочно!"

		elif mode == '1':
			#форма оставки заявки клиента
			name = request.POST['name']
			phone = request.POST['phone']
			email = request.POST['email']
			date = datetime.now()

			message = render_to_string('email_order.html', {'name':name, 'phone': phone, 'message_date': date, 'email':email})
			mail_subject = "Новый запрос от клиента!"

		send_mail(
				mail_subject,
				message,
				central_email,
				[acceptor_email],
				html_message = message
				)
		return HttpResponse("Благодарим за Вашу заявку. Наш менеджер скоро свяжется с Вами.")


