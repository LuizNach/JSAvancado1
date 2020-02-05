class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this._negociacoes;
    }
}