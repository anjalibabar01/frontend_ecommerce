import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { createPayment } from "../../../State/Payment/Action";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = ({ orderId }) => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.order);

  // Fetch order by ID
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  // 🔹 Handle Remove
  const handleRemove = (itemId) => {
    console.log("Removing order item with ID:", itemId);
    dispatch(removeCartItem(itemId));
  };

  // 🔹 Handle Quantity Update
  const handleUpdate = (updatedItem) => {
    if (!updatedItem || updatedItem.quantity < 1) return;
    console.log(
      "Updating order item:",
      updatedItem.id,
      "-> Qty:",
      updatedItem.quantity
    );
    dispatch(updateCartItem(updatedItem.id, updatedItem));
  };

  // Handle Razorpay Checkout
  const handleCheckout = () => {
    if (orderId) {
      dispatch(createPayment(orderId));
    } else {
      alert("Order ID is missing!");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!order) return <div>No order found.</div>;
  if (!order.shippingAddress) return <div>No shipping address found.</div>;

  return (
    <div className="mt-5">
      {/* Shipping Address */}
      <div className="p-5 shadow-lg rounded-s-md border border-gray-300 mb-5">
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <AddressCard address={order.shippingAddress} />
      </div>

      <div className="lg:grid grid-cols-3 relative">
        {/* Order Items */}
        <div className="col-span-2">
          {order.orderItems?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          ))}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="rounded-lg border border-gray-300 p-5">
            <p className="uppercase font-semibold opacity-60 pb-4 text-center">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-2 text-black">
                <span>Price</span>
                <span>₹{order.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-₹{order.discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="text-green-600 font-semibold">
                  ₹{order.totalDiscountedPrice}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                color="secondary"
                className="w-full"
                sx={{ px: "1rem", py: "0.5rem", marginTop: "0.5rem" }}
              >
                Checkout & Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
