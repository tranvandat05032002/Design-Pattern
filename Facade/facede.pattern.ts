/**
 * Pattern này dùng để khi người dùng sử dụng 1 dịch vụ mà k cần quan tâm bên sâu hệ thống phức tạp
 * như nào, có nghĩa là chúng ta sẽ xay dựng ra các hàm chức năng và logic phức tạp sau đó sẽ
 * đơn giản hóa nó khi sử dụng hay có thể hiểu là che giấu sự phức tạp của hệ thống và cung cấp 1 giao
 * diện đơn giản cho người dùng.
 */

class Discount {
  calc(value: number) {
    return value * 0.9;
  }
}
class Shipping {
  calc() {
    return 5;
  }
}
class Fees {
  calc(value: number) {
    return value * 1.05;
  }
}
class ShoppeFacadePattern {
  private discount: Discount;
  private shipping: Shipping;
  private fees: Fees;
  constructor() {
    this.discount = new Discount();
    this.fees = new Fees();
    this.shipping = new Shipping();
  }

  calc(price: number) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();

    return price;
  }
}

function buy(price: number) {
  const shoppe = new ShoppeFacadePattern();
  console.log("Total ----> ", shoppe.calc(price));
}

buy(12000);
