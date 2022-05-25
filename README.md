# eCommerce - SoulWear

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Soul Wear</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The backend project will combine the knowledge acquired in the
node + express technologies, in addition to mysql/sequelize.
The student will have to make the presentation and defense of a diagram
explaining the relationships between the tables. The project will consist of an online store (e-commerce)

Use [this Link](https://docs.google.com/document/d/1yey2fRgu8OkH0T2EUfP3Svixxq7geW1HmxxoOExK6Go/edit#) to see the proyect requirements.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Node.js](https://node.org/)
- [React.js](https://reactjs.org/)
- [sequelize](https://sequelize.org/)
- [MySql](ttps://MySql.org/)
- [Postman](https://www.postman.com/)
- [JWT](https://jwt.io//)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

It would be advisable to follow the instructions, for a correct functioning of the API

### Used Packages

This is What we have Used for the Proyect

- npm

  ```
  npm init -y

  npm install express sequelize mysql2

  sequelize init
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/dubesor22/eCommerce-backEnd.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This is a list of Endpoints that you can use in postman to Test our Project.

```
 Endpoints

| method | endpoint                   | role    | use                                           |
| ------ | -------------------------- | ------- | --------------------------------------------- |
| POST   | `/users`                   | anyone  | Register new user                             |
| POST   | `/users/login`             | anyone  | Login                                         |
| GET    | `/users`                   | user    | Get own data with orders                      |
| GET    | `/users/:id`               | anyone  | Get public data of user by `id`               |
| GET    | `/users//avatar/:avatar`   | anyone  | Get public avatar of user by `id`             |
| PUT    | `/users`                   | user    | Update own data                               |
| DELETE | `/users/delete`            | user    | Logout                                        |
| POST   | `/categories`              | manager | Create new category                           |
| GET    | `/categories`              | anyone  | Get all categories list                       |
| GET    | `/categories/id/:id`       | anyone  | Get category by `id`                          |
| GET    | `/categories/name/:name`   | anyone  | Get category by name                          |
| PUT    | `/categories/:id`          | manager | Update category by `id`                       |
| DELETE | `/categories/:id`          | manager | Delete category by `id`                       |
| POST   | `/products`                | manager | Create a new product                          |
| GET    | `/products/list`           | anyone  | Get all products                              |
| GET    | `/products/id/:id`         | anyone  | Get a product by `id`                         |
| GET    | `/products/name/:name`     | anyone  | Get a product by name                         |
| GET    | `/products/price/:price`   | anyone  | Get products by price                         |
| GET    | `/products/listPrice/desc` | anyone  | Get all products ordered by price, descending |
| GET    | `/products/image/:image`   | anyone  | Get the image of a product                    |
| PUT    | `/products/:id`            | manager | Update a product                              |
| DELETE | `/products/:id`            | manager | Delete a product                              |
| POST   | `/orders`                  | user    | Create new order                              |
| POST   | `/orders/product`          | user    | Add new product to own order                  |
| GET    | `/orders`                  | user    | Get all own orders                            |
| GET    | `/orders/:id`              | user    | Get own order by `id`                         |
| PUT    | `/orders/product`          | user    | Update product in own order                   |
| DELETE | `/orders/:id`              | user    | Delete own order (TODO)                       |
| DELETE | `/orders/product/:id`      | user    | Delete product in own order (TODO)            |
| POST   | `/reviews`                 | user    | Create a new review of a product              |
| GET    | `/reviews`                 | anyone  | Get all reviews                               |
| GET    | `/reviews/product/:id`     | anyone  | Get all reviews of a product                  |
| GET    | `/reviews/user/:id`        | anyone  | Get al reviews written by a user              |
| PUT    | `/reviews/:id`             | manager | Update a review                               |
| DELETE | `/reviews/:id`             | user    | Delete own review                             |

```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] User registration using Bcrypt.
- [x] A User login + token + middleware.
- [x] That is capable of creating a CRUD.
- [x] At least one Many to Many and one One to Many relationship.
- [x] Use of seeders

Essential requirements of the project:

- [x] Use of branches with git, when the project is finished there should be two branches, the master or main and the develop.
- [x] Excellent README presentation.
      See the [COMPLETE LIST of requisites](https://docs.google.com/document/d/1yey2fRgu8OkH0T2EUfP3Svixxq7geW1HmxxoOExK6Go/edit#)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

This program is Open Source and anyone can use it, mention to its creators is appreciated.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Xavi - [gitHub](https://github.com/xavi-mat)

David - [gitHub](https://github.com/dubesor22)

Project Link: [Repo](https://github.com/your_username/eCommerce-backENd)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [x] Node and React usage
- [x] npm sequelize
- [x] middleware management
- [x] capable of creating a CRUD.
- [x]Many to Many relationship.
- [x] capable to create seeders
- [x] Better Management of Git, Using branches and Working at same time.
- [x] npm Knowledge whith several of its libraries

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

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
