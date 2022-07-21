const express = require('express')
const { nextTick } = require('process')
const router = express.Router()
let Students = require('../model/students')

router.get('/', (req, res) => {
    Students.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
	// res.send()
})

// mongoose methods
// create()
// findById()
// findIdAndUpdate()
// findOneAndRemove()


router.post('/create', (req,res, next) => {
    Students.create(req.body, (error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

router.get('/find/:id', (req,res) => {
    Students.findById(req.params.id, (error, data) =>{
        if(error){
            return error
        }else{
            res.json(data)
        }
    })
})

router.patch('/update/:id', (req,res, next) => {
    Students.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

router.delete('/remove/:id', (req,res) => {
    Students.findOneAndRemove(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = router
