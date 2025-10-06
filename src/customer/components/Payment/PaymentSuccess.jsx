import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";
import { getOrderById } from "../../../State/Order/Action";
import { Alert, AlertTitle } from "@mui/material";
import OrderTracker from "./../Order/OrderTracker";
import AddressCard from "./../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  console.log("Order Id - ", orderId);

  useEffect(() => {
    const data = { orderId, paymentId };
    if (orderId && paymentId) {
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId, dispatch]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <div className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item, index) => (
          <div
            key={index}
            className="shadow border border-gray-200 rounded-lg p-5 flex justify-between items-center"
          >
            {/* Left: Product details */}
            <div className="w-1/2 flex items-center">
              <img
                className="w-[8rem] h-[8rem] object-cover object-top rounded-lg shadow shadow-gray-400"
                src={item.product.imageUrl}
                alt="Ordered Product"
              />
              <div className="ml-5 space-y-2">
                <p>{item.product.title}</p>
                <div className="opacity-50 text-xs font-semibold space-x-5">
                  <span>Color : {item.color}</span>
                  <span>Size : {item.size}</span>
                </div>
                <p>Seller : {item.product.brand}</p>
                <p>₹ {item.price}</p>
              </div>
            </div>
            {/* Right: Address */}
            <div className="w-1/2 flex justify-end">
              <AddressCard address={order.order?.shippingAddress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccess;
