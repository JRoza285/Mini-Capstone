// displays a list of faculty members from the database

import { Link } from "react-router";

export default function FacultyList({ faculty }) {
    return (
        <ul>
            {faculty.map((member) => (
                <FacultyListItem key={member.id} member={member} />
            ))}
        </ul>
    );
}

function FacultyListItem({ member }) {
    return (
        <li classname="faculty-list-item">
            {member.coverimage && (
                <img
                src={member.coverimage}
                alt={member.name}
                />
            )}
            <div classname="member-name">
                <h3>
                    <Link to={"/member/" + member.id}>{member.name}</Link>
                </h3>
            </div>
            </li>
    );
}




\\
import { useState } from 'react';
import { Search, Filter, Mail, Phone, MapPin, ChevronDown, ChevronUp, Building2, Users } from 'lucide-react';

const FacultyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [expandedId, setExpandedId] = useState(null);

  // Dummy faculty data
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      title: 'Professor',
      department: 'Computer Science',
      email: 's.mitchell@university.edu',
      phone: '(555) 123-4567',
      office: 'Tech Building, Room 301',
      specialization: 'Artificial Intelligence, Machine Learning',
      officeHours: 'Mon & Wed, 2:00 PM - 4:00 PM',
      courses: ['CS 301: Artificial Intelligence', 'CS 450: Machine Learning']
    },
    {
      id: 2,
      name: 'Dr. James Anderson',
      title: 'Associate Professor',
      department: 'Mathematics',
      email: 'j.anderson@university.edu',
      phone: '(555) 234-5678',
      office: 'Math Hall, Room 205',
      specialization: 'Algebraic Topology, Number Theory',
      officeHours: 'Tue & Thu, 1:00 PM - 3:00 PM',
      courses: ['MATH 310: Abstract Algebra', 'MATH 420: Topology']
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      title: 'Professor',
      department: 'Biology',
      email: 'e.chen@university.edu',
      phone: '(555) 345-6789',
      office: 'Science Center, Room 412',
      specialization: 'Molecular Biology, Genetics',
      officeHours: 'Mon & Fri, 10:00 AM - 12:00 PM',
      courses: ['BIO 301: Molecular Biology', 'BIO 405: Genetics']
    },
    {
      id: 4,
      name: 'Dr. Robert Williams',
      title: 'Assistant Professor',
      department: 'Physics',
      email: 'r.williams@university.edu',
      phone: '(555) 456-7890',
      office: 'Physics Lab, Room 103',
      specialization: 'Quantum Mechanics, Particle Physics',
      officeHours: 'Wed & Thu, 3:00 PM - 5:00 PM',
      courses: ['PHYS 320: Quantum Mechanics', 'PHYS 410: Particle Physics']
    },
    {
      id: 5,
      name: 'Dr. Maria Garcia',
      title: 'Professor',
      department: 'English Literature',
      email: 'm.garcia@university.edu',
      phone: '(555) 567-8901',
      office: 'Humanities Building, Room 220',
      specialization: 'Victorian Literature, Critical Theory',
      officeHours: 'Tue & Thu, 11:00 AM - 1:00 PM',
      courses: ['ENG 350: Victorian Literature', 'ENG 490: Literary Theory']
    },
    {
      id: 6,
      name: 'Dr. David Kim',
      title: 'Associate Professor',
      department: 'Computer Science',
      email: 'd.kim@university.edu',
      phone: '(555) 678-9012',
      office: 'Tech Building, Room 315',
      specialization: 'Cybersecurity, Network Systems',
      officeHours: 'Mon & Wed, 9:00 AM - 11:00 AM',
      courses: ['CS 380: Cybersecurity', 'CS 470: Network Systems']
    },
    {
      id: 7,
      name: 'Dr. Lisa Thompson',
      title: 'Professor',
      department: 'Psychology',
      email: 'l.thompson@university.edu',
      phone: '(555) 789-0123',
      office: 'Social Sciences Building, Room 401',
      specialization: 'Cognitive Psychology, Behavioral Neuroscience',
      officeHours: 'Tue & Fri, 2:00 PM - 4:00 PM',
      courses: ['PSY 301: Cognitive Psychology', 'PSY 450: Neuroscience']
    },
    {
      id: 8,
      name: 'Dr. Michael Brown',
      title: 'Assistant Professor',
      department: 'Chemistry',
      email: 'm.brown@university.edu',
      phone: '(555) 890-1234',
      office: 'Chemistry Lab, Room 208',
      specialization: 'Organic Chemistry, Biochemistry',
      officeHours: 'Mon & Thu, 1:00 PM - 3:00 PM',
      courses: ['CHEM 310: Organic Chemistry', 'CHEM 405: Biochemistry']
    },
    {
      id: 9,
      name: 'Dr. Jennifer Lee',
      title: 'Associate Professor',
      department: 'Mathematics',
      email: 'j.lee@university.edu',
      phone: '(555) 901-2345',
      office: 'Math Hall, Room 310',
      specialization: 'Differential Equations, Applied Mathematics',
      officeHours: 'Wed & Fri, 10:00 AM - 12:00 PM',
      courses: ['MATH 250: Differential Equations', 'MATH 380: Applied Math']
    },
    {
      id: 10,
      name: 'Dr. Thomas Martinez',
      title: 'Professor',
      department: 'History',
      email: 't.martinez@university.edu',
      phone: '(555) 012-3456',
      office: 'Humanities Building, Room 155',
      specialization: 'American History, Civil War Era',
      officeHours: 'Tue & Thu, 2:00 PM - 4:00 PM',
      courses: ['HIST 301: American History', 'HIST 420: Civil War Studies']
    }
  ];

  const departments = ['all', 'Computer Science', 'Mathematics', 'Biology', 'Physics', 'English Literature', 'Psychology', 'Chemistry', 'History'];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const sortedFaculty = [...filteredFaculty].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'department') {
      return a.department.localeCompare(b.department);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Count faculty by department
  const departmentCounts = facultyMembers.reduce((acc, faculty) => {
    acc[faculty.department] = (acc[faculty.department] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Faculty List</h1>
          <p className="text-blue-100 text-lg">Complete directory of our academic staff</p>
          <div className="mt-4 flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{facultyMembers.length} Total Faculty</span>
            </div>
            <div className="flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              <span>{Object.keys(departmentCounts).length} Departments</span>
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
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="name">Sort by Name</option>
                <option value="department">Sort by Department</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedFaculty.length} of {facultyMembers.length} faculty member{sortedFaculty.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Faculty List */}
        <div className="space-y-4">
          {sortedFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Main Row */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(faculty.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                        <p className="text-indigo-600 font-medium">{faculty.title}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        {expandedId === faculty.id ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                          {faculty.department}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2 text-gray-400" />
                          <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline" onClick={(e) => e.stopPropagation()}>
                            {faculty.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2 text-gray-400" />
                          {faculty.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {faculty.office}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === faculty.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                      <p className="text-gray-700 text-sm">{faculty.specialization}</p>
                      
                      <h4 className="font-semibold text-gray-900 mt-4 mb-2">Office Hours</h4>
                      <p className="text-gray-700 text-sm">{faculty.officeHours}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Current Courses</h4>
                      <ul className="space-y-2">
                        {faculty.courses.map((course, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors font-medium">
                      View Full Profile
                    </button>
                    <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                      Contact
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {sortedFaculty.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyList; 
