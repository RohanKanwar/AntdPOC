const express = require('express');
const router = express.Router();
const User = require('../../model/user');
const bcrypt = require('bcrypt');
const token = require('../../middleware/token');

router.post('/new', async(req, res) => {
    try {
        let result = await User.findOne({email_address: req.body.email_address});
        if(result !== null) {
            return res.status(400).json({
                message: 'Email is already registered'
            })
        }
        else {
            const data = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email_address: req.body.email_address,
                contact_number: req.body.contact_number,
                location: req.body.location,
                name_of_institution: req.body.name_of_institution,
                institute_type: req.body.institute_type,
                role_in_institution: req.body.role_in_institution,
                website_link: req.body.website_link,
                password: bcrypt.hashSync(req.body.password, 10),
            })
            await data.save();
            return res.status(200).json({
                data: data,
                message: 'User registered successfully'
            })
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/login', async(req, res) => {
    try {
        let user = await User.findOne({email_address: req.body.email_address});
        if(!user) {
            return res.status(200).json({
                message: 'Invalid Email'
            })
        }
        else if(!(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(200).json({
                message: 'Invalid Password'
            })
        } else {
            global.usertoken = token.generate({
                email_address: user.email_address,
                password: user.password
            })
            res.status(200).json({
                message: 'Logged In Successfully',
                token: usertoken
            })
        }
    } catch(err) {
        console.log(err)
    }
})

module.exports = router