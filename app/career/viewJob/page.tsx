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
              <h3 className="text-xl font-bold mb-4 text-primary">Job Categories</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/jobs/teaching">Teaching</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/jobs/admin">Administration</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/jobs/support">Support Staff</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/jobs/it">IT & Technical</Link>
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
                <h2 className="text-3xl font-semibold mb-6 text-primary">
                  Explore Job Opportunities at Our School
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We are currently hiring for various positions across different departments. Join our passionate team and contribute to creating a positive learning environment. Explore our open job listings and find the perfect fit for your skills and career goals.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Whether you’re a seasoned professional or just starting out, we offer a range of opportunities in teaching, administration, support, and technical roles. At our school, we value diversity, creativity, and commitment to excellence.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our school offers competitive salaries, professional development, and a supportive environment for personal growth. If you’re passionate about making a difference in education, we invite you to apply for the following positions.
                </p>

                {/* Job Listings */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Current Job Openings</h3>
                  <div className="space-y-6">
                    {/* Job Listing 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Senior Teacher (Math)</h4>
                      <p className="text-gray-600 mb-4">
                        Join our teaching team as a Senior Math Teacher and inspire students to excel in mathematics. The ideal candidate will have extensive teaching experience and a passion for helping students develop critical thinking skills.
                      </p>
                      <Button className="bg-primary text-white">View Job</Button>
                    </div>

                    {/* Job Listing 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Administrative Assistant</h4>
                      <p className="text-gray-600 mb-4">
                        As an Administrative Assistant, you’ll be integral to our operations team, providing support in scheduling, communication, and document management. This is a great opportunity for someone with strong organizational skills.
                      </p>
                      <Button className="bg-primary text-white">View Job</Button>
                    </div>

                    {/* Job Listing 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">IT Support Specialist</h4>
                      <p className="text-gray-600 mb-4">
                        We’re looking for an IT Support Specialist to manage and maintain our school’s technology infrastructure. The role involves troubleshooting technical issues, setting up equipment, and providing on-site technical support.
                      </p>
                      <Button className="bg-primary text-white">View Job</Button>
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
