import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">User Home</h2>
      {user?.displayName ? user.displayName : "Back"}
    </div>
  );
};

export default UserHome;
