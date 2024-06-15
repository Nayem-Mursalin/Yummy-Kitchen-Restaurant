import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">Admin Home</h2>
      {user?.displayName ? user.displayName : "Back"}
    </div>
  );
};

export default AdminHome;
