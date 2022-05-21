const { User } = require("../models/index.js");

const UserController = {
  create(req, res) {
    let valid = true
    if (!req.body.username || !req.body.firstName || !req.body.lastName || !req.body.password) {
      valid = false
    }
    // if (!validateEmail(re.body.email)) {  // TODO: Function "validateEmail"
    //   valid = false;
    // }
    // TODO: User data: more validations
    if (!valid) {
      res.status(422)  // TODO: Ask Sofía about the correct status to send on "invalid data"
        .send({message: "Invalid data"});
        return;
    }

    req.body.role = "user";         // Assing role by default
    req.body.password += ":HASHED"  // TODO: Hash password with bycript
    req.body.active = true;
    User.create({ ...req.body })

      .then((user) =>
        res
          .status(201)
          .send({ message: "User was successfully created", user })
      )

      .catch(console.error);
  },
};

module.exports = UserController;
