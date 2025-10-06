import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "./View/OrderTableView";
import ProductTableView from "./View/ProductTableView";

const Dashboard = () => {
  return (
    <div className="p-10">
      <div className="flex gap-5 w-full ">
        {/* Left column (1/3) */}
        <div className="w-1/3">
          <Achievement />
        </div>

        {/* Right column (2/3) */}
        <div className="w-2/3">
          <MonthlyOverview />
        </div>
      </div>

      {/* Full width section for ProductsTable */}
      <div className="w-full mt-6 shadow-lg shadow-gray-400 rounded-lg">
        <OrderTableView />
      </div>

      <div className="w-full mt-6 shadow-lg shadow-gray-400 rounded-lg">
        <ProductTableView />
      </div>
    </div>
  );
};

export default Dashboard;
