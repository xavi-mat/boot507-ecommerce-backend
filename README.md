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

|method|endpoint|role|use|
|------|--------|--------------|---|
|POST  |`/users`|anyone|Register new user|
|POST  |`/users/login`|anyone|Login|
|GET   |`/users`|user|Get own data with orders|
|GET   |`/users/:id`|anyone|Get public data of user by UserId|
|GET   |`/users//avatar/:avatar`|anyone|Get public avatar of user by UserId|
|PUT   |`/users`|user|Update own data|
|DELETE|`/users/delete`|user|Logout|
|POST  |`/categories`|manager|Create new category|
|GET   |`/categories`|anyone|Get all categories list|
|GET   |`/categories/id/:id`|anyone|Get category by id|
|GET   |`/categories/name/:name`|anyone|Get category by name|
|PUT   |`/categories/:id`|manager|Update category by id|
|DELETE|`/categories/:id`|manager|Delete category by id|
|POST  |`/products`|manager|Create a new product|
|GET   |`/products/list`|anyone|Get all products|
|GET   |`/products/id/:id`|anyone|Get a product by id|
|GET   |`/products/name/:name`|anyone|Get a product by name|
|GET   |`/products/price/:price`|anyone|Get products by price|
|GET   |`/products/listPrice/desc`|anyone|Get all products ordered by price, descending|
|GET   |`/products/image/:image`|anyone|Get the image of a product|
|PUT   |`/products/:id`|manager|Update a product|
|DELETE|`/products/:id`|manager|Delete a product|
|POST  |`/orders`|user|Create new order|
|POST  |`/orders/product`|user|Add new product to own order|
|GET   |`/orders`|user|Get all own orders|
|GET   |`/orders/:id`|user|Get own order by id|
|PUT   |`/orders/product`|user|Update product in own order|
|DELETE|`/orders/:id`|user|Delete own order (TODO)|
|DELETE|`/orders/product/:id`|user|Delete product in own order (TODO)|
|POST  |`/reviews`|user|Create a new review of a product|
|GET   |`/reviews`|anyone|Get all reviews|
|GET   |`/reviews/byProduct/:id`|anyone|Get all reviews of a product|
|GET   |`/reviews//byUser/:id`|anyone|Get al reviews written by a user|
|PUT   |`/reviews/:id`|manager|Update a review|
|DELETE|`/reviews/:id`|user|Delete own review|
