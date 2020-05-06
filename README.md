# docker-compose-demo

## Todo Api

### Build API Image

``` bash
cd TodoApi

docker build -t todo-api .
```

run the image

```bash
docker run -p 5000:80 --name todoapi todo-api
```

## Todo UI

### Build UI Image

```bash
cd TodoApp

docker build -t todo-app .
```

run the image

```bash
docker run -p 4200:80 --name todoapp todo-app
```
