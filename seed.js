require("dotenv").config();

const mongoose = require("mongoose");

const dbModels = require("./models/dbModels");

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})
	.then(conn => console.log(`Connected to ${conn.connections[0].host}.`))
	.catch(err => console.log(err));


const bills = [
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2021-02-16T14:00:00.000Z"),
		amount: 95.50,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2021-01-16T14:00:00.000Z"),
		amount: 95.50,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2020-12-16T14:00:00.000Z"),
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2020-11-16T14:00:00.000Z"),
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2020-10-16T14:00:00.000Z"),
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2020-09-16T14:00:00.000Z"),
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		date: new Date("2020-08-16T14:00:00.000Z"),
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Electricity",
		notes: "",
		date: new Date("2021-03-29T14:00:00.000Z"),
		amount: 500,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7df7fb31ce4bf83d69c1")
	},
	{
		title: "Electricity",
		notes: "",
		date: new Date("2020-12-29T14:00:00.000Z"),
		amount: 500,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7df7fb31ce4bf83d69c1")
	},
	{
		title: "Electricity",
		notes: "",
		date: new Date("2020-09-29T14:00:00.000Z"),
		amount: 500,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7df7fb31ce4bf83d69c1")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2021-03-02T14:00:00.000Z"),
		amount: 75,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2021-02-02T14:00:00.000Z"),
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2021-01-02T14:00:00.000Z"),
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2020-12-02T14:00:00.000Z"),
		amount: 75,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2020-11-02T14:00:00.000Z"),
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2020-10-02T14:00:00.000Z"),
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2020-09-02T14:00:00.000Z"),
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		date: new Date("2020-08-02T14:00:00.000Z"),
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2021-02-25T14:00:00.000Z"),
		amount: 245,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2021-02-11T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2021-01-28T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2021-01-14T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-12-31T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-12-17T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-12-03T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-11-19T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-11-05T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-10-22T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-10-08T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-09-24T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-09-10T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		date: new Date("2020-08-27T14:00:00.000Z"),
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2021-02-25T14:00:00.000Z"),
		amount: 1200,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2021-01-25T14:00:00.000Z"),
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2020-12-25T14:00:00.000Z"),
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2020-11-25T14:00:00.000Z"),
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2020-10-25T14:00:00.000Z"),
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2020-09-25T14:00:00.000Z"),
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		date: new Date("2020-08-25T14:00:00.000Z"),
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Car rego",
		notes: "Subaru",
		date: new Date("2021-03-11T14:00:00.000Z"),
		amount: 650,
		paid: false,
		isRecurring: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
	},
	{
		title: "Contents Insurance",
		notes: "",
		date: new Date("2021-05-02T14:00:00.000Z"),
		amount: 1329,
		isRecurring: false,
		paid: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
	},
	{
		title: "Library late fee",
		notes: "",
		date: new Date("2021-01-19T14:00:00.000Z"),
		amount: 13,
		paid: false,
		isRecurring: false,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
	}
]

const deposits = [
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2021-02-23T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: false,
		isRecurring: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2021-02-09T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Account top-up",
		notes: "",
		date: new Date("2021-01-29T14:00:00.000Z"),
		amount: 650,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: false,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2021-01-26T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: false
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2021-01-12T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-12-29T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-12-15T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: false
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-12-01T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-11-17T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-11-03T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-10-20T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-10-06T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Transfer from savings",
		notes: "",
		date: new Date("2020-09-23T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: false,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-09-22T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-09-08T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: false
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-08-25T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		date: new Date("2020-08-11T14:00:00.000Z"),
		amount: 920,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		isRecurring: true,
		paid: true
	}
]

const account = [
	{
		startBalance: 500,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
	}
]

// dbModels.bills.collection.insertMany(bills)
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

dbModels.deposits.collection.insertMany(deposits)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// dbModels.accounts.collection.insertMany(account)
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
