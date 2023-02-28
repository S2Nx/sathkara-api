# API-DOCUMENTATION

## Data models
Database entites with their attributes (most all are string data type)

\(R\) =required ; (U) =unique ; (B) =boolean, (D)=date(yyyy-mm-ddd)
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
- rExpDate - D
- rProvince
- rDistrict
- rCity
- rIsComplete - R B
- rUrgency
- uId - R (foreign key _id from `user`)
- timestamps (auto generated from mongoDB; `createdAt` & `updatedAt`)
#### Admins
- aName - R
- aEmail - R U
- aPassword - R (hashing not implemented)
- timestamps (auto generated from mongoDB; `createdAt` & `updatedAt`)

## API routes




