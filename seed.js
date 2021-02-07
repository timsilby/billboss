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
		dueDate: "2021-01-17T08:35:00.000Z",
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		dueDate: "2020-12-17T08:35:00.000Z",
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		dueDate: "2020-11-17T08:35:00.000Z",
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		dueDate: "2020-10-17T08:35:00.000Z",
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		dueDate: "2020-09-17T08:35:00.000Z",
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Phone bill",
		notes: "Mobile phone",
		dueDate: "2020-08-17T08:35:00.000Z",
		amount: 95.50,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7cd42081f135f0b5e97e")
	},
	{
		title: "Electricity",
		notes: "",
		dueDate: "2020-12-30T08:35:00.000Z",
		amount: 500,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7df7fb31ce4bf83d69c1")
	},
	{
		title: "Electricity",
		notes: "",
		dueDate: "2020-09-30T08:35:00.000Z",
		amount: 500,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7df7fb31ce4bf83d69c1")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2021-02-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2021-01-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2020-12-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2020-11-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2020-10-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2020-09-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Internet",
		notes: "NBN bill",
		dueDate: "2020-08-03T08:35:00.000Z",
		amount: 75,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e20fb31ce4bf83d69c3")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2021-01-29T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2021-01-15T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2021-01-01T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-12-18T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-12-4T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-11-20T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-11-06T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-10-23T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-10-09T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-09-25T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-09-11T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Loan repayment",
		notes: "Personal loan",
		dueDate: "2020-08-28T08:35:00.000Z",
		amount: 245,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7e4bfb31ce4bf83d69c5")
	},
	{
		title: "Rent",
		notes: "",
		dueDate: "2021-01-26T08:35:00.000Z",
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		dueDate: "2020-12-26T08:35:00.000Z",
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		dueDate: "2020-11-26T08:35:00.000Z",
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		dueDate: "2020-10-26T08:35:00.000Z",
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		dueDate: "2020-09-26T08:35:00.000Z",
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	},
	{
		title: "Rent",
		notes: "",
		dueDate: "2020-08-26T08:35:00.000Z",
		amount: 1200,
		paid: true,
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		billset: mongoose.Types.ObjectId("601f7d6b2081f135f0b5e980")
	}
]

const deposits = [
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2021-02-10T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2021-01-27T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2021-01-13T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-12-30T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-12-16T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-12-02T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-11-18T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-11-04T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-10-21T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-10-07T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-09-23T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-09-09T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-08-26T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
	},
	{
		title: "Payment from wage",
		notes: "",
		depositDate: "2020-08-12T06:40:00.000Z",
		amount: 645,
		depositSet: mongoose.Types.ObjectId("601f8b91540667369c0c8069"),
		fireUid: "0PV7bV9Wcwh3yZiTFRqtGr505zs1",
		paid: true
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

// dbModels.deposits.collection.insertMany(deposits)
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

