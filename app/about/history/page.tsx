import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function OurHistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50 fade-in">
      {/* Header */}
      <div className="bg-primary text-white py-16 fade-up">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            The journey of excellence and innovation that shaped SNBP's INTERNATIONAL School
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b fade-up">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/about" className="text-gray-500 hover:text-primary">
              About
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Our History</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 fade-in">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">About Us</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/about/history">Our History</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/vision-mission">Vision & Mission</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our admissions office for more information about our school's history and legacy.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md fade-in">
              <h2 className="text-2xl font-bold mb-4 text-primary">The SNBP's Story</h2>
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/IMG_20230621_084855.jpg"
                  alt="SNBP School Historical Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                SNBP's INTERNATIONAL School was established in 2016 with a vision to provide world-class education that
                nurtures excellence, builds character, and inspires future leaders. What began as a small institution
                with just a handful of students has now grown into one of the most prestigious educational institutions
                in the region.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Dr. Prabhakar Bhosale, believed that education should go beyond textbooks and exams. He
                envisioned a school that would foster creativity, critical thinking, and a global perspective among
                students. His pioneering approach to education laid the foundation for what SNBP's is today.
              </p>
              <p className="text-gray-700">
                Over the years, SNBP's has evolved and adapted to changing educational needs while staying true to its
                core values of excellence, integrity, and innovation. Today, we continue to build on our rich legacy
                while embracing modern teaching methodologies and technologies.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white p-6 rounded-lg shadow-md fade-in">
              <h2 className="text-2xl font-bold mb-6 text-primary">Our Journey Through the Years</h2>

              <div className="space-y-8">
                {/* 2016 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2016</h3>
                  </div>
                  <p className="text-gray-700">
                    SNBP's International School expanded its academic scope by introducing new curriculum options for
                    senior students. The school also launched a dedicated Science and Technology lab to nurture students'
                    interest in STEM education.
                  </p>
                </div>

                {/* 2019 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2019</h3>
                  </div>
                  <p className="text-gray-700">
                    The school inaugurated a new state-of-the-art performing arts auditorium and a dedicated sports
                    complex to help students explore their creative and physical potential. The school continued to
                    focus on providing a well-rounded education.
                  </p>
                </div>

                {/* 2021 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2021</h3>
                  </div>
                  <p className="text-gray-700">
                    The school successfully transitioned back to in-person learning with strict health protocols. It
                    also enhanced its digital infrastructure and introduced hybrid learning models that allowed students
                    to engage both in the classroom and online.
                  </p>
                </div>

                {/* 2022 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2022</h3>
                  </div>
                  <p className="text-gray-700">
                    With the successful return to in-person learning, the school focused on expanding its STEM and
                    sustainability programs. It also increased its emphasis on mental and emotional well-being through
                    various student support initiatives.
                  </p>
                </div>

                {/* 2025 (Present) */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2025 - Present</h3>
                  </div>
                  <p className="text-gray-700">
                    As the school continues to evolve, the focus is now on preparing students for the future with digital
                    tools, sustainable practices, and a well-rounded education. The school remains committed to providing
                    an environment that fosters innovation and creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/">
                <Button variant="outline" className="flex items-center">
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
