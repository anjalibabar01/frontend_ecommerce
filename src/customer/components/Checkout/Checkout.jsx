// Checkout.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";
import { createOrder } from "./../../../State/Order/Action";
import { useDispatch, useSelector } from "react-redux";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const querySearch = new URLSearchParams(location.search);
  const queryStep = parseInt(querySearch.get("step") || "0", 10);

  const dispatch = useDispatch();
  const [orderId, setOrderId] = React.useState(null);
  const { cartItems } = useSelector((state) => state.cart);

  const [activeStep, setActiveStep] = React.useState(queryStep);

  React.useEffect(() => {
    const qsStep = parseInt(
      new URLSearchParams(location.search).get("step") || "0",
      10
    );
    if (qsStep !== activeStep) {
      setActiveStep(qsStep);
    }
  }, [location.search]);

  React.useEffect(() => {
    if (orderId) {
      navigate(`?step=${activeStep}&orderId=${orderId}`, { replace: true });
    } else {
      navigate(`?step=${activeStep}`, { replace: true });
    }
  }, [activeStep, orderId, navigate]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [order, setOrder] = React.useState(null);

  const handleDeliverHere = async (finalAddress) => {
    if (!cartItems?.length) {
      alert("Cart is empty!");
      return;
    }

    // Send only the address object, not wrapped in another object
    const newOrder = await dispatch(createOrder(finalAddress));

    if (newOrder && newOrder.id) {
      setOrder(newOrder); // store full order for later steps
      setOrderId(newOrder.id);
      setActiveStep(2); // go to order summary step
    }
  };


  return (
    <div className="px-10 lg:px-20 py-5">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>

            <div>
              {activeStep === 1 && (
                <DeliveryAddressForm onDeliverHere={handleDeliverHere} />
              )}
              {activeStep === 2 && (
                <OrderSummary
                  address={order?.shippingAddress}
                  orderId={order?.id}
                />
              )}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
