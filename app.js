const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

// const productsRoutes = require('./routes/products.routes.js');
// const productsWebRoutes = require('./routes/products/web/routes.js');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
})

// Rutas web
app.get('/about', (req, res) => {
    res.render('about', {
        titulo: "Sobre nosotros",
        descripcion: "Conoce al equipo detras del proyecto"
    });
});
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/location', (req, res) => {
    res.render('location')
})
app.get('/mission', (req, res) => {
    res.render('mission')
})


// app.use('/api/products', productsRoutes);
// app.use('/products', productsWebRoutes);

app.listen(port, () => {
    console.log(`Funcionando en: http://localhost:${port}`)
})