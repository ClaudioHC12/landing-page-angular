export const listProducts:Product[] = [
    {id: 1, name: 'iPhone 15 pro Max', price: 18500, category: 'smartphones', image: 'https://media.es.wired.com/photos/6509d9b5c3cae8b32bec9d69/16:9/w_1920,c_limit/iPhone-15-Pro-Review-Top-Gear.jpeg'},
    {id: 2, name: 'Macbook pro M3', price: 45000, category: 'noteBooks', image: 'https://www.istore.ua/upload/iblock/e9f/a6nx18psetobhqq3f9rh9nhagr811061/mac_book_pro_14_space_black_6_is.png'},
    {id: 3, name: 'Airpods pro 2da', price: 4999, category: 'earphones', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985'},
    {id: 4, name: 'Teclado Gamer Dell', price: 1500, category: 'keyboards'},
    {id: 5, name: 'Monitor 27" HP', price: 3500, category: 'monitor', image: 'https://ocelot.com.mx/wp-content/uploads/2023/06/OMC-27-Fondo-Negro3.jpg'},
    {id: 6, name: 'Silla Gamer Asus', price: 2800, category: 'office'},
    {id: 7, name: 'Mouse Logytech', price: 750, category: 'electronics'},
];

export interface Product{
    id:number,
    name:string,
    price:number,
    category:string
    image?:string
};