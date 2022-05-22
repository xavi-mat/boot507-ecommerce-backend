const { User } = require("../models/index.js");

const UserController = {
  create(req, res) {
    let valid = true
    if (!req.body.username || !req.body.firstName || !req.body.lastName || !req.body.password) {
      valid = false
    }

    // TODO: Function "validateEmail"
    // if (!validateEmail(re.body.email)) {
    //   valid = false;
    // }

    // TODO: User data: more validations

    if (!valid) {
      // TODO: Ask Sofía about the correct status to send on "invalid data"
      res.status(422)
        .send({message: "Invalid data"});
        return;
    }

    req.body.role = "user";         // Assing role by default
    req.body.password += ".HASH"    // TODO: Hash password with bycript
    req.body.active = true;
    User.create({ ...req.body })
      .then((user) =>
        res
          .status(201)
          .send({ message: "User was successfully created", user })
      )

      .catch(console.error);
  },

  login(req, res) {
    req.body.password += ".HASH"  // TODO: Hash password with bycript
    User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(result=> {
        if (result) {
          // TODO: Cretate a real JWT:
          const jwt =  "JWT code";
          res.send({ message: "Login successfull", id:result.id, jwt });
        } else {
          res.send({ message: "Login failed" });
        }
      })
  }
};

module.exports = UserController;
