class NegociacaoController {

    constructor() {

        /**
         * As we are gonna use the method document.querySelector many times we want to create an alias to it.
         * In order to do that we create a variable to be a reference to it, but this causes to change the method to a simple function.
         * The querySelector method uses 'this' to reference the document instance but it on the alias it wont work
         * exactly because it doesn't have the proper context.
         * Solution for it is the bind function.
         */
        /* document.querySelector was a method inside a class, but used as a separate function it doesn't have a proper context */
        let $ = document.querySelector; 
        /**
         * the bind function return a new function with the correct context applied as a parameter.
         */
        $ = $.bind(document);

        /**
         *  alocating dom elements reference on the constructor avoids 
         *  unnecessary future search on the dom tree
         */
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

    }

    adiciona(event) {
        /* we are prevent the default behavior of the form refresh of html5 */
        event.preventDefault(); 
        
        let negociacao = new Negociacao(

            /**In order to create a Date instance, we will need to prepare the string _data for 
             * the Date constructor. Data can be instanciated as: 
             * new Date(2006,7,30) but this way the month starts at 0
             * new Date('2006-7-30')
             * new Date('2006,7,30')
             * new Date(['2016-7-30'])
             * new Date(['2016-7-30'])
             * new Date(['2016','7','30']) 
             *  */
            
            new Date ( ... /* spread operator, each individual element inside the array is placed into each of functions parameters */
                this._data.value
                    .split('-')
                    .map( (item,index) => index == 1 ? item - 1 : item )
            ), 
            this._quantidade.value,
            this._valor.value
        );

        //console.log(negociacao);

        /*clear form*/
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0;

        this._data.focus();

    }

}