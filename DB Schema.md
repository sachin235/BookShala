## DB Schema

- User Table

```
 {
    id(user_id): Integer, Primary Key
    username: String, Unique
    email: String
    password: String
 }
```

- Product Table

```
 {
    id(book_id): Integer, Primary Key
    username(user who added): String
    name(book_name): String
    price: Integer
    company(author): String
    avatar(Image): file
 }
```

- Cart Products Table

```
 {
    id(cart_id): Integer, Primary Key
    username(user who added): String
    name(book_name): String
    price: Integer
    company(author): String
    avatar(Image): file
 }
```
