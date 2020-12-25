const path = require('path')
const express = require('express');
const hbs = require('hbs')
  

const app = express()


//define path for express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res) =>{
    res.render('index',{
        title:'Weather App',
        name:'Srv Smn'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name: 'Sourav Suman'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        msg:'This is just a sample help message',
        title:'Help',
        name:'Srv Smn'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'acha mausam hai',
        location:'Bksc'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('err',{
        msg:'Help for this article is not present',
        title:'Help',
        name:'sourav suman'
    })
})

app.get('*',(req,res)=>{
    res.render('err',{
        msg:'Page not found',
        title:'Weather App',
        name:'sourav suman'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})