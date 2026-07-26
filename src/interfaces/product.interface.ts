export interface Product {
    products: ProductElement[];
    total:    number;
    skip:     number;
    limit:    number;
}

export interface ProductElement {
    id:                   number;
    title:                string;
    description:          string;
    category:             ProductCategory;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 string[];
    brand:                string;
    sku:                  string;
    weight:               number;
    dimensions:           Dimensions;
    warrantyInformation:  string;
    shippingInformation:  string;
    availabilityStatus:   AvailabilityStatus;
    reviews:              Review[];
    returnPolicy:         ReturnPolicy;
    minimumOrderQuantity: number;
    meta:                 Meta;
    images:               string[];
    thumbnail:            string;
}

export enum AvailabilityStatus {
    InStock = 'In Stock',
    LowStock = 'Low Stock',
}

export enum ProductCategory {
    Beauty = 'beauty',
    Fragrances = 'fragrances',
    Furniture = 'furniture',
    Groceries = 'groceries',
    HomeDecoration = 'home-decoration',
    KitchenAccessories = 'kitchen-accessories',
    Laptops = 'laptops',
    MensShirts = 'mens-shirts',
    MensShoes = 'mens-shoes',
    MensWatches = 'mens-watches',
    MobileAccessories = 'mobile-accessories',
    Motorcycle = 'motorcycle',
    SkinCare = 'skin-care',
    Smartphones = 'smartphones',
    SportsAccessories = 'sports-accessories',
    Sunglasses = 'sunglasses',
    Tablets = 'tablets',
    Tops = 'tops',
    Vehicle = 'vehicle',
    WomensBags = 'womens-bags',
    WomensDresses = 'womens-dresses',
    WomensJewellery = 'womens-jewellery',
    WomensShoes = 'womens-shoes',
    WomensWatches = 'womens-watches'
}

export interface Dimensions {
    width:  number;
    height: number;
    depth:  number;
}

export interface Meta {
    createdAt: Date;
    updatedAt: Date;
    barcode:   string;
    qrCode:    string;
}

export enum ReturnPolicy {
    NoReturnPolicy = 'No return policy',
    The7DaysReturnPolicy = '7 days return policy',
    The90DaysReturnPolicy = '90 days return policy',
}

export interface Review {
    rating:        number;
    comment:       string;
    date:          Date;
    reviewerName:  string;
    reviewerEmail: string;
}