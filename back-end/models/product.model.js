import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requirerd: true,
    },
    price: {
        type: Number,
        requirerd: true,
    },
    image: {
        type: String,
        requirerd: true,
    },
}, {
    timestamps: true
}
);

const Product = mongoose.model('Product', productSchema);

export default Product;