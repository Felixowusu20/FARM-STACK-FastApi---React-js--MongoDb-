// // src/App.jsx

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SubscriberForm from "./component/SubscriberForm";
// import AdminLogin from "./../src/component/Admin/loginpage";
// import AdminLogout from "./../src/component/Admin/logout";
// import NewsletterForm from "./../src/component/Admin/Newsletter";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/" element={<SubscriberForm />} />

//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/logout" element={<AdminLogout />} />
//         <Route path="/admin/newsletter" element={<NewsletterForm />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubscriberForm from "./component/SubscriberForm";
import AdminLogin from "./../src/component/Admin/loginpage";
import AdminLogout from "./../src/component/Admin/logout";
import NewsletterForm from "./../src/component/Admin/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriberForm />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/logout" element={<AdminLogout />} />
        <Route path="/admin/newsletter" element={<NewsletterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

