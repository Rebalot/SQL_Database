const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const colors = require('colors')
const branchesRoutes = require('./routes/branchesRoutes')
const stockRoutes = require('./routes/stockRoutes')
const productsRoutes = require('./routes/productsRoutes')
const suppliersRoutes = require('./routes/suppliersRoutes')
const customersRoutes = require('./routes/customersRoutes')
const salesRoutes = require('./routes/salesRoutes')
const salesDetailsRoutes = require('./routes/salesDetailsRoutes')
const categoriesRoutes = require('./routes/categoriesRoutes')

app.use(express.json())

app.use('/api/v1', branchesRoutes)
app.use('/api/v1', stockRoutes)
app.use('/api/v1', productsRoutes)
app.use('/api/v1', suppliersRoutes)
app.use('/api/v1', customersRoutes)
app.use('/api/v1', salesRoutes)
app.use('/api/v1', salesDetailsRoutes)
app.use('/api/v1', categoriesRoutes)

app.listen(PORT, () => {
  console.log(`Servidor API iniciado en http://localhost:${PORT} 🚀`.yellow)
})
