/* eslint-disable @typescript-eslint/no-explicit-any */
import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:

function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      return "None";
  }
}

/// Add your getOrders() function below:

function getOrders(price: PriceBracket, orders: Order) {
  const limit = getMaxPrice(price);
  const filteredOrders: Order = [];
  orders.forEach((order: any[]) => {
    const result = order.filter((element: { price: number; }) => element.price <= limit);
    filteredOrders.push(result);
  });
  return filteredOrders;
}

/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant, orders: Order) {
  restaurants.forEach((element: { name: string; }, index: number) => {
    console.log(`${element.name}`);
    orders[index].forEach((order: { name: string; price: any; }) => {
      console.log(`${order.name}: ${order.price}`);
    });
  });
}

function printExclusiveOrders(restaurants: Restaurant, orders: Order) {
  orders.forEach((order: any[], index: number) => {
    if(order.length > 0) {
      console.log(`${restaurants[index].name}`)
      order.forEach((item: { name: any; price: any; }) => {
        console.log(`- ${item.name}: ${item.price}`)
      });
    }
  });
}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
printExclusiveOrders(restaurants, elligibleOrders);
// console.log(printOrders);
