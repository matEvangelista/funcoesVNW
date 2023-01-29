function message() {
    console.log("Mensagem qualquer")
}

function meuNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

function sobreAlguem(nome, idade, estiloMusical) {
    console.log("Esta pessoa se chama " + nome + ", tem " + idade + " anos e gosta de " + estiloMusical)
}

function filmeMusica(filme, musica) {
    console.log(`Filme: ${filme}. Música: ${musica}`)
}

function triplo(num) {
    console.log(`O triplo de ${num} é ${num*3}`)
}

function variavel(booleano) {
    string = booleano ? "verdadeiro" : "falso"
    console.log("A variável passada no parâmetro é " + string)
}

meuNome("mateus")
sobreAlguem("mateus", 24, "jazz")
filmeMusica("O segredo dos seus olhos", "Come rain or come shine")
triplo(10)
variavel(true)
variavel(false)