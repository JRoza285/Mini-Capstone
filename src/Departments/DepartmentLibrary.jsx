
import { useState } from 'react';
import { Search, Users, BookOpen, Award, Building2, TrendingUp, GraduationCap } from 'lucide-react';

const DepartmentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('all');

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
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-indigo-600'
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
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-600'
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
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop',
      color: 'from-green-500 to-emerald-600'
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
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop',
      color: 'from-cyan-500 to-blue-600'
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
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
      color: 'from-amber-500 to-orange-600'
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
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
      color: 'from-rose-500 to-red-600'
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
      image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&h=600&fit=crop',
      color: 'from-teal-500 to-cyan-600'
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
      image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&h=600&fit=crop',
      color: 'from-slate-500 to-gray-600'
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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      color: 'from-indigo-500 to-purple-600'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Academic Departments</h1>
          <p className="text-indigo-100 text-lg">Explore our diverse range of academic programs and research areas</p>
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
                placeholder="Search departments or research areas..."
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
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredDepartments.length} department{filteredDepartments.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map(dept => (
            <div key={dept.id} className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Department Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-90`}></div>
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  {dept.ranking}
                </div>
              </div>

              {/* Department Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-indigo-600 font-medium mb-3">{dept.college}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{dept.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 text-indigo-500 mr-2" />
                    <div>
                      <p className="text-gray-500 text-xs">Faculty</p>
                      <p className="font-semibold text-gray-900">{dept.facultyCount}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <GraduationCap className="w-4 h-4 text-indigo-500 mr-2" />
                    <div>
                      <p className="text-gray-500 text-xs">Students</p>
                      <p className="font-semibold text-gray-900">{dept.studentCount}</p>
                    </div>
                  </div>
                </div>

                {/* Programs */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    PROGRAMS OFFERED
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {dept.programsOffered.slice(0, 2).map((program, index) => (
                      <span key={index} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                        {program}
                      </span>
                    ))}
                    {dept.programsOffered.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{dept.programsOffered.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Research Areas */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    RESEARCH AREAS
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {dept.researchAreas.slice(0, 3).map((area, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium text-sm">
                  Explore Department
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDepartments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No departments found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

