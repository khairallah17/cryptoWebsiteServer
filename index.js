const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 3036

app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.get("/api", async (req, res) => {

    const result = await axios(({
        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'X-CMC_PRO_API_KEY': process.env.API_KEY
        }    
      }))

      console.log("HERE")

      res.send(result.data.data)

})

app.listen(PORT, () => console.log(`litening on port ${PORT}`))