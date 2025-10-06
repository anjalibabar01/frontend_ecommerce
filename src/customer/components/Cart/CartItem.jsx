import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

const CartItem = ({ item, onRemove, onUpdate }) => {
  if (!item || !item.product) return null;

  const { id, product, size, quantity } = item;

  // 🔹 Handle update by passing full object
  const handleUpdate = (newQty) => {
    if (newQty < 1) return;
    const updatedItem = {
      ...item,
      quantity: newQty,
    };
    onUpdate(updatedItem); // ✅ Always send full object
  };

  return (
    <div className="mx-6 p-5 shadow-lg rounded-lg border border-gray-300 mb-5">
      {/* Product Info */}
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top rounded-lg shadow-lg shadow-gray-300"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold text-lg">{product.title}</p>
          <p className="opacity-70">
            Size: {size || "—"} , {product.color}
          </p>
          <p className="opacity-70 mt-2">Brand: {product.brand}</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-2">
            <p className="font-semibold">₹{product.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{product.price}</p>
            <p className="text-green-600 font-semibold">
              {product.discountPersent}% Off
            </p>
          </div>
        </div>
      </div>

      {/* Quantity + Remove */}
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            sx={{ color: "#212529" }}
            onClick={() => handleUpdate(quantity - 1)}
            disabled={quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{quantity}</span>
          <IconButton
            sx={{ color: "#212529" }}
            onClick={() => handleUpdate(quantity + 1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#212529" }} onClick={() => onRemove(id)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
