# API

## baseURL

/api/v1


## login

POST /login
  {
    username
    password
  }

GET /logout

POST /register
  {
    username
    password
    email
  }


## recite

@auth
GET /recite?size=${size}

@auth
POST /recite
  {
    id
  }


## book

@auth
GET /book?page=${page}&size=${size}

@auth
POST /book
  {
    id
  }

@auth
DELETE /book
  {
    id
  }

## setting

@auth
PUT /setting
  {
    key
    value
  }
