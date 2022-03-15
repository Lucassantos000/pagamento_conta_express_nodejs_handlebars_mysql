const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const { addAbortSignal } = require("stream");

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rotas
app.get('/pagamento', function(req, res){
    res.render('pagamento');
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post("/add-pagamento",(req,res)=>{
    res.send(`email: ${req.body.email} <br> Senha: ${req.body.senha}`);
})

app.listen(8080, ()=>{
    console.log("Servidor no AR!");
});