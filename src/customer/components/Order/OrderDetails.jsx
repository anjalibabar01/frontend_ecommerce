import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="m-10">
      {/* Address */}
      <div className="p-5 rounded-lg bg-white border border-gray-300">
        <h1 className="font-semibold pb-2 text-lg">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-10">
        <OrderTracker activeStep={3} />
      </div>

      {/* Product Card */}
      {[1, 2, 3, 4, 5].map((item) => (
        <div className="flex mb-5 space-x-5 shadow-xl rounded-md p-5 border border-gray-300 items-center justify-between">
          {/* Product Info Section */}
          <div className="flex items-center">
            <img
              className="w-[8rem] h-[8rem] rounded-lg border border-gray-300 object-cover object-top shadow shadow-gray-300"
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt=""
            />
            <div className="space-y-2 ml-5">
              <p className="font-semibold">Universal Outfit</p>
              <p className="space-x-5 text-sm">
                <span>Color : Black</span> <span>Size : M</span>
              </p>
              <p className="text-sm">Seller : Kalakar</p>
              <p className="text-sm">₹199</p>
            </div>
          </div>

          {/* Rate & Review Section */}
          <div>
            <Box>
              <div className="flex items-center">
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </div>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
