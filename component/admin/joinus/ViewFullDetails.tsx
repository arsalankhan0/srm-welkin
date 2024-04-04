import React from 'react';
import { RiFilePdfLine, RiUserLine, RiBriefcaseLine } from 'react-icons/ri';
import Layout from '../Layout/Layout';
import Link from 'next/link';

const ViewFullDetails = () => {
    // Sample data for testing
    const joinRequestDetails = {
        name: "Adil",
        phoneNumber: "9149837563",
        email: "adil@gmail.com",
        address: "123 Baghat, Srinagar",
        positionAppliedFor: "Software Developer",
        qualification: "Bachelor's in Computer Science",
        workExperience: "3 years",
        companyName: "ABC Company",
        jobTitle: "Senior Software Engineer",
        resumeLink: "path/resume.pdf"
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Join Request Details</h3>
                <hr />
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card h-100" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                            <div className="card-body table table-responsive">
                                <h5 className="card-title"><RiUserLine className="me-2 fs-4" />Personal Information</h5>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Name:</strong></td>
                                            <td>{joinRequestDetails.name}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phone Number:</strong></td>
                                            <td>{joinRequestDetails.phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email:</strong></td>
                                            <td>{joinRequestDetails.email}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Address:</strong></td>
                                            <td>{joinRequestDetails.address}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Resume:</strong></td>
                                            <td><a href={joinRequestDetails.resumeLink} target="_blank" rel="noopener noreferrer"><RiFilePdfLine className="me-2" />View Resume</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                            <div className="card-body table table-responsive">
                                <h5 className="card-title"><RiBriefcaseLine className="me-2 fs-4" />Job & Qualification</h5>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Position Applied For:</strong></td>
                                            <td>{joinRequestDetails.positionAppliedFor}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Qualification:</strong></td>
                                            <td>{joinRequestDetails.qualification}</td>
                                        </tr>
                                        {joinRequestDetails.workExperience && (
                                            <>
                                                <tr>
                                                    <td><strong>Work Experience:</strong></td>
                                                    <td>{joinRequestDetails.workExperience}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Company/Institute Name:</strong></td>
                                                    <td>{joinRequestDetails.companyName}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Job Title:</strong></td>
                                                    <td>{joinRequestDetails.jobTitle}</td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
                    <Link href="/admin/joinus/" className="btn btn-dark me-md-2">Back</Link>
                </div>
            </div>
        </Layout>
    );
};

export default ViewFullDetails;
