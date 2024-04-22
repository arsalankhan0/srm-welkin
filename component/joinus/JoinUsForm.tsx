"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import apiConfig from '@/api.config.json';

const JoinUsForm = () => {
    const API_HOST = apiConfig.API_HOST;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [position, setPosition] = useState("");
    const [qualification, setQualification] = useState("");
    const [workExperience, setWorkExperience] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [resume, setResume] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const resumeSize = 5;

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!fullName || !email || !phone || !address || !position || !qualification || !resume) 
        {
            toast.error("Please fill out all fields.", { position: "top-right" });
        } 
        else 
        {
            // Validate work experience, company name, and job title together
            if (workExperience || companyName || jobTitle) {
                if (!workExperience) {
                    toast.error("Please enter work experience.", { position: "top-right" });
                    return;
                }
                if (!companyName) {
                    toast.error("Please enter company/institute name.", { position: "top-right" });
                    return;
                }
                if (!jobTitle) {
                    toast.error("Please enter job title.", { position: "top-right" });
                    return;
                }
            }
            // Validating resume
            if (resume) 
            {
                if (!resume.name.toLowerCase().endsWith(".pdf") && !resume.name.toLowerCase().endsWith(".doc") && !resume.name.toLowerCase().endsWith(".docx")) {
                    toast.error("Resume must be in PDF or DOC format.", { position: "top-right" });
                    return;
                }

                if (resume.size > resumeSize * 1024 * 1024) {
                    toast.error(`Resume size should be less than ${resumeSize} MB.`, { position: "top-right" });
                    return;
                }
            }

            const formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("email", email);
            formData.append("phoneNumber", phone);
            formData.append("address", address);
            formData.append("position", position);
            formData.append("qualification", qualification);
            formData.append("workExperience", workExperience.toString());
            formData.append("companyName", companyName);
            formData.append("jobTitle", jobTitle);
            formData.append("resume", resume!);

            try 
            {
                setLoading(true);
                await axios.post(`${API_HOST}/submit`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                
                toast.success("Record Submitted successfully!", {
                    position: "top-right",
                });
            } 
            catch (error) 
            {
                console.error("Error submitting form:", error);
                toast.error("Failed to submit form! Please try again later.");
            }
            finally
            {
                setFullName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setPosition("");
                setQualification("");
                setWorkExperience("");
                setCompanyName("");
                setJobTitle("");
                setLoading(false);
                if (fileInputRef.current) 
                {
                    fileInputRef.current.value = "";
                }
            }
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Full Name <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Email <span className="text-danger">*</span></label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Phone <span className="text-danger">*</span></label>
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            pattern="[0-9]{10}"
                            onChange={(e) => {
                                const input = e.target.value;
                                (input.match(/^[\d]{0,10}$/)) && setPhone(input);
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Address <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Position Applied For <span className="text-danger">*</span></label>
                        <div className="w-100">
                            <select
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required
                                className="w-100"
                                style={{border: '1px solid #ddd'}}
                            >
                                <option value="">--Select--</option>
                                <option value="English">English</option>
                                <option value="Maths">Maths</option>
                                <option value="Science">Science</option>
                                <option value="Urdu">Urdu</option>
                                <option value="SST">S.S.T</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Qualification <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            placeholder="Qualification"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Work Experience (in years if any)</label>
                        <input
                            type="number"
                            placeholder="Work Experience"
                            value={workExperience}
                            min={0}
                            max={40}
                            onChange={(e) => setWorkExperience(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Company/Institute Name</label>
                        <input
                            type="text"
                            placeholder="Company/Institute Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="tf__login_imput">
                        <label>Job Title</label>
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_imput">
                        <label>Resume Upload (pdf/doc) <span className="text-danger">*</span></label>
                        <input
                            type="file"
                            accept=".pdf,.doc"
                            ref={fileInputRef}
                            onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    setResume(e.target.files[0]);
                                }
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_imput">
                        {/* <button type="submit" className="common_btn">Submit</button> */}
                        <button type="submit" className="common_btn" disabled={loading}>
                                {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                {loading ? 'Submitting' : 'Submit'}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default JoinUsForm;

