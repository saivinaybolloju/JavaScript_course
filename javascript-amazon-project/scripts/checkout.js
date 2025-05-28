import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
// import '../data/cart-class.js';
// import '../data/cart-oop.js';
// import '../data/backend-practice.js';
