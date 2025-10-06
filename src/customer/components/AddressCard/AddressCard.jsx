import React from "react";

const AddressCard = ({ address }) => {
  if (!address) return null;

  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address.firstName} {address.lastName}
        </p>
        <p>
          {/* This commas you can see in frontend too */}
          {address.streetAddress}, {address.city}, {address.state},{" "}
          {address.zipCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
