"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page(){
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        
        router.push("/sign-in");
    }, []);

    return (
        <Layout>
            <h3>Logging out...</h3>
        </Layout>
    )
}