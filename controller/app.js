const axios = require('axios')// an axios dependencies to work with an  external api

exports.index = (req, res) => {
    return res.render('index')
}

exports.result = (req, res) => {
    return res.render('result')
}

exports.search = async (req,res) => {
    try {
        const axios = require("axios");

        const {q} = req.query
        console.log(req.query)

        const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/v2/search',
        params: {query: q},
        headers: {
            'X-RapidAPI-Key': 'cf8c8399c2msh304633d4656a332p14e1adjsn85ac22a285c3',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
        };
    
        const response = await axios.request(options)
        const array = response.data.result.songs.map((elements) => elements.name)

        // console.log(array)
        return res.render('result', {array})
        // return res.json({array})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error})
    }
}

