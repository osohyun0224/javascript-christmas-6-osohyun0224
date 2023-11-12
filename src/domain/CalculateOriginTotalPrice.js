class CalculateOriginTotalPrice {
  #menuPrices;

  constructor(menuPrices) {
    this.#menuPrices = menuPrices;
  }

  calculate(orderItems) {
    return this.#calculateTotalAmount(orderItems);
  }

  #calculateTotalAmount(orderItems) {
    let totalAmount = 0;
    orderItems.forEach(([menuItem, quantity]) => {
      quantity = parseInt(quantity, 10);
      const itemPrice = this.#menuPrices[menuItem] * quantity;
      totalAmount += itemPrice;
    });
    return totalAmount;
  }
}

export default CalculateOriginTotalPrice;
