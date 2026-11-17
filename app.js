require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

// const productsRoutes = require('./routes/products.routes.js');
// const productsWebRoutes = require('./routes/products/web/routes.js');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/film', (req, res) => {
    const movieTitle = req.body.title;
    res.render(`/film/${movieTitle}`)
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

app.get('/film/:title', async (req, res) => {
    const titleToSearch = req.params.title;
    const ApiKey = process.env.API_KEY;
    try {
        const res = await fetch(`https://www.omdbapi.com/?t=${titleToSearch}&apikey=${ApiKey}`);
        const data = await res.json();
        res.render('film', { pelicula: data });
    } catch(err) {
        console.log(err);
        res.status(500).send("Error interno del servidor")
        
    }

    
})


// app.use('/api/products', productsRoutes);
// app.use('/products', productsWebRoutes);

app.listen(port, () => {
    console.log(`Funcionando en: http://localhost:${port}`)
})