import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import NotificationDetail from '@/component/notification/NotificationDetail'

export const metadata: Metadata = {
    title: "SRM Welkin Admin Login",
    description: "Higher Secondary School Sopore",
}
export default function page() {
    return (
        <div>
            <Layout>
                <NotificationDetail />
            </Layout>
        </div>
    )
}
