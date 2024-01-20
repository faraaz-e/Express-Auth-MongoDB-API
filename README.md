#### Express-Auth-MongoDB-API

Users can be created and authenticated for secure CRUD operations on a contact list. The workflow involves user registration, login, and authorization to manage contacts securely using JSON Web Tokens (JWT).

#### Project Installation

- Clone this repository using `git clone <repo-url>`
- Use command `npm install`

#### Project Setup

- Create MongoDB Database and copy the connection string
- Create _.env_ in the root folder of the project

```env
    PORT=<port-number>
    CONNECTION_STRING=<connection-string>
    SECRET_ACCESS_TOKEN=<secret-access-token>
```

- Finally, run project using `npm run dev`

#### API Usage

> **Users**

1. Register User

**Endpoint:** `POST /api/v1/users/register`

```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "admin@123"
}
```

2. Login User

**Endpoint:** `POST /api/v1/users/login`

```json
{
  "email": "admin@example.com",
  "password": "admin@123"
}
```

3. Use the generated _Access Token_ from the above _login API_ for all the below APIs  
   In the Headers section in the API testing Client (eg. Postman),  
   _header_ : `Authorization`  
   _value_ : `Bearer <access-token>`

   _Note:_ Generated Token is set to expire in 15 mins. To renew the token use the Login User API.

4. Current logged-in User info

**Endpoint:** `GET /api/v1/users/current`

> **Contacts**

1. Get all contacts

**Endpoint:** `GET /api/v1/contacts/`

2. Get specific contact

**Endpoint:** `GET /api/v1/contacts/:id`

3. Create new contact

**Endpoint:** `POST /api/v1/contacts/`

```json
{
  "name": "Dexter",
  "email": "dexter@example.com",
  "phone": "01234567890"
}
```

4. Update existing Contact

**Endpoint:** `PUT /api/v1/contacts/:id`

```json
{
  "name": "Oswald"
}
```

5. Delete specific contact

**Endpoint:** `DELETE /api/v1/contacts/:id`
