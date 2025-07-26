import React, {useState, useEffect} from 'react'
import './UserForm.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

export default function UserForm({selectedUser, OnSubmit}) {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        gender: '',
        city: '',
        country: '',
        contact: '',
        qualification: '',
        specification: '',
        job: ''        
    });

    useEffect(() => {
        if(selectedUser) {
            setFormData(selectedUser)
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        OnSubmit(formData)
        setFormData({
            name: '',
            age: '',
            email: '',
            gender: '',
            city: '',
            country: '',
            contact: '',
            qualification: '',
            specification: '',
            job: ''
        })
    }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className='register-form'>
        <div className='input-with-icons'>
            <span className='input-icons'><AccountCircleIcon /></span>
            <input name='name' value={formData.name} onChange={handleChange} placeholder='Enter Name' className=''/> 
        </div> 

        <div className='input-with-icons'>
            <span className='input-icons'><DataUsageRoundedIcon /></span>
            <input name='age' value={formData.age} onChange={handleChange} placeholder='Enter Age' />  
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><EmailRoundedIcon /></span>
            <input name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email' />
        </div>

        <div className="input-with-icons">
            <span className='input-icons'><WcSharpIcon/></span>
            <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select> 
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><LocationCitySharpIcon /></span>
            <input name='city' value={formData.city} onChange={handleChange} placeholder='Enter City' />
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><PublicSharpIcon /></span>
            <input name='country' value={formData.country} onChange={handleChange} placeholder='Enter Country' />
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><PermContactCalendarRoundedIcon /></span>
            <input name='contact' value={formData.contact} onChange={handleChange} placeholder='Enter Contact' />
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><SchoolRoundedIcon /></span>
            <select name="qualification" value={formData.qualification} onChange={handleChange}>
                <option value="">Qualification</option>
                <option>Associate Degree (AA / AS)</option>
                <option>B.Sc. in Computer Science</option>
                <option>B.Tech / BE in Computer Science</option>
                <option>BCA (Bachelor of Computer Applications)</option>
                <option>M.Sc. in Computer Science</option>
                <option>M.Tech in Computer Science</option>
                <option>PhD in Computer Science</option>

                <option>B.Tech / BE (Engineering)</option>
                <option>M.Tech / ME (Engineering)</option>
                <option>Diploma in Engineering</option>

                <option>BBA (Bachelor of Business Administration)</option>
                <option>B.Com (Bachelor of Commerce)</option>
                <option>MBA (Master of Business Administration)</option>

                <option>B.Sc. (General Science)</option>
                <option>M.Sc. (Science)</option>

                <option>MBBS (Medicine)</option>
                <option>BPT (Physiotherapy)</option>
                <option>BDS (Dental Surgery)</option>
                <option>B.Sc. Nursing</option>
                <option>B.Pharm / D.Pharm (Pharmacy)</option>
                <option>MD / MS (Postgraduate Medicine)</option>

                <option>BA (Bachelor of Arts)</option>
                <option>MA (Master of Arts)</option>

                <option>LLB (Bachelor of Law)</option>
                <option>LLM (Master of Law)</option>

                <option>B.Ed (Bachelor of Education)</option>
                <option>M.Ed (Master of Education)</option>

                <option>B.Des (Bachelor of Design)</option>
                <option>BHM (Hotel Management)</option>
            </select>
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><WorkspacePremiumRoundedIcon /></span>
            <select name="specification" value={formData.specification} onChange={handleChange}>
                <option>Specification</option>
                {/* Computer & IT */}
                <option>Software Engineering</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Data Science</option>
                <option>Artificial Intelligence</option>
                <option>Machine Learning</option>
                <option>Cybersecurity</option>
                <option>Cloud Computing</option>
                <option>Blockchain</option>
                <option>Game Development</option>
                <option>UI/UX Design</option>
                <option>Database Management</option>
                <option>Networking</option>         

                {/* Engineering */}
                <option>Computer Science Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Electrical Engineering</option>
                <option>Electronics and Communication</option>
                <option>Civil Engineering</option>
                <option>Aerospace Engineering</option>
                <option>Automobile Engineering</option>
                <option>Biomedical Engineering</option>
                <option>Robotics</option>
                <option>Mechatronics</option>
                <option>Environmental Engineering</option>          
                <option>Structural Engineering</option>
                <option>Instrumentation Engineering</option>

                {/* Business & Management */}
                <option>Finance</option>
                <option>Marketing</option>
                <option>Human Resource Management</option>
                <option>International Business</option>
                <option>Operations Management</option>
                <option>Entrepreneurship</option>
                <option>Business Analytics</option>
                <option>Supply Chain Management</option>
                <option>Project Management</option>

                {/* Science */}         
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Mathematics</option>
                <option>Statistics</option>
                <option>Biology</option>
                <option>Biotechnology</option>
                <option>Microbiology</option>
                <option>Zoology</option>
                <option>Botany</option>
                <option>Environmental Science</option>
                <option>Geology</option>
                <option>Agricultural Science</option>
                <option>Food Technology</option>

                {/* Medical & Health Sciences */}
                <option>General Medicine</option>
                <option>Dentistry</option>
                <option>Physiotherapy</option>
                <option>Pharmacy</option>
                <option>Nursing</option>
                <option>Ayurveda</option>
                <option>Homeopathy</option>
                <option>Radiology</option>
                <option>Pathology</option>
                <option>Public Health</option>
                <option>Clinical Psychology</option>
                <option>Nutrition and Dietetics</option>

                {/* Arts & Humanities */}
                <option>Psychology</option>
                <option>English Literature</option>
                <option>History</option>
                <option>Political Science</option>
                <option>Sociology</option>
                <option>Philosophy</option>
                <option>Geography</option>
                <option>Economics</option>
                <option>Journalism</option>         
                <option>Mass Communication</option>
                <option>Fine Arts</option>
                <option>Performing Arts</option>

                {/* Law & Education */}
                <option>Civil Law</option>
                <option>Criminal Law</option>
                <option>Corporate Law</option>
                <option>International Law</option>
                <option>Intellectual Property Law</option>
                <option>Constitutional Law</option>
                <option>Education Technology</option>
                <option>Curriculum Development</option>
                <option>Special Education</option>

                {/* Design & Hospitality */}
                <option>Graphic Design</option>
                <option>Fashion Design</option>
                <option>Interior Design</option>
                <option>Product Design</option>
                <option>Animation</option>
                <option>Hotel Management</option>
                <option>Tourism Management</option>
            </select>
        </div>

        <div className="input-with-icons">
            <span className="input-icons"><WorkRoundedIcon /></span>
            <input name='job' value={formData.job} onChange={handleChange} placeholder='Enter Job' />
        </div>

        <button className='submit-btn' type='submit'>{selectedUser ? "Update" : "Add"} User</button>
    </form>
    </div>
  )
}
