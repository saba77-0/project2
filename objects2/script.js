// const students = [
//   { name: "Ana", grade: 95 },
//   { name: "Nika", grade: 72 },
//   { name: "Gio", grade: 88 },
//   { name: "Mariam", grade: 60 }
// ];

// let highestGrade = students[0].grade;
// let highScorersCount = 0;

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].name}: ${students[i].grade}`);

//     if (students[i].grade > highestGrade) {
//         highestGrade = students[i].grade;
//     }

//     if (students[i].grade > 80) {
//         highScorersCount++;
//     }

//     students[i].passed = students[i].grade >= 60;
// }

// console.log("ყველაზე მაღალი ქულა:", highestGrade);
// console.log("80-ზე მეტი ქულის მქონე სტუდენტები:", highScorersCount);
// console.log("განახლებული სტუდენტები:", students);





// const account = {
//   owner: "Ana",
//   balance: 1000,

//   deposit(amount) {
//       this.balance += amount;
//   },

//   withdraw(amount) {
//       this.balance -= amount;
//   },

//   showBalance() {
//       console.log(`Balance: ${this.balance}`);
//   }
// };

// account.deposit(500);
// account.withdraw(200);
// account.showBalance();


const product = {
  name: "Phone",
  price: 1200,
  quantity: 5,
  category: "Electronics",

  getInfo() {
      return `${this.name} - Price: ${this.price}, Quantity: ${this.quantity}, Category: ${this.category}`;
  },

  applyDiscount() {
      this.price = this.price - (this.price * (this.discount / 100));
  }
};

console.log(product.getInfo());

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

delete product.category;

product.discount = 10;

product.applyDiscount();

setTimeout(() => {
    console.log(`საბოლოო ფასი: ${product.price}`);
}, 2000);