# docker-compose-demo

## Todo Api

### Build Image

``` bash
cd TodoApi

docker build -t todo-api:latest .
```

run the image

```bash
docker run -p 5000:80 --name todoapi todo-api
```
