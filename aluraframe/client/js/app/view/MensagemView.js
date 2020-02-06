class MensagemView {

    constructor( elemento ) {
        this._elemento = elemento;
    }

    _template( mensagemModel ) {
        return mensagemModel.text ? `<p class="alert alert-info">${mensagemModel.text}</p>` : `<p></p>`;
    }

    update( mensagemModel ){
        this._elemento.innerHTML = this._template( mensagemModel );
    }
}