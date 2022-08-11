import dotenv from 'dotenv'
dotenv.config()

let ProductoDao
let CarritoDao

console.log('Base de datos configurada: ', process.env.DATABASE)

switch (process.env.DATABASE) {
    case 'firebase':
        const { default: ProductoDaoFirebase } = await import('./productos/ProductoDaoFirebase.js')
        const { default: CarritoDaoFirebase } = await import('./carritos/CarritoDaoFirebase.js')

        ProductoDao = ProductoDaoFirebase
        CarritoDao = CarritoDaoFirebase


        break;

    case 'mongo':

        const { default: ProductoDaoMongoDb } = await import('./productos/ProductoDaoMongoDb.js')
        const { default: CarritoDaoMongoDb } = await import('./carritos/CarritoDaoMongoDb.js')

        ProductoDao = new ProductoDaoMongoDb()
        CarritoDao = new CarritoDaoMongoDb()

        break;

    default:
        break;
}

export default { ProductoDao, CarritoDao }