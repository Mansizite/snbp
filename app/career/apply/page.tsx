import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 animate-fadeIn delay-100">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">Application Process</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/apply">How to Apply</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/apply/requirements">Job Requirements</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/apply/benefits">Employee Benefits</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/apply/contact">Contact Us</Link>
                </li>
              </ul>
              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our admissions office for more information about our school.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8 animate-fadeIn delay-200">
            <div className="bg-white p-10 rounded-lg shadow-md">
              <div className="flex justify-center">
                {/* Optional Image or Icon */}
              </div>
              <div className="flex flex-col items-start mb-5">
                <h2 className="text-3xl font-semibold mb-6 text-primary">How to Apply for a Job at Our School</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We’re excited to have you consider applying for a position at our school! Below, you’ll find the steps to guide you through our application process. We look forward to receiving your application.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our application process is designed to be simple and straightforward. Whether you're applying for a teaching, administrative, or support role, we are here to support you throughout every step of your journey.
                </p>

                {/* Application Steps */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Application Steps</h3>
                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Step 1: Review Open Positions</h4>
                      <p className="text-gray-600 mb-4">
                        Before applying, take a moment to explore the available positions that match your skills and interests. Browse through our job categories to learn about the different opportunities we offer.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Step 2: Prepare Your Application</h4>
                      <p className="text-gray-600 mb-4">
                        Ensure that you have an updated resume and cover letter. Highlight your relevant experience and explain why you're passionate about joining our team. We value candidates who are dedicated and eager to make a difference.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Step 3: Submit Your Application</h4>
                      <p className="text-gray-600 mb-4">
                        Once you're ready, submit your application through our online form. Be sure to provide all the necessary information and upload your resume and cover letter. We’ll review your application and get in touch with you if you’re selected for an interview.
                      </p>
                      <Button className="bg-primary text-white">Apply Now</Button>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Step 4: Interview Process</h4>
                      <p className="text-gray-600 mb-4">
                        If your application is shortlisted, you'll be invited for an interview. This will be your chance to learn more about the role, our school culture, and how you can contribute to our mission. We'll also get to know you better during this stage.
                      </p>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Step 5: Join Our Team</h4>
                      <p className="text-gray-600 mb-4">
                        After a successful interview, you’ll receive an offer to join our team. We’ll provide you with all the necessary details and support to help you get started on your exciting new career path with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/">
                <Button variant="outline" className="flex items-center transition-all duration-300 hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
