const express = require('express')
const cors = require('cors')

const app = express();
const PORT = 8080
const HOST = '0.0.0.0'

app.use(cors())

app.get('/', (req, res) => {
    res.send({
      courses: [
        "Node.js", "React.js", "Angular"
      ]
    })
})
app.listen(PORT, () => {
  console.log(`Example app listening at ${HOST}:${PORT}`);
});
