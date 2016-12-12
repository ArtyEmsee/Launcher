const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

const assetFolder = path.resolve(__dirname, '../dist')

app.get('/', function (req, res) {
  res.sendFile(assetFolder + '/index.html')
})

app.use(express.static(assetFolder))

app.listen(port, () =>
  console.log(`Running at http://localhost:${port}`, "\nassetFolder: ", assetFolder)
)