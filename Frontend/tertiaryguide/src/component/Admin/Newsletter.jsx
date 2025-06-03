import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./newsletter.css";

export default function NewsletterForm() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    if (!token) navigate("/admin/login");
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending newsletter...");

    try {
      const formData = new FormData();
      formData.append("subject", subject);
      formData.append("body", body);

      const response = await axios.post("http://localhost:8000/admin/send-newsletter", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.message);
      setSubject("");
      setBody("");
    } catch (error) {
      setMessage(error.response?.data?.detail || "Failed to send newsletter");
    }
  };

  return (
    <div className="container">
      <div className="newsletter-card">
        <h2>Send Newsletter</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Newsletter Body"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="button">Send</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
