### MVP

- Login functionality
- post posts
- delete/edit posts
- control view based on authorization

**icebox**

- play music
- customize backgrounds
- datamine customers
- Fav Fave List

### Database

- User

```sql
create table users(
    user_id serial primary key,
    email varchar (100),
    password text
)
```

- Post

```sql
create table posts (
    post_id serial primary key,
    user_id int references users(user_id),
    content varchar (250),
    create_at date
)
```

### Server

**DEPENDENCIES**

- express
- express-session
- massive
- dotenv
- bcrypt

**ENDPOINTS**

AUTH:

- app.post('/auth/login')
- app.post('/auth/register')
- app.delete('/auth/user')
- app.get('/auth/user')

POST:

- app.get('/api/post')
- app.post('/api/post')
- app.put('/api/posts/:post_id')
- app.delete(/api/posts/:post_id')

### Client

**DEPENDENCIES**

- axios
- react-router-dom
- redux
- react-redux
- redux-promise-middleware

**ROUTES**

- Landing (/)
- Register (/register)
- Dashboard (/dashboard)
- Profile

**FILE STRUCTURES**

- app.js
- app.css
- index.js
- reset.css
- dux/
  - store
  - reducer
- components/
  - landing.js / .css
  - register.js / .css
  - dashboard.js / .css
  - profile.js / .css
  - postcontainer.js / .css
  - post.js / .css
  - edit.js / .css
  - header.js / .css
  - authheader.js /.css
