import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  year: { type: Number, required: true },
  squareFootage: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  imgUrl: { type: String, default: "https://placeholder 300x300" },
  price: { type: Number, required: true },
  description: { type: String }
}, { timestamps: true })

export default class HouseService {
  get repository() {
    return mongoose.model('house', _model)
  }
}