import ContactPageSection from '@/component/contact/ContactPageSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SRM Welkin Contact Page",
  description: "Higher Secondary School Sopore",
}
const page = () => {
  return (
    <Layout>
        <ContactPageSection/>
    </Layout>
  )
}

export default page