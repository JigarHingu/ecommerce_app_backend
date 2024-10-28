// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },  // Fixed typo from 'useId' to 'userId'
//   items: { type: Array, required: true },
//   amount: { type: Number, required: true },
//   address: {
//     type: new mongoose.Schema({
//       street: { type: String, required: true },
//       city: { type: String, required: true },
//       state: { type: String, required: true },
//       zipcode: { type: String, required: true },
//       country: { type: String, required: true },
//       phone: { type: String, required: true },
//     }, { _id: false }),  // Disable _id for nested schema
//     required: true
//   },
//   status: { type: String, required: true, default: "Order Placed" },
//   paymentMethod: { type: String, required: true },
//   payment: { type: Boolean, required: true, default: false },
//   date: { type: Date, required: true, default: Date.now }  // Use Date with a default value
// });

// // Use `mongoose.models` to avoid overwriting the model if it's already been defined
// const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

// export default orderModel;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "Order Placed" },
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
