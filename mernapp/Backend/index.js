const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors());

app.use(express.json())
const mongoDB = require("./db")
mongoDB();
app.use('/api',require("./Routes/CreatUser"))
app.use('/api',require("./Routes/DisplayData"))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})