const express = require('express');
const router = express.Router();

// User Model

const User = require('../../models/User');

// @router  GET api/users
// @desc    Get All users
// @access  Public 

router.get('/', (req, res) => {
    User.find()
        .sort({ username: 1 })
        .then(users => res.json(users))
});

router.post('/',(req, res) => {
    const newUser = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
})


router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({sucess: false}));
})




module.exports = router;