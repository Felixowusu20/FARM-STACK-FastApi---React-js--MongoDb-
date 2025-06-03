// // src/component/Admin/AdminLogout.jsx
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminLogout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     localStorage.removeItem("admin_token");
//     navigate("/loginpage");
//   }, [navigate]);

//   return (
//     <div className="admin-container">
//       <p>Logging out...</p>
//     </div>
//   );
// };

// export default AdminLogout;


// src/component/Admin/logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  }, [navigate]);

  return <p>Logging out...</p>;
}