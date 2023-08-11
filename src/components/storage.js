import { Product } from "../models/Product";
import { User } from "../models/User";

const users = getFromStorage("USER_ARR") ?? [];
const products = getFromStorage("PRODUCT_ARR") ?? [];

export const userArr = users.map((user) => parseUser(user));
export const productArr = users.map((product) => parseProduct(product));

// get data from localstorage
export function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data from localstorage

export function saveToStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

// convert Js Object to class instance of user class

function parseUser(userData) {
  const user = new User(
    userData.fullName,
    userData.email,
    userData.password,
    userData.phone
  );
  return user;
}

// convert Js Object to class instance of product class
function parseProduct(productData) {
  const product = new Product(
    productData.id,
    productData.name,
    productData.img,
    productData.quantity,
    productData.price,
    productData.totalPrice
  );
  return product;
}
