const { request } = require('express')
const User = require('../models/User')

module.exports = (req,res)=>{
    User.create(req.body).then(()=>{
        console.log("User registerd successfully!")
        res.redirect('/employee')
    })
    .catch((error)=>{
        if(error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data',req.body)
            return res.redirect('/employee')
        }
})
}