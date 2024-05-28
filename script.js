function addFilme() {
    var titulo = document.getElementById('titulo').value
    var diretor = document.getElementById('diretor').value
    var ano = document.getElementById('ano').value
    var lista = document.getElementById('lista')

    class Filme {
        constructor(t, d , a) {
            this.t = t
            this.d = d
            this.a = a
        }

        dadosFilme() {
            return `${this.t} - ${this.d} (${this.a})<br><br>`
        }
    }

    if(titulo === "" || diretor === "" || isNaN(ano)) {
        alert('Preencha Todos os Campos')
    } else {
        let novoFilme = new Filme(titulo, diretor, ano)
        let dadosDoFilme = novoFilme.dadosFilme()
        lista.innerHTML = lista.innerHTML + dadosDoFilme
    }

}

