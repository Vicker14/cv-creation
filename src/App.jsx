import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Preview from './components/Preview'

export default function App() {

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    education: [],
    practice: []
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value 
    }));
  }

  return (
    <div className='body'>
      <Form formData={formData} setFormData={setFormData} handleChange={handleChange} />
      <Preview formData={formData} />
    </div>
  )
}
