"use client";
import React, { useEffect, useState } from 'react';
import { RiFilePdfLine, RiUserLine, RiBriefcaseLine } from 'react-icons/ri';
import Layout from '../Layout/Layout';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AlumniType } from '@/types';
import axios from 'axios';
import apiConfig from '@/api.config.json';
import { toast } from 'react-toastify';

const ViewFullDetails = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const searchParams = useSearchParams();
    const id: string | null = searchParams.get('id');
    const API_HOST = apiConfig.API_HOST;
    const [alumniDetails, setAlumniDetails] = useState<AlumniType | null>(null);

    useEffect(() => {
        const fetchAlumniDetails = async () => {
            if (id && !Array.isArray(id)) {
                setIsLoading(true);
                try 
                {
                    const response = await axios.get(`${API_HOST}/getAlumniFormById/${id}`);
                    setAlumniDetails(response.data.alumniForm);
                } 
                catch (error) 
                {
                    console.error('Error fetching Alumni Details:', error);
                    toast.error("Error Fetching Alumni Details!");
                } 
                finally 
                {
                    setIsLoading(false);
                }
            }
        };

        fetchAlumniDetails();
    }, [id]);

    return (
        <Layout>
            <div className="container-fluid">
                <h3 className="mt-2">Alumni Details</h3>
                <hr />
                <div className="card h-100" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                    <div className="card-body table table-responsive">
                    {isLoading && <table className='text-center'>Loading...</table>}
                    {alumniDetails && (
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><strong>Image:</strong></td>
                                    <td><img src={alumniDetails.image as string} alt="img" style={{width: '100px'}}/></td>
                                </tr>
                                <tr>
                                    <td><strong>Name:</strong></td>
                                    <td>{alumniDetails.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone Number:</strong></td>
                                    <td>{alumniDetails.phoneNumber.toString()}</td>
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
                            )}
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
                    <Link href="/admin/alumni/managealumni" className="btn btn-dark me-md-2">Back</Link>
                </div>
            </div>
        </Layout>
    );
};

export default ViewFullDetails;
