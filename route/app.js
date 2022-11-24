require('dotenv').config() //importing the env file
const express = require('express') //express is framework for nodejs{backend prog lang}
const { search, index, result } = require('../controller/app')  //importing the controller folder
const router = express.Router()// making use of the router method

router.route('/search').get(search)// using the get method for the search route
router.route('/index').get(index)
router.route('/result').get(result)

module.exports = router