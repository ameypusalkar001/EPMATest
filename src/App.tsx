import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Building, 
  Briefcase, 
  DollarSign, 
  UserCheck,
  AlertTriangle,
  Save,
  X
} from 'lucide-react';

interface EmployeeData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Employment Information
  employeeId: string;
  department: string;
  position: string;
  startDate: string;
  salary: string;
  employmentType: string;
  workLocation: string;
  manager: string;
  
  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelationship: string;
  
  // Additional Information
  skills: string;
  notes: string;
}

function App() {
  const [formData, setFormData] = useState<EmployeeData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    employeeId: '',
    department: '',
    position: '',
    startDate: '',
    salary: '',
    employmentType: 'full-time',
    workLocation: 'office',
    manager: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    skills: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Employee Data:', formData);
    alert('Employee details submitted successfully!');
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      employeeId: '',
      department: '',
      position: '',
      startDate: '',
      salary: '',
      employmentType: 'full-time',
      workLocation: 'office',
      manager: '',
      emergencyName: '',
      emergencyPhone: '',
      emergencyRelationship: '',
      skills: '',
      notes: ''
    });
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";
  const sectionClasses = "bg-white p-6 rounded-xl shadow-sm border border-gray-200";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Employee Registration</h1>
          <p className="text-gray-600">Please fill out all required information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className={sectionClasses}>
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={labelClasses}>First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className={labelClasses}>Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className={labelClasses}>
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className={labelClasses}>
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="address" className={labelClasses}>
                <MapPin className="w-4 h-4 inline mr-1" />
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Street Address"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label htmlFor="city" className={labelClasses}>City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="state" className={labelClasses}>State</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={inputClasses}
                >
                  <option value="">Select State</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="IL">Illinois</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="zipCode" className={labelClasses}>ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* Employment Information Section */}
          <div className={sectionClasses}>
            <div className="flex items-center mb-6">
              <Building className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Employment Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="employeeId" className={labelClasses}>Employee ID *</label>
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="department" className={labelClasses}>Department *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="position" className={labelClasses}>
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  Position/Job Title *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="startDate" className={labelClasses}>
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="salary" className={labelClasses}>
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Annual Salary
                </label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="50000"
                />
              </div>
              
              <div>
                <label htmlFor="manager" className={labelClasses}>
                  <UserCheck className="w-4 h-4 inline mr-1" />
                  Reporting Manager
                </label>
                <input
                  type="text"
                  id="manager"
                  name="manager"
                  value={formData.manager}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className={labelClasses}>Employment Type *</label>
              <div className="flex flex-wrap gap-4 mt-2">
                {['full-time', 'part-time', 'contract', 'intern'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="employmentType"
                      value={type}
                      checked={formData.employmentType === type}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600"
                    />
                    <span className="text-gray-700 capitalize">{type.replace('-', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <label className={labelClasses}>Work Location</label>
              <div className="flex flex-wrap gap-4 mt-2">
                {['office', 'remote', 'hybrid'].map((location) => (
                  <label key={location} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="workLocation"
                      value={location}
                      checked={formData.workLocation === location}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600"
                    />
                    <span className="text-gray-700 capitalize">{location}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className={sectionClasses}>
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Emergency Contact</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emergencyName" className={labelClasses}>Contact Name *</label>
                <input
                  type="text"
                  id="emergencyName"
                  name="emergencyName"
                  value={formData.emergencyName}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="emergencyPhone" className={labelClasses}>Contact Phone *</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="emergencyRelationship" className={labelClasses}>Relationship</label>
                <select
                  id="emergencyRelationship"
                  name="emergencyRelationship"
                  value={formData.emergencyRelationship}
                  onChange={handleInputChange}
                  className={inputClasses}
                >
                  <option value="">Select Relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Child">Child</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className={sectionClasses}>
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="skills" className={labelClasses}>Skills & Qualifications</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className={inputClasses + " h-24 resize-none"}
                  placeholder="List relevant skills, certifications, or qualifications..."
                />
              </div>
              
              <div>
                <label htmlFor="notes" className={labelClasses}>Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className={inputClasses + " h-24 resize-none"}
                  placeholder="Any additional information..."
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2 shadow-lg"
            >
              <X className="w-5 h-5" />
              Cancel
            </button>
            
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg"
            >
              <Save className="w-5 h-5" />
              Submit Employee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;