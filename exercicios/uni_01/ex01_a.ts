interface Pessoa {
  nome: string;
  sobrenome: string;
}

function saudacao(person: Pessoa) {
  return "Olá, " + person.nome + " " + person.sobrenome;
}

let user = { nome: "Fellyph", sobrenome: "Cintra" };

document.body.innerHTML = saudacao(user);