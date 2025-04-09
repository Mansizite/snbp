import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Target,
  Compass,
  Award,
} from "lucide-react";
import '/styles/globals.css'

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">
            Vision & Mission
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto transition-all duration-300 ease-in-out opacity-90 hover:opacity-100">
            Guiding principles that shape our educational philosophy
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/about" className="text-gray-500 hover:text-primary transition-colors duration-300">
              About
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Vision & Mission</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary transition-all duration-300 hover:text-accent">About Us</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/history">Our History</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/president-desk">President Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/director-desk">Director Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/principal-desk">Principal Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/vision-mission">Vision & Mission</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-4">Contact our admissions office for more information about our school.</p>
                <Button className="w-full transition-all duration-300 hover:bg-primary hover:text-white">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <div className="flex items-center mb-4 transition-all duration-300 transform hover:scale-110">
                <Target className="h-8 w-8 text-primary mr-3 transition-all duration-300 transform hover:scale-110" />
                <h2 className="text-2xl font-bold text-primary transition-all duration-300 transform hover:scale-105">
                  Our Vision
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4 transition-all duration-300 opacity-90 hover:opacity-100">
                  To be a premier educational institution that nurtures global citizens who are innovative thinkers, compassionate leaders, and lifelong learners committed to making a positive impact on society.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mt-4 transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-700 italic transition-all duration-300 opacity-90 hover:opacity-100">
                    "To be reckoned as an institute committed to equipping its students with knowledge and love translated to wisdom, to soar beyond the horizon."
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <div className="flex items-center mb-4 transition-all duration-300 transform hover:scale-110">
                <Compass className="h-8 w-8 text-primary mr-3 transition-all duration-300 transform hover:scale-110" />
                <h2 className="text-2xl font-bold text-primary transition-all duration-300 transform hover:scale-105">
                  Our Mission
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4 transition-all duration-300 opacity-90 hover:opacity-100">
                  To prepare students for tomorrow by setting goals, engaging with the world beyond school, fostering creativity and collaboration, teaching risk-taking, promoting digital literacy with personalized learning, and creating an innovative learning space.
                </p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <div className="flex items-center mb-4 transition-all duration-300 transform hover:scale-110">
                <Award className="h-8 w-8 text-primary mr-3 transition-all duration-300 transform hover:scale-110" />
                <h2 className="text-2xl font-bold text-primary transition-all duration-300 transform hover:scale-105">
                  Our Philosophy
                </h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4 transition-all duration-300 opacity-90 hover:opacity-100">
                  We believe in providing quality education to our students by inculcating Indian values and adapting international methods. Quality education paves the way to a foundation from which young learners can progress towards being global citizens with a vision of the future in a fast-evolving world.
                </p>
                <p className="text-gray-700 mb-4 transition-all duration-300 opacity-90 hover:opacity-100">
                  We plan to achieve this goal through child-centric education, the best class student-teacher ratio, integrated curriculum, and state-of-the-art indoor and outdoor infrastructure.
                </p>
                <p className="text-gray-700 mb-4 transition-all duration-300 opacity-90 hover:opacity-100">
                  Our education philosophy leads emphasis on all aspects of human development—intellectual, social, physical, aesthetic, and moral.
                </p>
                <p className="text-gray-700 mb-4 transition-all duration-300 opacity-90 hover:opacity-100">
                  HENCE SHARPER, THEORY is our philosophy which enables students to achieve all-round excellence in academics, economics as well as extra-curricular activities, making them self-sufficient and FUTURE READY GLOBAL CITIZENS.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 text-primary transition-all duration-300 hover:text-accent">
                Our Core Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-primary">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for the highest standards in all aspects of education, encouraging our students to reach their full potential.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-primary">Integrity</h3>
                  <p className="text-gray-700">
                    We promote honesty, ethical behavior, and accountability in all interactions and decisions.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-primary">Respect</h3>
                  <p className="text-gray-700">
                    We value diversity, foster inclusivity, and treat all individuals with dignity and consideration.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-primary">Innovation</h3>
                  <p className="text-gray-700">
                    We embrace creativity, critical thinking, and adaptability in our approach to teaching and learning.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-primary">Collaboration</h3>
                  <p className="text-gray-700">
                    We believe in the power of teamwork and partnership among students, teachers, parents, and the community.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-primary">Service</h3>
                  <p className="text-gray-700">
                    We encourage compassion, social responsibility, and a commitment to making a positive difference in the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/about">
                <Button variant="outline" className="flex items-center transition-all duration-300 hover:bg-primary hover:text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
