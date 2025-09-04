import { useState } from 'react'
import '../styles/form.css'

export default function Form({formData, setFormData, handleChange}) {

  const [educationData, setEducationData] = useState({
    institution: "",
    title: "",
    startDate: "",
    endDate: ""
  })

  const handleEducationChange = (e) => {
    const {name, value} = e.target;
    setEducationData((prev) => ({
      ...prev,
      [name]: value
    }));
  } 

  const addEducation = (e) => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, educationData]
    }));
    setEducationData({
      institution: "",
      title: "",
      startDate: "",
      endDate: ""
    });
  }

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  }

    const [practiceData, setPracticeData] = useState({
    institution: "",
    position: "",
    startDate: "",
    endDate: ""
  })

  const handlePracticeChange = (e) => {
    const {name, value} = e.target;
    setPracticeData((prev) => ({
      ...prev,
      [name]: value
    }));
  } 

  const addPractice = (e) => {
    setFormData(prev => ({
      ...prev,
      practice: [...prev.practice, practiceData]
    }));
    setPracticeData({
      institution: "",
      position: "",
      startDate: "",
      endDate: ""
    });
  }

  const removePractice = (index) => {
    setFormData(prev => ({
      ...prev,
      practice: prev.practice.filter((_, i) => i !== index)
    }));
  }

  return (
    <div className="form">
      <div className="section">

        <form>

          <h1>General information</h1>
          <div>
            <label>
              Name :
              {' '}
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Last name :
              {' '}
              <input
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          
          <h1>Contact information</h1>
          <div>
            <label>
              Phone :
              {' '}
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Email :
              {' '}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>

        </form>

      </div>

      <div className="section">

        <form>
          <h1>Education</h1>
          <div>
            <label>
              Intitution : {' '}
              <input type="text" 
                name='institution'
                value={educationData.institution}
                onChange={handleEducationChange}
              />
            </label>
            <label>
              Title : {' '}
              <input type="text" 
                name='title'
                value={educationData.title}
                onChange={handleEducationChange}
              />
            </label>
          </div>

          <div>
            <label>
              Start : {' '}
              <input type="text" placeholder='mm/yyyy'
                name='startDate'
                value={educationData.startDate}
                onChange={handleEducationChange}
              />
            </label>
            <label>
              End : {' '}
              <input type="text" placeholder='mm/yyyy'
                name='endDate'
                value={educationData.endDate}
                onChange={handleEducationChange}              
              />
            </label>
          </div>

          <button type='button' onClick={addEducation}>Submit</button>
        </form>

        {formData.education.map((eduItem, index) => (
          <div className='eduItem' key={index}>
            <h2><b>{eduItem.institution}</b> - {eduItem.title}</h2>
            <h3>{eduItem.startDate} - {eduItem.endDate}</h3>

            <svg onClick={() => removeEducation(index)} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>     
          </div>
        ))}

      </div>

      <div className="section">

        <form>
          <h1>Practice</h1>
          <div>
            <label>
              Intitution : {' '}
              <input type="text" 
                name='institution'
                value={practiceData.institution}
                onChange={handlePracticeChange}
              />
            </label>
            <label>
              Position : {' '}
              <input type="text" 
                name='position'
                value={practiceData.position}
                onChange={handlePracticeChange}
              />
            </label>
          </div>

          <div>
            <label>
              Start : {' '}
              <input type="text" placeholder='mm/yyyy'
                name='startDate'
                value={practiceData.startDate}
                onChange={handlePracticeChange}
              />
            </label>
            <label>
              End : {' '}
              <input type="text" placeholder='mm/yyyy'
                name='endDate'
                value={practiceData.endDate}
                onChange={handlePracticeChange}              
              />
            </label>
          </div>

          <button type='button' onClick={addPractice}>Submit</button>
        </form>

        {formData.practice.map((praItem, index) => (
          <div className='praItem' key={index}>
            <h2><b>{praItem.institution}</b> - {praItem.position}</h2>
            <h3>{praItem.startDate} - {praItem.endDate}</h3>

            <svg onClick={() => removePractice(index)} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>     
          </div>
        ))}

      </div>
    </div>
  )
}