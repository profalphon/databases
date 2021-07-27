const express = require('express');
const app = express();

//This would import users.
const userRoutes = require('./routes/userRoutes.js')

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.json({
        status: 'success',
        message: 'welcome to my api'
    })
})

//parse json
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //Create a product route
// app.use('/products', productRoutes);

// User route
app.use('/users', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})