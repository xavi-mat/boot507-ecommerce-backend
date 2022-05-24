# eCommerce - SoulWear

## Create tables from console:
```
// COMMANDS ON CONSOLE TO CREATE MODELS

sequelize model:generate --name User --attributes username:string,firstName:string,lastName:string,email:string,password:string,role:enum,birthDate:date,gender:enum,active:boolean

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Product --attributes name:string,price:float,description:string,CategoryId:integer,active:boolean

sequelize model:generate --name Order --attributes date:date,status:enum,UserId:integer

sequelize model:generate --name Detail --attributes OrderId:integer,ProductId:integer,quantity:integer,price:float

sequelize model:generate --name Review --attributes UserID:integer,ProductId:integer,content:string,starts:integer,active:boolean
```

Manually add the ENUM values:
```js
// Users
role: DataTypes.ENUM('user', 'premium', 'seller', 'manager', 'admin'),
gender: DataTypes.ENUM("M", "F"),

// Orders
status: DataTypes.ENUM("open", "paid", "sent", "delivered", "cancelled"),


```

After the creation of models, add associations in the `models` folder:
```js
User.hasMany(models.Order);
User.belongsToMany(models.Product, { through: models.Review });

Category.hasMany(models.Product);

Product.belongsTo(models.Category);
Product.belongsToMany(models.Order, { through: models.Detail });

Order.belongsTo(models.User);
Order.belongsToMany(models.Product, { through: models.Detail });
Order.belongsToMany(models.User, { through: models.Review });

Detail.belongsTo(models.Order);
Detail.belongsTo(models.Product);

```


```
sequelize db:drop
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

## Endpoints

|method|endpoint|
|---|---|
|POST  |  /users/|
|GET   |  /users/|
|PUT   |  /users/|
|DELETE|  /users/|

POST    /users/
GET     /users/
PUT     /users/
DELETE  /users/

POST    /categories/
GET     /categories/
PUT     /categories/
DELETE  /categories/

POST    /products/
GET     /products/
PUT     /products/
DELETE  /products/

POST    /orders/
GET     /orders/
PUT     /orders/
DELETE  /orders/

POST    /reviews/
GET     /reviews/
PUT     /reviews/
DELETE  /reviews/


```