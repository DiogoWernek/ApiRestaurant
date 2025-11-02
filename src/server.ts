import express from "express"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/errorHandling"

const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(3333, '0.0.0.0', () => {
  console.log('Server is running on port 3333');
});
