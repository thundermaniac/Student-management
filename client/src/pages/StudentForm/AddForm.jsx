import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import "./AddForm.css";

const initialState = {
  f_name: "",
  l_name: "",
  location: "",
  email: "",
  education: "",
  dob: "",
  about: "",
};

const AddForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };


  const [state, setState] = useState(initialState);

  const { f_name, location, email, education, dob, about, l_name } = state;

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    

    if (
      !f_name ||   
      !location ||
      !email ||
      !dob ||
      !education ||
      !about ||
      !l_name 
    ) {
      alert("Please enter the correct value");
    } else {
      if (!id) {
        axios
          .post("http://localhost:3000/api/post", {
            f_name,
            l_name,
            location,
            email,
            dob,
            education,
            about,
          })
          .then(() => {
            setState({
              f_name: "",
              location: "",
              email: "",
              l_name: "",
              dob: "",
              education: "",
              about: "",
            });
          })
          .catch((err) => console.error(err));
          setTimeout(() =>navigate("/"),500); 
      } else {
        axios
          .put(`http://localhost:3000/api/update/${id}`, {
            f_name,
            location,
            email,
            dob,
            education,
            about,
            l_name,
          })
          .then(() => {
            setState({
              f_name: "",
              location: "",
              email: "", 
              dob: "",
              education: "",
              about: "",
              l_name: "",
            });
          })
          .catch((err) => console.error(err));
      }
      setTimeout(() =>navigate("/"),500); 
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <button type="button" className="btnArrow" onClick={handleClick}>
        <FiArrowLeft />
      </button>
      <div className="container">
        {/* <p className="title">Add student Details</p> */}
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 col-sm-12 col-lg-6 col-xl-6 column1 studentCol">
                <div className="Add">
                  <label htmlFor="f_name" className="label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control input inputSpace"
                    placeholder="Enter Your First Name"
                    name="f_name"
                    id="f_name"
                    value={f_name || ""}
                    onChange={handleChange}
                  />
                
              </div>
              <div className="Add">
                  <label htmlFor="location" className="label">
                    location
                  </label>
                  <input
                    type="text"
                    className="form-control input inputSpace"
                    placeholder="Enter Location"
                    name="location"
                    id="location"
                    value={location || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="Add">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control input inputSpace"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    value={email || ""}
                    onChange={handleChange}
                  />
                </div>

                
                <div className="Add">
                  <label htmlFor="dob" className="label">DOB</label>
                 <input
                  type="date"
                
                  className="form-control input inputSpace"
                  
                  name="dob"
                  id="dob"
                  value={dob || ""}
                  onChange={handleChange}

                />                                
                </div>


                <div className="Add">
                  <label htmlFor="education" className="label">
                    Education
                  </label>
                  <input
                    type="text"
                    className="form-control input inputSpace"
                    placeholder="Enter "
                    name="education"
                    id="education"
                    value={education || ""}
                    onChange={handleChange}
                  />
                </div>

                
                <div className="col-12 col-lg-12 col-xl-12  studentCol">
                <div className="row">
                  <div className="col-lg-2">
                    <label htmlFor="about" className="label aboutLabel">About</label>
                  </div>
                  <div className="col-lg-10">
                    <textarea
                      className="form-control inputSpace textAreaWidth"
                      rows="7"
                      id="about"
                      name="about"
                      value={about || ""}
                      onChange={handleChange}
                    ></textarea>          
                  </div>
                </div>

              </div> 
               <div>  <input
                type="submit"
                className="SubmitButton"
              /></div> 





              </div>
              <div className="col-6 col-sm-12 col-lg-6 col-xl-6 column2 studentCol">
                <div className="Add">
                  <label htmlFor="l_name" className="label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control input inputSpace"
                    placeholder="Enter Last Name"
                    name="l_name"
                    id="l_name"
                    value={l_name || ""}
                    onChange={handleChange}
                  />
                </div>

            


               

               
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
