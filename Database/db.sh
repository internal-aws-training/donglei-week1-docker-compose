#!/bin/sh

docker run \
  -d       \
  -p 5432:5432 \
  -e POSTGRES_USER=sa \
  -e POSTGRES_PASSWORD=passW0rd \
  -v postgresql:/var/lib/postgresql/data \
  postgres:12.2-alpin