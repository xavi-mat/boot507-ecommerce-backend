'use strict';

const handleValidationError = (err, res) => {
    try {
        let errors = err.errors.map(el => el.message);
        const string = errors.join(' || ') + ` (Origin: ${err.origin})`;
        return res.status(400).send({ messages: string });
    } catch (error) {
        return res.status(400).send("ERROR");
    }
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
