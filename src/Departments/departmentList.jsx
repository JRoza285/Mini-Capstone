// retreives a list of departments

import { Link } from "react-router";

export default function DepartmentList({ department }) {
    return (
        <ul>
            {department.map((department) => (
                <DepartmentListItem key={department.id} department={department} />
            ))}
        </ul>
    );
}

function BookListItem({ department }) {
    return (
        <li classname= "department-item">
            <Link to={"/department/" + department.id}>{department.name}</Link>
        </li>
    )
}


import { useState } from 'react';
import { Search, Users, GraduationCap, Building2, ChevronDown, ChevronUp, BookOpen, TrendingUp, Award, Mail, Phone } from 'lucide-react';

const DepartmentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [expandedId, setExpandedId] = useState(null);

  // Dummy department data
  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      college: 'College of Engineering',
      description: 'Preparing students for careers in software development, artificial intelligence, and cutting-edge technology.',
      facultyCount: 24,
      studentCount: 450,
      programsOffered: ['B.S. Computer Science', 'M.S. Computer Science', 'Ph.D. Computer Science'],
      researchAreas: ['Artificial Intelligence', 'Cybersecurity', 'Data Science', 'Software Engineering'],
      ranking: '#15 Nationally',
      chairperson: 'Dr. Michael Zhang',
      email: 'cs.dept@university.edu',
      phone: '(555) 100-2001',
      location: 'Tech Building, 3rd Floor',
      website: 'cs.university.edu'
    },
    {
      id: 2,
      name: 'Mathematics',
      college: 'College of Arts and Sciences',
      description: 'Exploring pure and applied mathematics with a focus on analytical thinking and problem-solving.',
      facultyCount: 18,
      studentCount: 320,
      programsOffered: ['B.S. Mathematics', 'M.S. Applied Mathematics', 'Ph.D. Mathematics'],
      researchAreas: ['Topology', 'Number Theory', 'Applied Mathematics', 'Statistics'],
      ranking: '#22 Nationally',
      chairperson: 'Dr. Patricia Chen',
      email: 'math.dept@university.edu',
      phone: '(555) 100-2002',
      location: 'Math Hall, 2nd Floor',
      website: 'math.university.edu'
    },
    {
      id: 3,
      name: 'Biology',
      college: 'College of Natural Sciences',
      description: 'Advancing understanding of life sciences through research in molecular biology, ecology, and genetics.',
      facultyCount: 32,
      studentCount: 580,
      programsOffered: ['B.S. Biology', 'M.S. Biology', 'Ph.D. Biological Sciences'],
      researchAreas: ['Molecular Biology', 'Ecology', 'Genetics', 'Marine Biology'],
      ranking: '#18 Nationally',
      chairperson: 'Dr. Robert Green',
      email: 'bio.dept@university.edu',
      phone: '(555) 100-2003',
      location: 'Science Center, 4th Floor',
      website: 'bio.university.edu'
    },
    {
      id: 4,
      name: 'Physics',
      college: 'College of Natural Sciences',
      description: 'Investigating the fundamental laws of nature from quantum mechanics to astrophysics.',
      facultyCount: 21,
      studentCount: 280,
      programsOffered: ['B.S. Physics', 'M.S. Physics', 'Ph.D. Physics'],
      researchAreas: ['Quantum Mechanics', 'Astrophysics', 'Particle Physics', 'Condensed Matter'],
      ranking: '#20 Nationally',
      chairperson: 'Dr. Sarah Johnson',
      email: 'physics.dept@university.edu',
      phone: '(555) 100-2004',
      location: 'Physics Lab Building',
      website: 'physics.university.edu'
    },
    {
      id: 5,
      name: 'English Literature',
      college: 'College of Arts and Sciences',
      description: 'Cultivating critical thinking and communication through the study of literature and writing.',
      facultyCount: 16,
      studentCount: 350,
      programsOffered: ['B.A. English', 'M.A. English Literature', 'MFA Creative Writing'],
      researchAreas: ['Victorian Literature', 'American Literature', 'Literary Theory', 'Creative Writing'],
      ranking: '#25 Nationally',
      chairperson: 'Dr. Elizabeth Taylor',
      email: 'english.dept@university.edu',
      phone: '(555) 100-2005',
      location: 'Humanities Building, Room 220',
      website: 'english.university.edu'
    },
    {
      id: 6,
      name: 'Psychology',
      college: 'College of Social Sciences',
      description: 'Understanding human behavior and mental processes through scientific research and clinical practice.',
      facultyCount: 28,
      studentCount: 520,
      programsOffered: ['B.A. Psychology', 'M.S. Psychology', 'Ph.D. Clinical Psychology'],
      researchAreas: ['Cognitive Psychology', 'Neuroscience', 'Clinical Psychology', 'Developmental Psychology'],
      ranking: '#17 Nationally',
      chairperson: 'Dr. David Martinez',
      email: 'psych.dept@university.edu',
      phone: '(555) 100-2006',
      location: 'Social Sciences Building, 4th Floor',
      website: 'psychology.university.edu'
    },
    {
      id: 7,
      name: 'Chemistry',
      college: 'College of Natural Sciences',
      description: 'Advancing chemical sciences through innovative research in organic, inorganic, and physical chemistry.',
      facultyCount: 26,
      studentCount: 410,
      programsOffered: ['B.S. Chemistry', 'M.S. Chemistry', 'Ph.D. Chemistry'],
      researchAreas: ['Organic Chemistry', 'Biochemistry', 'Physical Chemistry', 'Materials Science'],
      ranking: '#19 Nationally',
      chairperson: 'Dr. Jennifer Wu',
      email: 'chem.dept@university.edu',
      phone: '(555) 100-2007',
      location: 'Chemistry Lab, 2nd Floor',
      website: 'chem.university.edu'
    },
    {
      id: 8,
      name: 'History',
      college: 'College of Arts and Sciences',
      description: 'Exploring human civilization and cultural heritage across time periods and regions.',
      facultyCount: 19,
      studentCount: 295,
      programsOffered: ['B.A. History', 'M.A. History', 'Ph.D. History'],
      researchAreas: ['American History', 'European History', 'World History', 'Public History'],
      ranking: '#23 Nationally',
      chairperson: 'Dr. Thomas Anderson',
      email: 'history.dept@university.edu',
      phone: '(555) 100-2008',
      location: 'Humanities Building, 1st Floor',
      website: 'history.university.edu'
    },
    {
      id: 9,
      name: 'Business Administration',
      college: 'College of Business',
      description: 'Developing future business leaders through rigorous academic training and real-world experience.',
      facultyCount: 35,
      studentCount: 720,
      programsOffered: ['BBA', 'MBA', 'Executive MBA', 'Ph.D. Business'],
      researchAreas: ['Finance', 'Marketing', 'Management', 'Entrepreneurship'],
      ranking: '#12 Nationally',
      chairperson: 'Dr. Amanda Foster',
      email: 'business.dept@university.edu',
      phone: '(555) 100-2009',
      location: 'Business School Complex',
      website: 'business.university.edu'
    },
    {
      id: 10,
      name: 'Economics',
      college: 'College of Social Sciences',
      description: 'Analyzing economic systems and policy through theoretical and empirical research.',
      facultyCount: 22,
      studentCount: 385,
      programsOffered: ['B.A. Economics', 'M.A. Economics', 'Ph.D. Economics'],
      researchAreas: ['Macroeconomics', 'Microeconomics', 'Econometrics', 'Development Economics'],
      ranking: '#21 Nationally',
      chairperson: 'Dr. Richard Lee',
      email: 'econ.dept@university.edu',
      phone: '(555) 100-2010',
      location: 'Social Sciences Building, 2nd Floor',
      website: 'econ.university.edu'
    }
  ];

  const colleges = ['all', 'College of Engineering', 'College of Arts and Sciences', 'College of Natural Sciences', 'College of Social Sciences', 'College of Business'];

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.researchAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCollege = selectedCollege === 'all' || dept.college === selectedCollege;
    return matchesSearch && matchesCollege;
  });

  const sortedDepartments = [...filteredDepartments].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'college') {
      return a.college.localeCompare(b.college);
    } else if (sortBy === 'students') {
      return b.studentCount - a.studentCount;
    } else if (sortBy === 'faculty') {
      return b.facultyCount - a.facultyCount;
    }
    return 0;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const totalStudents = departments.reduce((sum, dept) => sum + dept.studentCount, 0);
  const totalFaculty = departments.reduce((sum, dept) => sum + dept.facultyCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Department List</h1>
          <p className="text-indigo-100 text-lg">Complete directory of academic departments</p>
          <div className="mt-4 flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              <span>{departments.length} Departments</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{totalFaculty} Total Faculty</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              <span>{totalStudents} Total Students</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* College Filter */}
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                {colleges.map(college => (
                  <option key={college} value={college}>
                    {college === 'all' ? 'All Colleges' : college}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="name">Sort by Name</option>
                <option value="college">Sort by College</option>
                <option value="students">Sort by Student Count</option>
                <option value="faculty">Sort by Faculty Count</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedDepartments.length} of {departments.length} departments
          </div>
        </div>

        {/* Department List */}
        <div className="space-y-4">
          {sortedDepartments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Main Row */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(dept.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
                          <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {dept.ranking}
                          </span>
                        </div>
                        <p className="text-indigo-600 font-medium text-sm">{dept.college}</p>
                        <p className="text-gray-600 text-sm mt-1">Chair: {dept.chairperson}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        {expandedId === dept.id ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </button>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center text-blue-600 mb-1">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="text-xs font-semibold">FACULTY</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{dept.facultyCount}</p>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="flex items-center text-purple-600 mb-1">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span className="text-xs font-semibold">STUDENTS</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{dept.studentCount}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex items-center text-green-600 mb-1">
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span className="text-xs font-semibold">PROGRAMS</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{dept.programsOffered.length}</p>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-3">
                        <div className="flex items-center text-orange-600 mb-1">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          <span className="text-xs font-semibold">RESEARCH</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{dept.researchAreas.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === dept.id && (
                <div className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
                        Programs Offered
                      </h4>
                      <ul className="space-y-2">
                        {dept.programsOffered.map((program, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-start">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {program}
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold text-gray-900 mt-6 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-indigo-600" />
                        Research Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.researchAreas.map((area, index) => (
                          <span key={index} className="bg-white border border-indigo-200 text-indigo-700 text-xs px-3 py-1 rounded-full">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                      <div className="space-y-3 bg-white rounded-lg p-4">
                        <div className="flex items-start text-sm">
                          <Mail className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">Email</p>
                            <a href={`mailto:${dept.email}`} className="text-indigo-600 hover:underline">
                              {dept.email}
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start text-sm">
                          <Phone className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">Phone</p>
                            <p className="text-gray-700">{dept.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-start text-sm">
                          <Building2 className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-gray-500 text-xs">Location</p>
                            <p className="text-gray-700">{dept.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium">
                      View Full Details
                    </button>
                    <button className="px-6 py-2.5 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
                      Visit Website
                    </button>
                    <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      Contact Department
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {sortedDepartments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500 text-lg">No departments found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCollege('all');
              }}
              className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentList;