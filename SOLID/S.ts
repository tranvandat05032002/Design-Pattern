interface ProductType {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  unit: string;
}
// cấu trúc của 1 order
class Order {
  userId: string;
  products: ProductType[] = [];
  createTime: Date;
  constructor(userId: string) {
    this.userId = userId;
    this.createTime = new Date();
    this.products = [];
  }
}
// Thêm sản phẩm vào trong Order và tách nghiepjej vụ riêng biệt và tái sử dụng cấu trúc của Order
class OrderManager {
  order: Order | null;
  orderSendMail: sendMail | null;
  constructor() {
    this.order = null;
    this.orderSendMail = null;
  }
  // tạo ra 1 order
  public createOrder(userId: string) {
    this.order = new Order(userId);
    return this.order;
  }
  // thêm thông tin cần thiết của product vào trong order
  public addProduct(product: ProductType) {
    this.order?.products.push(product);
  }
  public getOrder() {
    return this.order;
  }
  public isValid() {
    return !!this.order?.products.length;
  }
  // send order to server
  public sendOrder() {
    if (this.isValid()) {
      this.orderSendMail = new sendMail();
      this.orderSendMail.sendOrder(this.order as Order);
    }
    return;
  }
}
class sendMail {
  public sendOrder(order: Order) {
    console.log(
      "Send order to https://ecommerce.com/api/orders success -----> ",
      order
    );
    return;
  }
}
const orderManager = new OrderManager();
orderManager.createOrder("userID-10038");
orderManager.addProduct({
  productId: "PD-1013",
  productName: "Snack",
  price: 23000,
  quantity: 10,
  unit: "VND",
});
orderManager.addProduct({
  productId: "PD-1014",
  productName: "Oreo",
  price: 11000,
  quantity: 6,
  unit: "VND",
});
orderManager.addProduct({
  productId: "PD-1017",
  productName: "Bánh Xếp",
  price: 70000,
  quantity: 3,
  unit: "VND",
});
console.log(orderManager.getOrder());
orderManager.sendOrder();
