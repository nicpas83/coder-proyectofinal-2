import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb'

class CarritoDaoMongoDB extends ContenedorMongoDb{

    constructor(){
        super('carritos', {
            timestamp: { type: String, required: true },
            productos: { type: Array, required: true }
        })
    }

}

export default CarritoDaoMongoDB;