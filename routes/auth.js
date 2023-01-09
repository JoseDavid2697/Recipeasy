/*
*  Auth Routes
   host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fieldsValidator } = require('../middlewares/fields-validators');
const { createUser, userLogin, renewToken } = require('../controllers/auth');

const router = Router();

router.post(
    '/new',
    [ //middlewares
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('password', 'The password must have at least 8 caracters').isLength({min: 8}),
        fieldsValidator
    ],
    createUser);

router.post('/',
    [ //middlewares
        check('email', 'The email is required').isEmail(),
        check('password', 'The password must have at least 8 caracters').isLength({min: 8}),
        fieldsValidator
    ], 
    userLogin);

router.post('/renew', renewToken);

module.exports = router;