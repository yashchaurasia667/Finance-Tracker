import { useUser } from "@clerk/clerk-react";
import FinancialRecordFrom from "../components/dashboard/financialRecordForm";
import FinancialRecordList from "../components/dashboard/financialRecordList";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <>
      <h1>Welcome {user}! Here are your finances: </h1>
      <FinancialRecordFrom />
      <FinancialRecordList />
    </>
  );
};

export default Dashboard;
