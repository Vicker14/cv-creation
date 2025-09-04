import '../styles/form.css'

export default function Form({formData, handleChange}) {

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
        <h1>Educational formation</h1>

      </div>
      <div className="section">
        <h1>Practice experience</h1>

      </div>
    </div>
  )
}