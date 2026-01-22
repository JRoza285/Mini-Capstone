
import { useState } from 'react';
import { Mail, Phone, MapPin, BookOpen, Award, Users, Calendar, ArrowLeft, FileText, GraduationCap } from 'lucide-react';

const FacultyDetail = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Dummy faculty detail data
  const faculty = {
    name: 'Dr. Sarah Mitchell',
    title: 'Professor of Computer Science',
    department: 'Computer Science',
    email: 's.mitchell@university.edu',
    phone: '(555) 123-4567',
    office: 'Tech Building, Room 301',
    officeHours: 'Monday & Wednesday, 2:00 PM - 4:00 PM',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    
    bio: 'Dr. Sarah Mitchell is a distinguished professor in the Computer Science department with over 15 years of experience in artificial intelligence and machine learning research. She received her Ph.D. from MIT and has published over 50 peer-reviewed papers in top-tier conferences and journals. Her current research focuses on developing ethical AI systems and advancing deep learning techniques for natural language processing.',
    
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'Massachusetts Institute of Technology', year: '2009' },
      { degree: 'M.S. in Computer Science', institution: 'Stanford University', year: '2005' },
      { degree: 'B.S. in Computer Engineering', institution: 'UC Berkeley', year: '2003' }
    ],
    
    research: [
      'Ethical AI and algorithmic fairness',
      'Deep learning for natural language processing',
      'Machine learning interpretability',
      'Neural network optimization',
      'AI applications in healthcare'
    ],
    
    publications: [
      {
        title: 'Towards Interpretable Deep Learning Models for Medical Diagnosis',
        journal: 'Nature Machine Intelligence',
        year: '2024',
        authors: 'Mitchell, S., Chen, L., Anderson, R.'
      },
      {
        title: 'Fairness-Aware Neural Network Training: A Comprehensive Survey',
        journal: 'Journal of Artificial Intelligence Research',
        year: '2023',
        authors: 'Mitchell, S., Kim, D.'
      },
      {
        title: 'Adaptive Learning Rates in Transformer Architectures',
        journal: 'International Conference on Machine Learning (ICML)',
        year: '2023',
        authors: 'Mitchell, S., Williams, T., Zhang, Y.'
      },
      {
        title: 'Bias Mitigation in Large Language Models',
        journal: 'ACM Conference on Fairness, Accountability, and Transparency',
        year: '2022',
        authors: 'Mitchell, S.'
      }
    ],
    
    courses: [
      { code: 'CS 301', name: 'Artificial Intelligence', semester: 'Fall 2025' },
      { code: 'CS 450', name: 'Machine Learning', semester: 'Spring 2026' },
      { code: 'CS 590', name: 'Advanced Topics in Deep Learning', semester: 'Fall 2025' },
      { code: 'CS 499', name: 'Ethics in AI', semester: 'Spring 2026' }
    ],
    
    awards: [
      { title: 'Outstanding Research Award', organization: 'ACM', year: '2024' },
      { title: 'Excellence in Teaching Award', organization: 'University Teaching Council', year: '2023' },
      { title: 'Best Paper Award', organization: 'ICML Conference', year: '2023' },
      { title: 'NSF CAREER Award', organization: 'National Science Foundation', year: '2020' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className="flex items-center text-white hover:text-blue-100 mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Faculty Directory
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Photo and Contact */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-48 h-48 rounded-full border-4 border-white mx-auto mb-6 object-cover"
              />
              
              <div className="text-white space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-blue-100 mb-2">CONTACT INFORMATION</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <a href={`mailto:${faculty.email}`} className="hover:text-blue-100 transition-colors break-all">
                        {faculty.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{faculty.phone}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{faculty.office}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Office Hours:</p>
                        <p className="text-blue-100 text-sm">{faculty.officeHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mt-6">
                  Schedule Appointment
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{faculty.name}</h1>
              <p className="text-xl text-indigo-600 mb-1">{faculty.title}</p>
              <p className="text-gray-600 mb-6">{faculty.department}</p>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-6">
                  {['about', 'research', 'publications', 'courses', 'awards'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 px-1 border-b-2 font-medium transition-colors ${
                        activeTab === tab
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-96">
                {activeTab === 'about' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                      Biography
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{faculty.bio}</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      Education
                    </h3>
                    <div className="space-y-4">
                      {faculty.education.map((edu, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'research' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Interests</h2>
                    <div className="space-y-3">
                      {faculty.research.map((interest, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{interest}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'publications' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-blue-600" />
                      Selected Publications
                    </h2>
                    <div className="space-y-6">
                      {faculty.publications.map((pub, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <h3 className="font-semibold text-gray-900 mb-2">{pub.title}</h3>
                          <p className="text-gray-600 text-sm mb-1">{pub.authors}</p>
                          <p className="text-indigo-600 text-sm">
                            {pub.journal} ({pub.year})
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-blue-600" />
                      Teaching
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {faculty.courses.map((course, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-600 font-semibold text-sm mb-1">{course.code}</p>
                          <h3 className="font-bold text-gray-900 mb-2">{course.name}</h3>
                          <p className="text-gray-600 text-sm">{course.semester}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'awards' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-blue-600" />
                      Honors & Awards
                    </h2>
                    <div className="space-y-4">
                      {faculty.awards.map((award, index) => (
                        <div key={index} className="flex items-start bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                          <Award className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{award.title}</h3>
                            <p className="text-gray-600 text-sm">{award.organization}</p>
                            <p className="text-gray-500 text-sm">{award.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12"></div>
    </div>
  );
};

