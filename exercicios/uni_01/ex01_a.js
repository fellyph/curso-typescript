function saudacao(person) {
    return "Olá, " + person.nome + " " + person.sobrenome;
}
let user = { nome: "Fellyph", sobrenome: "Cintra" };
document.body.innerHTML = saudacao(user);
