"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";

const JoinUsForm = () => {
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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!fullName || !email || !phone || !address || !position || !qualification || !workExperience || !companyName || !jobTitle || !resume) 
        {
            toast.error("Please fill out all fields.", { position: "top-right" });
        } 
        else 
        {
            // If the form is successfully submitted, show a success toast
            toast.success("Record Submitted successfully!", {
                position: "top-right",
            });

            // Clear form fields
            setFullName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setPosition("");
            setQualification("");
            setWorkExperience("");
            setCompanyName("");
            setJobTitle("");
            setResume(null);
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
                            onChange={(e) => setWorkExperience(e.target.value)}
                            required
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
                            required
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
                            required
                        />
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tf__login_imput">
                        <label>Resume Upload (pdf/doc) <span className="text-danger">*</span></label>
                        <input
                            type="file"
                            accept=".pdf,.doc"
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
                        <button type="submit" className="common_btn">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default JoinUsForm;
