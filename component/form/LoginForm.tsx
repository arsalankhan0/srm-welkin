"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import apiConfig from '@/api.config.json';
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const API_HOST = apiConfig.API_HOST;
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill out all fields.", { position: "top-right" });
      return;
    }
    try 
    {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);

      const response = await axios.post(`${API_HOST}/Adminlogin`,formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) 
      {
        setPassword("");
        setEmail(""); 
        router.push("/admin/dashboard");      
      } 
      else 
      {
        toast.error("Login failed.");
        console.log(response.data.message)
      }
    } 
    catch (error) 
    {
      console.error("Login error:", error);
      toast.error("Invalid Credentials!");
    } 
    finally 
    {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>username</label>
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput tf__login_check_area">
            {/* <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remeber Me
              </label>
            </div> */}
            {/* <a href="#" className="w-100 text-end">Forget Password ?</a> */}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
