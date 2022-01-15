## Documentation

Чтобы получить валидный адрес, собираете его из частей:

1) Это адрес сервера на который вы стучитесь:
> http://194.67.110.179:5000/

2) Путь к API
> /api/

3) Выбираете нужный для запроса обработчик
> /getversions

В ИТОГЕ у вас получается адрес вида http://194.67.110.179:5000/ + /api/ + /getversions
= http://194.67.110.179:5000/api/getversions

Если вы зайдёте по этому адресу, то сможете увидеть json-ответ наглядно, однако для работы нужно будет работать непосредственно с GET,POST,PATCH, etc запросами.

ENDPOINTS

#1
a) GET запрос возвращает все текущие версии API
b) Получение конкретной версии(отключено)

>"/api/getversions", "/api/getversion/<string:id>"


#2
a) GET запрос возвращает все текущие эндпоинты

> "/api/getendpoints"


#3
a) GET запрос возвращает всех пользователей которые есть в базе, можно получить одного по id
b) POST запрос добавляет нового пользователя, 
пример(curl http://194.67.110.179:5000/api/users -d "name=Kiril" -d "lastname=Zlakov" -d "password=1111111" -X POST -v)

>"/api/users", "/api/user/<string:id>"


#4
a) GET запрос возвращает все группы, можно получить одну по group_name
b) POST запрос добавляет новую группу, 
пример(curl http://194.67.110.179:5000/api/groups -d "name=the_group" -d "lang=eng" -d "level=2" -d "numbers=8" -d "action=test1212" -X POST -v)

>"/api/groups", "/api/group/<string:group_name>"


#5
a) GET запрос возвращает все домашние задания, можно получить одно по id
b) POST запрос добавляет новое домашнее задание, 
пример(curl http://194.67.110.179:5000/api/hometasks -d "description=SomeDescription" -d "name=TaskName1" -d "duedate=12.12.23" -d "link=Link111" -d "action=YES|NO" -X POST -v)

>"/api/hometasks", "/api/hometasks/<string:id>"
