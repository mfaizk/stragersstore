import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

const TemporaryDataGenerator = () => {
  let dataFromApi = [];
  let data = {
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
      faker.image.fashion(),
      faker.image.fashion(),
      faker.image.fashion(),
      faker.image.fashion(),
    ],
    productProperties: {
      color: faker.internet.color(),
      size: faker.random.numeric(),
      patter: faker.commerce.productAdjective(),
    },
  };
  for (let i = 0; i < 10; i++) {
    // dataFromApi = [data, ...dataFromApi ];
    dataFromApi = [data, ...dataFromApi];
  }
  return dataFromApi;
};

export default TemporaryDataGenerator;
