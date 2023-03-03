# API-DOCUMENTATION

## Data models
Database entites with their attributes (most all are string data type)

\(R\) =required ; (U) =unique ; (Bool) =boolean, (Date)=date(yyyy-mm-ddd)
#### Users
- _id - (auto generated from mongoDB, refered outside as `uId`)
- uName - R
- uEmail - R U
- uPassword - R (hashed password from bcrypt)
- uCity
- uPhone
- uWhatsapp
- uFacebook
- uInstagram
- timestamps (auto generated from mongoDB; `createdAt` & `updatedAt`)
#### Request
- _id - (auto generated from mongoDB, refered outside as `rId)` 
- pharmaceutical - R
- rCategory
- rDescription
- rExpDate - Date
- rProvince
- rDistrict
- rCity
- rIsComplete - R Bool
- rUrgency
- uId - R (foreign key _id from `user`)
- timestamps (auto generated from mongoDB; `createdAt` & `updatedAt`)
#### Admins
- aName - R
- aEmail - R U
- aPassword - R (hashing not implemented)
- timestamps (auto generated from mongoDB; `createdAt` & `updatedAt`)

## API routes
Base url: http://localhost:5000/

#### Users
```
http://localhost:5000/users/

user object template
{
    uName: , uEmail: , uPhone: , uCity: , uWhatsapp: , uFacebook, uInstagram
}
*also includes uPassword

all users information
GET http://localhost:5000/users/all
    return all users information

single user information via _id (uId)
GET http://localhost:5000/users/<_id>
    return the user information

add new user (! DO NOT USE this, use Auth signup routes instead)
POST http://localhost:5000/users/add
    return the new user information

update user via _id (uId)
PATCH http://localhost:5000/users/update/<_id>
    return the user information without the update (but its actually updated on DB)

delete user via _id (uId)
DELETE http://localhost:5000/users/delete/<_id>
    return the user information
```

#### Authentification
```
http://localhost:5000/users/

auth object template
{
    uName, uEmail, uPassword, uPasswordconfirm, uCity
}

signup new user
POST http://localhost:5000/users/signup
    return success: true + user information
    return success: false + errors
    (if uPassword!=uPasswordconfirm then error)

signin an existing user
POST http://localhost:5000/users/signin
    only require uEmail + uPassword
    return success: true + JWT token + user information
    return success: false + error
```

#### Request (medicine post)
```
http://localhost:5000/requests/

request object template
{
    pharmaceutical, rCategory, rDescription, rExpDate, rProvince, rDistrict, rCity, rIsComplete, rUrgency, uId
}

all requests
GET http://localhost:5000/requests/all
    return all request information + users

single request by _id (rId)
GET http://localhost:5000/requests/<_id>
    return the request information + user

all request by province & district
GET http://localhost:5000/requests/location/<province>/<district>
    return all request informatipn for that province and district + user

all request by province only
GET http://localhost:5000/requests/location/<province>
    return all request information for that province + user

add new request
POST http://localhost:5000/requests/add
    return the new request information

update request by _id (rID)
PATCH http://localhost:5000/requests/update/<_id>
    return the request information without the update (but its actually updated on DB)

delete request by _id (rID)
DELETE http://localhost:5000/requests/delete/<id>
    return the deleted request information
```





