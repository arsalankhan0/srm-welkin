"use client";
import React, { useEffect, useState } from 'react';
import { RiFilePdfLine, RiUserLine, RiBriefcaseLine } from 'react-icons/ri';
import Layout from '../Layout/Layout';
import Link from 'next/link';
import apiConfig from '@/api.config.json';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { JoinType } from '@/types';

const ViewFullDetails = () => {
    const API_HOST = apiConfig.API_HOST;
    const [joinRequestDetails, setJoinRequestDetails] = useState<JoinType>();
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const searchParams = useSearchParams();
    const id: string | null = searchParams.get('id');

    useEffect(() => {
        const fetchDetails = async () => {
            if (id && !Array.isArray(id)) {
                setIsLoading(true);
                try 
                {
                    const response = await axios.get(`${API_HOST}/getformbyId/${id}`);
                    setJoinRequestDetails(response.data);
                } 
                catch (error) 
                {
                    console.error('Error fetching Request Details:', error);
                } 
                finally 
                {
                    setIsLoading(false);
                }
            }
        };

        fetchDetails();
    }, [id]);


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
                                {isLoading && <table className='text-center'>Loading...</table>}
                                {joinRequestDetails && (
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Name:</strong></td>
                                            <td>{joinRequestDetails.fullName}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phone Number:</strong></td>
                                            <td>{joinRequestDetails.phoneNumber as number}</td>
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
                                            <td><a href={`${joinRequestDetails.resume}`} target="_blank" rel="noopener noreferrer"><RiFilePdfLine className="me-2" />View Resume</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                            <div className="card-body table table-responsive">
                                <h5 className="card-title"><RiBriefcaseLine className="me-2 fs-4" />Job & Qualification</h5>
                                {joinRequestDetails && (
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Position Applied For:</strong></td>
                                            <td>{joinRequestDetails?.position}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Qualification:</strong></td>
                                            <td>{joinRequestDetails.qualification}</td>
                                        </tr>
                                            <tr>
                                                <td><strong>Work Experience:</strong></td>
                                                <td>{(joinRequestDetails.workExperience) ? joinRequestDetails.workExperience : 'NA'}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Company/Institute Name:</strong></td>
                                                <td>{(joinRequestDetails.companyName) ? joinRequestDetails.companyName : 'NA'}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Job Title:</strong></td>
                                                <td>{(joinRequestDetails.jobTitle) ? joinRequestDetails.jobTitle : 'NA'}</td>
                                            </tr>
                                    </tbody>
                                </table>
                                )}
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
