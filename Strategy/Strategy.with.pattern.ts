/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice: number) {
  return originalPrice * 0.2;
}
/**
 * Tiếp tục thêm tính năng khuyễn mãi thông thường, ví dụ Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
 * @param {*} originalPrice
 * @returns
 */
function promotionPrice(originalPrice: number) {
  return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30;
}
/**
 * Đến ngày blackFriday promotion
 * @param {*} originalPrice
 * @returns
 */
function blackFridayPrice(originalPrice: number) {
  return originalPrice <= 200 ? originalPrice * 0.2 : originalPrice - 50;
}
/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function defaultPrice(originalPrice: number) {
  return originalPrice;
}

// Và chúng ta sẽ sửa đổi lại như sau:
function getPrice(originalPrice: number, typePromotion = "default") {
  if (typePromotion === "preOrder") {
    return preOrderPrice(originalPrice);
  }

  if (typePromotion === "promotion") {
    return promotionPrice(originalPrice);
  }

  if (typePromotion === "blackFriday") {
    return blackFridayPrice(originalPrice);
  }

  if (typePromotion === "default") {
    return defaultPrice(originalPrice);
  }
}

// Đoạn trên đã dính vào TH if quá nhiều
// tối ưu nó bằng cách sử dụng object
// create key and value
interface KeyObject {
  [key: string]: (value: any) => any;
}

const getPriceStrategies: KeyObject = {
  preOrder: preOrderPrice,
  promotion: promotionPrice,
  blackFriday: blackFridayPrice,
  default: defaultPrice,
};

function getPriceWithPattern(originalPrice: number, typePromotion: string) {
  return getPriceStrategies[typePromotion](originalPrice); // MyObject[key](valueOfFunction)
}

console.log(getPrice(200, "blackFriday"));
// Hàm đã tối ưu if

console.log(getPriceWithPattern(200, "blackFriday"));
