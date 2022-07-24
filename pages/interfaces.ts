export interface PropsProductCard {
    product: Product
}

export interface PropsProductGrid {
    data: Product[]
}

export interface PropsFavorites {
    productId: Number
}

export interface Product {
    id: Number,
    name: string, 
    imageURL: string, 
    listPrice: Number, 
    salePrice: Number
}

