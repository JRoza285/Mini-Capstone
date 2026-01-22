import { useState } from 'react';
import { Search, Filter, Mail, Phone, BookOpen } from 'lucide-react';

const FacultyLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

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
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    }
  ];

  const departments = ['all', 'Computer Science', 'Mathematics', 'Biology', 'Physics', 'English Literature', 'Psychology', 'Chemistry'];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
          <p className="text-blue-100 text-lg">Meet our distinguished educators and researchers</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or specialization..."
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
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredFaculty.length} faculty member{filteredFaculty.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map(faculty => (
            <div key={faculty.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 rounded-full border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 object-cover"
                />
              </div>
              
              <div className="pt-20 pb-6 px-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{faculty.name}</h3>
                <p className="text-indigo-600 text-center font-medium mb-2">{faculty.title}</p>
                <p className="text-gray-600 text-center text-sm mb-4">{faculty.department}</p>
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-start text-sm">
                    <BookOpen className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{faculty.specialization}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline truncate">
                      {faculty.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{faculty.phone}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors font-medium">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
