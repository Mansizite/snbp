'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import "/styles/globals.css";

export default function FeeStructurePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay to trigger animation after page load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Adjust delay time to control when animation triggers
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`min-h-screen bg-gray-50 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header */}
      <div
        className={`bg-primary text-white py-16 transition-all duration-500 ease-in-out transform ${loaded ? 'scale-100' : 'scale-110'}`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">School Fee Structure</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Detailed fee structure for the academic year 2025-26
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-all">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/admission" className="text-gray-500 hover:text-primary transition-all">
              Admission
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">School Fee Structure</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div
          className={`lg:col-span-1 bg-white p-6 rounded-lg shadow-md sticky top-24 transition-all duration-500 ${loaded ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">Admission</h3>
          <ul className="space-y-2">
            <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
              <Link href="/admission/admission-form"> Admission Form</Link>
            </li>
            <li className="border-l-4 border-primary pl-3 text-primary font-medium">
              <Link href="/admission/school-fee-structure">School Fee Structure</Link>
            </li>
            <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-all">
              <Link href="/admission/transport-fee-structure">Transport Fee Structure</Link>
            </li>
          </ul>
          <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-semibold text-primary mb-2">Ready to Apply?</h4>
            <p className="text-sm text-gray-600 mb-4">Download the application form or apply online.</p>
            <Button className="w-full mb-2">Apply Online</Button>
            <Button variant="outline" className="w-full">
              Download Form
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`lg:col-span-2 bg-white p-6 rounded-lg shadow-md transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">Fee Structure 2025-26</h2>
          <p className="text-gray-700 mb-4">Dear Parents,</p>
          <p className="text-gray-700 mb-6">
            Below is the detailed fee structure for the academic year 2025-26.
          </p>

          {/* Pre-Primary Section */}
          <h3 className="text-xl font-bold mb-4 text-primary">Pre-Primary Section</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300 transition-all duration-500 hover:scale-105">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-3 px-6 border-b">Class</th>
                  <th className="py-3 px-6 border-b">Tuition Fee</th>
                  <th className="py-3 px-6 border-b">Other Charges</th>
                  <th className="py-3 px-6 border-b">Total</th>
                </tr>
              </thead>
              <tbody>
                {[{"class": "Play Group & Nursery", "tuition": 30000, "other": 4700}, {"class": "LKG & UKG", "tuition": 35000, "other": 4700}].map((fee, index) => (
                  <tr key={index} className="transition-all duration-300 hover:bg-gray-50">
                    <td className="py-3 px-6 border-b">{fee.class}</td>
                    <td className="py-3 px-6 border-b">₹{fee.tuition}</td>
                    <td className="py-3 px-6 border-b">₹{fee.other}</td>
                    <td className="py-3 px-6 border-b">₹{fee.tuition + fee.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Primary & Secondary Section */}
          <h3 className="text-xl font-bold mb-4 text-primary">Primary & Secondary Section</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 transition-all duration-500 hover:scale-105">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-3 px-6 border-b">Grade</th>
                  <th className="py-3 px-6 border-b">Tuition Fee</th>
                  <th className="py-3 px-6 border-b">Other Charges</th>
                  <th className="py-3 px-6 border-b">Total</th>
                </tr>
              </thead>
              <tbody>
                {["Grade I", "Grade II", "Grade III", "Grade IV", "Grade V", "Grade VI to VIII", "Grade IX", "Grade X"].map((grade, index) => {
                  const tuitionFees = [52000, 55000, 57000, 60000, 65000, 65000, 65000, 65000];
                  const otherCharges = [8200, 8200, 8200, 8200, 8200, 8200, 11200, 12200];
                  return (
                    <tr key={index} className="transition-all duration-300 hover:bg-gray-50">
                      <td className="py-3 px-6 border-b">{grade}</td>
                      <td className="py-3 px-6 border-b">₹{tuitionFees[index]}</td>
                      <td className="py-3 px-6 border-b">₹{otherCharges[index]}</td>
                      <td className="py-3 px-6 border-b">₹{tuitionFees[index] + otherCharges[index]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <Link href="/">
              <Button
                variant="outline"
                className="flex items-center transition-all duration-300 hover:bg-gray-200"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
