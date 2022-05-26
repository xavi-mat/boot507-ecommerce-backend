"use strict";

const typeError = (err, req, res, next) => {
  console.log("typeError", err);
  try {
    let errors = err.errors.map((el) => el.message);
    const string = errors.join(" || ") + ` (Origin: ${err.origin})`;
    return res.status(400).send({ messages: string });
  } catch (error) {
    return res.status(400).send("ERROR");
  }
};

module.exports = { typeError };
