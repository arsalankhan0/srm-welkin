import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
import Dashboard from '@/component/admin/dashboard/Dashboard'
import SideNav from '@/component/admin/side-nav/SideNav'
 
export const metadata: Metadata = {
  title: "SRM Welkin Admin Panel",
  description: "Higher Secondary School Sopore",
}
const page = () => {
  return (
    <>
        {/* <SideNav /> */}
        <Dashboard />
    </>
  )
}

export default page