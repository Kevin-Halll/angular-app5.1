const express = require('express')
const { nextTick } = require('process')
const router = express.Router()
let Account = require('../model/accounts_m')
let Student = require('../model/students')

router.get('/', (req, res) => {
    Account.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
// populate
router.get('/student-banking-info', (req, res) => {
    Account.find().populate({path:'studentId'}).exec((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.get('/student-banking-new', (req, res) => {
    Student.find().populate({path:'_id'}).exec((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.get('/student-banking-info/:id', (req, res, next) => {
    Account.studentId.find({studentId:req.params.id}).populate('studentId').exec((error,data) => {
        console.log(req.params.id);
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// mongoose methods
// create()
// findById()
// findIdAndUpdate()
// findOneAndRemove()


router.post('/create', (req,res, next) => {
    Account.create(req.body, (error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

router.get('/find/:id', (req,res) => {
    Account.findById(req.params.id, (error, data) =>{
        if(error){
            return error
        }else{
            res.json(data)
        }
    })
})

router.patch('/update/:id', (req,res, next) => {
    Account.findByIdAndUpdate({_id:req.params.id}, req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

router.delete('/remove/:id', (req,res) => {
    Account.findById({_id:req.params.id}, (err, info) => {
        Account.findOneAndRemove({_id:req.params.id}, (error, data) => {
            if(info == null) {
                console.log('item does not exist to delete');
                return
            }
            if(error){
                return next(error)
            }else{
                // console.log(info);
                console.log(req.params.id);
                res.json(data)
            }
        })

    })
})

module.exports = router
