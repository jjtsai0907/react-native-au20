interface Product {
  id: number;
  name: String;
  price: String;
  productType: String;
}

const Products: Product[] = [
  {
    id: 1,
    name: "One",
    price: "100",
    productType: "Food",
  },
  {
    id: 2,
    name: "Two",
    price: "200",
    productType: "Food",
  },
];

export { Product, Products };
