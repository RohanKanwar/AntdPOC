const express = require('express');
const router = express.Router();
const User = require('../../model/user');
const bcrypt = require('bcrypt');
const token = require('../../middleware/token');
const mailsender = require('../../middleware/email');

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

router.post("/sendOTPtoRegisteredEmail", async (req, res, next) => {
    const emailid = req.body.email_address;
    try {
      let result = await User.findOne({ email_address: emailid });
  
      if (!result)
        return res.status(404).json({
          message: "Email address is not linked to any account"
        });
      else {
        otp = Math.floor(Math.random() * 9999 + 1000);
  
        mailsender(otp, emailid)
          .then(() => {
            res.status(200).json({
              message: "Email sent for verification"
            });
          })
  
          .catch(err => {
            console.log(err);
            next(err);
          });
      }
    } catch (err) {
      next(err);
    }
  });

  router.post("/resetpassword/", async (req, res, next) => {
    try {
      let result = await User.findOne({ email: req.body.email });
      if (!result)
        return res.status(404).json({
          message: "No account linked to the provided email address"
        });
      else {
        await User.updateOne(
          { email: req.body.email },
          {
            $set: {
              name: result.name,
              password: bcrypt.hashSync(req.body.password, 10),
              email: result.email,
              isAdmin: result.isAdmin
            }
          }
        );
        res.status(200).json({
          message: "Reset Password Successfully"
        });
      }
    } catch (err) {
      next(err);
      console.log(err);
    }
  });

  router.post("/otpverification/", async (req, res, next) => {
    try {
      let userotp = req.body.otp;
  
      if (!userotp) {
        return res.status(404).json({
          message: "Please provide an OTP"
        });
      }
      if (userotp == otp) {
        return res.status(200).json({
          message: "OTP verified"
        });
      } else {
        return res.status(500).json({
          message: "Incorrect OTP"
        });
      }
    } catch (err) {
      next(err);
    }
  });  

module.exports = router