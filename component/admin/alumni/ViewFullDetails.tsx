import React from 'react';
import { RiFilePdfLine, RiUserLine, RiBriefcaseLine } from 'react-icons/ri';
import Layout from '../Layout/Layout';
import Link from 'next/link';

const ViewFullDetails = () => {
    // Sample data for testing
    const alumniDetails = {
        name: "Adil",
        phoneNumber: "9149837563",
        email: "adil@gmail.com",
        address: "123 Baghat, Srinagar",
        designation: "Software Developer",
        batch: "Bachelor's in Computer Science",
        image: "/images/team_1.jpg",
        message: "ABC Company"
    };

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Alumni Details</h3>
                <hr />
                <div className="card h-100" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <div className="card-body table table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><strong>Image:</strong></td>
                                    <td><img src={alumniDetails.image} alt="img" style={{width: '100px'}}/></td>
                                </tr>
                                <tr>
                                    <td><strong>Name:</strong></td>
                                    <td>{alumniDetails.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone Number:</strong></td>
                                    <td>{alumniDetails.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email:</strong></td>
                                    <td>{alumniDetails.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Address:</strong></td>
                                    <td>{alumniDetails.address}</td>
                                </tr>
                                <tr>
                                    <td><strong>Designation:</strong></td>
                                    <td>{alumniDetails.designation}</td>
                                </tr>
                                <tr>
                                    <td><strong>Batch:</strong></td>
                                    <td>{alumniDetails.batch}</td>
                                </tr>
                                <tr>
                                    <td><strong>Message:</strong></td>
                                    <td>{alumniDetails.message}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
                    <Link href="/admin/alumni" className="btn btn-dark me-md-2">Back</Link>
                </div>
            </div>
        </Layout>
    );
};

export default ViewFullDetails;
