const express = require('express')
const router  = express.Router()
const {getMe,loginUsers,registerUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/',protect,registerUser)


router.post('/login',protect,loginUsers)

router.get('/me',protect,getMe)





module.exports =router