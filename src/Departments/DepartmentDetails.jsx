
import { useState } from 'react';
import { ArrowLeft, Users, GraduationCap, Award, BookOpen, TrendingUp, Mail, Phone, MapPin, Globe, Calendar, FileText, Star } from 'lucide-react';

const DepartmentDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy department detail data
  const department = {
    name: 'Computer Science',
    college: 'College of Engineering',
    description: 'The Department of Computer Science is dedicated to advancing the frontiers of computing through innovative research, excellent teaching, and service to the profession and society. Our department offers a comprehensive range of programs designed to prepare students for successful careers in academia, industry, and entrepreneurship.',
    ranking: '#15 Nationally',
    chairperson: {
      name: 'Dr. Michael Zhang',
      email: 'm.zhang@university.edu',
      phone: '(555) 123-4567',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    contact: {
      email: 'cs.dept@university.edu',
      phone: '(555) 100-2001',
      location: 'Tech Building, 3rd Floor',
      website: 'cs.university.edu'
    },
    stats: {
      facultyCount: 24,
      studentCount: 450,
      undergradCount: 320,
      gradCount: 130,
      phdCandidates: 45,
      researchGrants: '$8.5M',
      publications: 120
    },
    mission: 'To educate the next generation of computer scientists and engineers, conduct cutting-edge research that advances the state of the art in computing, and serve the broader community through technology transfer and outreach.',
    
    programs: [
      {
        level: 'Undergraduate',
        degrees: [
          { name: 'B.S. in Computer Science', description: 'Core program covering algorithms, software engineering, and systems' },
          { name: 'B.S. in Data Science', description: 'Specialized program in data analytics and machine learning' },
          { name: 'Minor in Computer Science', description: 'Complementary program for non-CS majors' }
        ]
      },
      {
        level: 'Graduate',
        degrees: [
          { name: 'M.S. in Computer Science', description: 'Advanced study in specialized areas of computing' },
          { name: 'M.S. in Artificial Intelligence', description: 'Focus on AI, machine learning, and deep learning' },
          { name: 'Ph.D. in Computer Science', description: 'Research-focused doctoral program' }
        ]
      }
    ],

    researchAreas: [
      {
        name: 'Artificial Intelligence',
        description: 'Machine learning, deep learning, natural language processing, and computer vision',
        faculty: 8,
        projects: 15
      },
      {
        name: 'Cybersecurity',
        description: 'Network security, cryptography, privacy, and secure systems',
        faculty: 5,
        projects: 10
      },
      {
        name: 'Data Science',
        description: 'Big data analytics, data mining, and statistical computing',
        faculty: 6,
        projects: 12
      },
      {
        name: 'Software Engineering',
        description: 'Software development methodologies, testing, and quality assurance',
        faculty: 5,
        projects: 8
      }
    ],

    facultyHighlights: [
      { name: 'Dr. Sarah Mitchell', title: 'Professor', specialty: 'Artificial Intelligence' },
      { name: 'Dr. David Kim', title: 'Associate Professor', specialty: 'Cybersecurity' },
      { name: 'Dr. Jennifer Lee', title: 'Assistant Professor', specialty: 'Data Science' },
      { name: 'Dr. Robert Chen', title: 'Professor', specialty: 'Software Engineering' }
    ],

    facilities: [
      { name: 'AI Research Lab', description: 'State-of-the-art GPU clusters for deep learning research' },
      { name: 'Cybersecurity Lab', description: 'Advanced network security testing and analysis equipment' },
      { name: 'Innovation Studio', description: 'Collaborative workspace for student projects and startups' },
      { name: 'High-Performance Computing Center', description: 'Shared computing resources for large-scale research' }
    ],

    achievements: [
      { year: '2024', achievement: 'Received $2.5M NSF grant for AI research' },
      { year: '2023', achievement: 'Best Paper Award at ICML Conference' },
      { year: '2023', achievement: 'Launched new MS in Artificial Intelligence program' },
      { year: '2022', achievement: 'Ranked Top 15 CS department nationally' }
    ],

    upcomingEvents: [
      { date: 'Feb 15, 2026', title: 'Distinguished Lecture Series: AI Ethics', location: 'Auditorium A' },
      { date: 'Feb 28, 2026', title: 'Career Fair - Tech Companies', location: 'Student Center' },
      { date: 'Mar 10, 2026', title: 'Research Symposium', location: 'Tech Building' },
      { date: 'Mar 20, 2026', title: 'Hackathon 2026', location: 'Innovation Studio' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className="flex items-center text-white hover:text-indigo-100 mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Departments
          </button>
        </div>
      </div>

      {/* Department Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Chair Info */}
            <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
              <div className="text-center mb-6">
                <img
                  src={department.chairperson.image}
                  alt={department.chairperson.name}
                  className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-4 object-cover"
                />
                <h3 className="text-white font-semibold text-lg mb-1">Department Chair</h3>
                <p className="text-xl text-white font-bold">{department.chairperson.name}</p>
              </div>

              <div className="text-white space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-indigo-100 mb-3">CONTACT INFORMATION</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-indigo-100">Department Email</p>
                        <a href={`mailto:${department.contact.email}`} className="hover:text-indigo-100 transition-colors text-sm">
                          {department.contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-indigo-100">Phone</p>
                        <span className="text-sm">{department.contact.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-indigo-100">Location</p>
                        <span className="text-sm">{department.contact.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-indigo-100">Website</p>
                        <a href={`https://${department.contact.website}`} className="hover:text-indigo-100 transition-colors text-sm">
                          {department.contact.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-indigo-400">
                  <h3 className="text-sm font-semibold text-indigo-100 mb-3">QUICK STATS</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-2xl font-bold">{department.stats.facultyCount}</p>
                      <p className="text-xs text-indigo-100">Faculty</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{department.stats.studentCount}</p>
                      <p className="text-xs text-indigo-100">Students</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{department.stats.researchGrants}</p>
                      <p className="text-xs text-indigo-100">Research Funding</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{department.stats.publications}</p>
                      <p className="text-xs text-indigo-100">Publications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{department.name}</h1>
                  <p className="text-xl text-indigo-600 mb-1">{department.college}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {department.ranking}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-6 overflow-x-auto">
                  {['overview', 'programs', 'research', 'faculty', 'facilities', 'events'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 px-1 border-b-2 font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab
                          ? 'border-indigo-600 text-indigo-600'
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
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Department</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{department.description}</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{department.mission}</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recent Achievements</h3>
                    <div className="space-y-3">
                      {department.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                          <Star className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-green-600 font-semibold">{achievement.year}</p>
                            <p className="text-gray-900">{achievement.achievement}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'programs' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Programs</h2>
                    {department.programs.map((program, index) => (
                      <div key={index} className="mb-8">
                        <h3 className="text-xl font-bold text-indigo-600 mb-4">{program.level} Programs</h3>
                        <div className="space-y-4">
                          {program.degrees.map((degree, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-gray-900 mb-2">{degree.name}</h4>
                              <p className="text-gray-700 text-sm">{degree.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'research' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-2 text-indigo-600" />
                      Research Areas
                    </h2>
                    <div className="grid gap-6">
                      {department.researchAreas.map((area, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                          <p className="text-gray-700 mb-4">{area.description}</p>
                          <div className="flex gap-4 text-sm">
                            <div className="flex items-center text-indigo-600">
                              <Users className="w-4 h-4 mr-1" />
                              <span>{area.faculty} Faculty</span>
                            </div>
                            <div className="flex items-center text-indigo-600">
                              <FileText className="w-4 h-4 mr-1" />
                              <span>{area.projects} Active Projects</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faculty' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-indigo-600" />
                      Featured Faculty
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {department.facultyHighlights.map((faculty, index) => (
                        <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-lg border border-indigo-200">
                          <h3 className="font-bold text-gray-900 text-lg">{faculty.name}</h3>
                          <p className="text-indigo-600 text-sm mb-1">{faculty.title}</p>
                          <p className="text-gray-600 text-sm">Specialty: {faculty.specialty}</p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium">
                      View All Faculty Members
                    </button>
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Facilities</h2>
                    <div className="space-y-4">
                      {department.facilities.map((facility, index) => (
                        <div key={index} className="bg-white border-l-4 border-indigo-500 p-5 rounded-r-lg shadow-sm">
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{facility.name}</h3>
                          <p className="text-gray-700">{facility.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'events' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Calendar className="w-6 h-6 mr-2 text-indigo-600" />
                      Upcoming Events
                    </h2>
                    <div className="space-y-4">
                      {department.upcomingEvents.map((event, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg mb-1">{event.title}</h3>
                              <p className="text-gray-600 text-sm mb-2">{event.location}</p>
                            </div>
                            <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap">
                              {event.date}
                            </span>
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

