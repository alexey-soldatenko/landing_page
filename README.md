# landing_page
Пример простого одностраничного сайта.
В проекте использовались python3.5 и django 1.8.
На данном сайте есть возможность для клиента оставить свою заявку или выбрать такую функцию, как "Перезвоните мне". 
Все внесенные личные данные не хранятся в базе данных, а сразу же отправляются в письме к "менеджеру"-обработчику, который и будет связываться с клиентом.
Поэтому в проекте предусмотрено наличие 2-х электронных почт, одна - центральная, в качестве отправителя письма, а вторая - получателя, т.е. "менеджера"-обработчика.