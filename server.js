const express = require("express");
const path = require("path");

const app = express();

// Definindo a pasta principal como a pasta pública
app.use(express.static(path.join(__dirname)));

// Roteamento para a página inicial (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Configuração do servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
