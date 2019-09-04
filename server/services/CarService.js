import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number },
    imgUrl: { type: String, default: "https://placeholder 300x300" },
    price: { type: Number, required: true },
    description: { type: String }
}, { timestamps: true })

export default class CarService {
    get repository() {
        return mongoose.model('car', _model)
    }
}