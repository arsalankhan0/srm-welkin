"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import apiConfig from '@/api.config.json';
import { useRouter } from "next/navigation";

const MAX_LOGIN_ATTEMPTS = 5; 
const LOCKOUT_DURATION = 30000; 
const API_HOST = apiConfig.API_HOST;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isAccountLocked, setIsAccountLocked] = useState(false);
  const [countdownTime, setCountdownTime] = useState(LOCKOUT_DURATION);
  const router = useRouter();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAccountLocked) {
      intervalId = setInterval(() => {
        setCountdownTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setIsAccountLocked(false);
            setLoginAttempts(0);
          }
          return prevTime - 1000;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isAccountLocked]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill out all fields.", { position: "top-right" });
      return;
    }

    if (isAccountLocked) {
      toast.error("Account is locked. Please try again later.");
      return;
    }

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await axios.post(`${API_HOST}/Adminlogin`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) 
      {
        localStorage.setItem('token', response.data.token);
        const expirationTime = new Date().getTime() + 3600 * 1000;
        localStorage.setItem('expirationTime', expirationTime.toString());

        setPassword("");
        setUsername("");
        router.push("/admin/dashboard");
      } 
      else 
      {
        toast.error("Login failed.");
        console.log(response.data.message);
      }
    } 
    catch (error:any) 
    {
      if (error.response && error.response.status === 401) 
      {
        setLoginAttempts(loginAttempts + 1);
        console.log("Login Times: " + (loginAttempts + 1));
      
        if (loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS) 
        {
          setIsAccountLocked(true);
          setCountdownTime(LOCKOUT_DURATION);
        }
        toast.error("Invalid credentials! Please try again.");
      } 
      else
      {
        console.error("Login error:", error);
        toast.error("An error occurred! Please try again later.");
      }
    } 
    finally 
    {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        {isAccountLocked && (
          <div className="col-xl-12">
            <div className="alert alert-danger" role="alert">
              Too many wrong attempts! Try again after {" "}
              <strong>{Math.ceil(countdownTime / 1000)}</strong>
            </div>
          </div>
        )}
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isAccountLocked}
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
              disabled={isAccountLocked}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput tf__login_check_area">
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn" disabled={isLoading || isAccountLocked}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
