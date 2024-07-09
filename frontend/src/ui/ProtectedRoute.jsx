import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ isLoggedIn, children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isLoggedIn) navigate("/signup");
    },
    [isLoggedIn, navigate]
  );

  // 3. While loading, show a spinner
  // if (isLoggedIn)
  //   return (
  //     <FullPage>
  //       <Loader />
  //     </FullPage>
  //   );

  // 4. If there IS a user, render the app
  if (isLoggedIn) return children;
}

export default ProtectedRoute;
