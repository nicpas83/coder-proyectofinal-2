import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb'

class ProductoDaoMongoDb extends ContenedorMongoDb{

    constructor(){
        super('productos', {
            nombre: { type: String, required: true },
            precio: { type: Number, required: true },
            thumbnail: { type: String, required: true }
        })
    }

}

export default ProductoDaoMongoDb;