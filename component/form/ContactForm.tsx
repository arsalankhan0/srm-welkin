"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiConfig from '@/api.config.json';
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const API_HOST = apiConfig.API_HOST;
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (!name || !email || !message) 
        {
          toast.error("Please fill out all fields.", { position: "top-right" });
          return;
        }
        try 
        {
          setLoading(true);

          const formData = new FormData();
          formData.append('name', name);
          formData.append('email', email);
          formData.append('message', message);

          const response = await axios.post(`${API_HOST}/sendContactEmail`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });

          toast.success("You Form has been recorded.");
        } 
        catch (error:any) 
        {
            toast.error("Something went wrong! Please try again later.");
            console.log(error.response.data);
        }
        finally 
        {
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
        }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-12">
          <textarea
            rows={8}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="common_btn_2" disabled={loading}>
            {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
            {loading ? 'Submitting..' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
