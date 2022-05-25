'use strict';

const handleValidationError = (err, res) => {
    console.log(err);
    let errors = err.errors.map(el => el.message);
    const string = errors.join(' || ');
    return res.status(400).send({messages: string});
    // if(errors.length > 1) {
    //     // let chain = "";
    //     // for (let i = 0; i < errors.length; i++) {
    //     //   chain += errors[i] + " || ";
    //     // }
    //     // const string = chain.slice(0, -4);
    //     res.status(400).send({messages: string});
    // } else {
    //     res.status(400).send({messages: errors});
    // }
 }

const typeError = (err, req, res, next) => {
    const errOrigin = err.origin
    console.log("typeError", err);

    return handleValidationError(err, res);

    // if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
    //     return err = handleValidationError(err, res);
    // } else
    //     if (errOrigin === 'Post') {
    //         res.status(500).send('Hubo un problema a la hora de crear un Post');
    //     } else {
    //         res.status(500).send('Hubo un problema a la hora de crear un Usuario');
    //     }
    }

module.exports = { typeError }
