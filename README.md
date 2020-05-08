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

## Database

when debugging the API, run the database first

```bash
docker run \
  -d       \
  -p 5432:5432 \
  -e POSTGRES_USER=sa \
  -e POSTGRES_PASSWORD=passW0rd \
  -v postgresql:/var/lib/postgresql/data \
  postgres:12.2-alpine
```
