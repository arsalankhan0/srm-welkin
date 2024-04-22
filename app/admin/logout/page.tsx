"use client"
import Layout from "@/component/admin/Layout/Layout";
import { useRouter } from "next/navigation";

export default function page(){
    const router = useRouter();
    router.push("/sign-in");
    return (
        <Layout>
            <h3>Logging out...</h3>
        </Layout>
    )
}