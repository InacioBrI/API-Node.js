// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "curso de node.js",
    "/livros": "Entrei na rota livros",
    "/ autores": "entrei na rota autores"
}

// const server = http.createServer((req, res) => {
//    res.writeHead(200, { "Content-type": "text/plan" });
//    res.end(rodas[req.url]);
// })

app.listen(PORT, () => {
    console.log("servidor escutando!")
});