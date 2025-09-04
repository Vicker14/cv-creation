import '../styles/preview.css'

export default function Preview({formData}) {
  
  return (
    <div className="preview">
      <div>
        <h1>General information</h1>
        <div>
          <h2>Name : {formData.name} {formData.lastName}</h2>
          <h2>Phone : {formData.phone}</h2>
          <h2>Email : {formData.email}</h2>
        </div>
      </div>
      
      <div>
        <h1>Educational formation</h1>
      </div>
      
      <div>
        <h1>Practice experience</h1>
      </div>
      
    </div>
  )
}