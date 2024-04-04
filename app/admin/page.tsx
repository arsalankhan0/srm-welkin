import type { Metadata } from 'next'
import Dashboard from '@/component/admin/dashboard/Dashboard';

export const metadata: Metadata = {
  title: "SRM Welkin Admin Panel",
  description: "Higher Secondary School Sopore",
}
export default function Page() {

  return (
    <>
      <Dashboard />
    </>
  );
}

