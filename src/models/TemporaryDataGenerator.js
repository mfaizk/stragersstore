import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

const TemporaryDataGenerator = () => {
  let data = [];

  for (let i = 0; i < 10; i++) {
    data = [
      {
        productDesc: faker.commerce.productDescription(),
        productUid: uuid(),
        productRating: faker.random.numeric(),
        dateOfAddition: faker.date.future(),
        tags: [
          faker.commerce.productAdjective(),
          faker.commerce.productAdjective(),
          faker.commerce.productAdjective(),
          faker.commerce.productAdjective(),
        ],
        productPrice: faker.commerce.price(),
        productDiscount: faker.commerce.price(),
        productBrandName: faker.company.name(),
        couponCode: [uuid(), uuid(), uuid(), uuid()],
        productName: faker.commerce.productName(),
        stockLeft: faker.random.numeric(),
        productImageUrl: [
          faker.image.fashion(640, 480, true),
          faker.image.fashion(640, 480, true),

          faker.image.fashion(640, 480, true),
          faker.image.fashion(640, 480, true),
        ],
        productProperties: {
          color: faker.internet.color(),
          size: faker.random.numeric(),
          patter: faker.commerce.productAdjective(),
        },
      },
      ...data,
    ];
  }
  // console.log(data);

  return data;
};

export default TemporaryDataGenerator;
