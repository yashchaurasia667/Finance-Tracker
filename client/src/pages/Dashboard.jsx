import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <>
      <h1>Welcome {user}! Here are your finances: </h1>
    </>
  );
};

export default Dashboard;
