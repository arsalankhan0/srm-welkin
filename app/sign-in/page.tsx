import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import LoginSection from '@/component/authentication/LoginSection'

export const metadata: Metadata = {
    title: "SRM Welkin Admin Login",
    description: "Higher Secondary School Sopore",
  }
const page = () => {


  return (
    <Layout>
        <LoginSection/>
    </Layout>
  )
}

export default page