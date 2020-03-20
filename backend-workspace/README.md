# json-server
### cài đặt: 
```bash
npm install -g json-server
```

### Hướng dẫn
- Step 1: Tạo file __database.json__
```json
{
    "students": [{"id": 1, "name": "Iron Man", "date_of_bird": "2000-01-18"}],
}
```
- Step 2: chạy server vừa tạo
```bash
json-server --watch --port 3000 database.json
# nó sẽ chạy trên server nè
# http://localhost:3000
```
- Step 3: truy vấn API
```text
### GET ###
1. get all: http://localhost:3000/users
2. truy vấn: http://localhost:3000/users?name=Shona
3. full text search: http://localhost:3000/users?q=sona
4. pagination http://localhost:3000/users?_limit=5&_page=2
5. order dữ liệu http://localhost:3000/users?_sort=id&_order=DESC

### POST ###
http://localhost:3000/users
body-json: { "id": 1, "name": "John"}

### DELETE ###
http://localhost:3000/users /1

### PUT ###
http://localhost:3000/users/2 
body-json: { "id": 1, "name": "John"}
```