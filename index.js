const app = require('./config/custom-express')()
const router = require('./server/routes')

app.use(router)

app.listen(9999);