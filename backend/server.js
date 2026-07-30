//starts a server
const app = require('./src/app');

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})