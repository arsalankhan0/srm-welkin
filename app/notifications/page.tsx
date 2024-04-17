import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import NotificationDetails from '@/component/notification/NotificationDetails'

export const metadata: Metadata = {
    title: "SRM Welkin Admin Login",
    description: "Higher Secondary School Sopore",
}
export default function page() {
    return (
        <div>
            <Layout>
                <NotificationDetails />
            </Layout>
        </div>
    )
}
