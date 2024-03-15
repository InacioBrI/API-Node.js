import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "senhor dos anais"
    },
    {
        id: 2,
        titulo: "O Harry Potter"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
}); 

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

app.delete("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Deletando esse livro!")
})

export default app;     