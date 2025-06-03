// import React ,{useState} from "react";
// import axioss from "axios";
// import  "./subscriberform.css";


// export default function SubscriberForm() {
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");


//   const handleSubscriber = async(e) => {
//     e.preventDefault();
//     setMessage("Loading...");
//     try{
//         const response = await axioss.post("http://localhost:8000/subscribe", {email});
//         setMessage(response.data.message);
//         setEmail("");
//     }catch(error){
//         setMessage(error.response?.data?.detail || "An error subscribing");
//     }
//   }

//   return (
//     <div className="container" >
//       <form onSubmit={handleSubscriber} className="form">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//         <button type="submit" className="button">Subscribe</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );

// }



import React, { useState } from "react";
import axioss from "axios";
import "./subscriberform.css";

export default function SubscriberForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscriber = async (e) => {
    e.preventDefault();
    setMessage("Loading...");
    try {
      const response = await axioss.post("http://localhost:8000/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setMessage(error.response?.data?.detail || "An error subscribing");
    }
  };

  return (
    <div className="container">
      <h2 className="newsletter-heading">Welcome To TertiaryGuide NewsLetter</h2>
      <p className="newsletter-subheading">
        Subscribe to our newsletter and never miss out on important updates and insights.
      </p>
      <form onSubmit={handleSubscriber} className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="button">Subscribe</button>
      </form>
      <p className={message.toLowerCase().includes("error") ? "error" : ""}>{message}</p>
    </div>
  );
}
