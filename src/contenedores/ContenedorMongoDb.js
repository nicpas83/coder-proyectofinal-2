import mongoose from "mongoose"
import config from "../config"

await mongoose.connect(config.mongodb.connectionString)

class ContenedorMongoDb {

    constructor(nombreColeccion,  schema){
        this.model = mongoose.model(nombreColeccion, schema)
    }

    async getAll(){
        const data = await this.model.find()
        return data
    }

    async getById(id){
        return await this.model.find({ _id: id })
    }

    async create(data){
        try {
            return await this.model.create(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    async update(data, id){
        try {
            return await this.model.updateOne( {_id: id}, {$set: data} )
        } catch (error) {
            console.log(error)
        }

    }

    async delete(id){
        try{
            return await this.model.deleteOne({ _id: id })
        }catch(error){
            console.log(error)
        }
    }


    
}

export default ContenedorMongoDb;