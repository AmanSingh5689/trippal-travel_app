import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
// import { logoutUser } from "../services/api"; // Assuming a logout API function

function Logout() {
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = async () => {
    try {
      // await logoutUser();

      // Redirect to the login page after successful logout
      navigate("/signup");
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout failure, show error message or retry logic
    }
  };

  // Automatically trigger logout on component mount (optional)
  // useEffect(() => {
  //   handleLogout(); // Example: Automatically logs out when component mounts
  //   // Adjust the dependency array [] if you only want to trigger it once on mount
  // }, []);

  return (
    <div>
      <h2>Are you sure you want to logout?</h2>
      {/* Example: A button to manually trigger logout */}
      <Button variation="primary" onClick={handleLogout}>
        Yes Logout
      </Button>
    </div>
  );
}

export default Logout;
