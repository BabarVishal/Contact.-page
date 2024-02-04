import { useState } from "react"


function Contact() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const conatst = event.target.conatst;
    setInputs(values => ({...values, [name]: value ,conatst}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("its submited",inputs);
  }
 
  
  return ( 
    <div>
    <div className="home">
    <h1>Contact as</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laudantium, fuga commodi porro ea excepturi officia. Possimus perferendis quo asperiores iste eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima ab qui ipsum tempora omnis quibusdam voluptatum earum laudantium corporis similique quo, quod tenetur, recusandae provident? Cumque, iure velit quod tempore sit at.</p>
    </div>

    <div className="home2">
        <div className="contactbox">
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta eaque. Incidunt fugiat fugit odio debitis. Officiis, quasi? Possimus exercitationem, voluptate suscipit assumenda vel mollitia facilis alias repudiandae ullam, numquam recusandae non tenetur.</p> */}
              <button className='Vishal'>VIA SUPPORT CHAT</button>
              <button className='Vishal'>VIA CALL</button>
              <br />
              <button className='email'>💌 VIA EMAIL FORM</button>
                <br />
                <br />
          <form onSubmit={handleSubmit}>
                <label>Enter your name:
                <input 
                  type="text" 
                  name="username" 
                  value={inputs.username || ""} 
                  onChange={handleChange}
                />
                </label>
                <br />
                <br />
                <label>Enter your age:
                  <br />
                  <input 
                    type="number" 
                    name="age" 
                    value={inputs.age || ""} 
                    onChange={handleChange}
                  />
                  </label>
                  <br />
                  <br />
                  <label>contact :
                    <br />
                    <input type="text"
                    name="contact"
                    value={inputs.conatst}
                    onChange={handleChange}
                     />
                  </label>
                  <br />
                  <br />
                  <input className="email" type="submit" />
              </form>
               
              
         
        </div>
        <div className="img2">
            <img src="/img/contact.png" alt="" />
        </div>
    </div>

    </div>
  )
}

export default Contact
