import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import AllNotifications from '@/component/notification/AllNotification'

export const metadata: Metadata = {
    title: "SRM Welkin Admin Login",
    description: "Higher Secondary School Sopore",
}
export default function page() {
    return (
        <div>
            <Layout>
                <AllNotifications />
            </Layout>
        </div>
    )
}
