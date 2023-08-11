import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// const arr = ["a","b","c","d",true,false,true]

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [img, setImg] = useState("");

  const [radio, setRadio] = useState("");

  const [java, setJava] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const [language, setLanguage] = useState([]);

  const getRadio = (e) => {
    const a = e.target.value;
    setRadio(a);
  };

  const checkJava = (data) => {
    if (data.target.checked) {
      setJava(data.target.value);
    } else {
      setJava("");
    }
  };
  const checkHtml = (data) => {
    if (data.target.checked) {
      setHtml(data.target.value);
    } else {
      setHtml("");
    }
  };
  const checkCss = (data) => {
    if (data.target.checked) {
      setCss(data.target.value);
    } else {
      setCss("");
    }
  };
  // console.log(java)
  // console.log(html)
  // console.log(css)

  const addProfile = () => {
    setLanguage([
      ...language,
      { name, email, website, img, radio, java, html, css },
    ]);
    setName("");
    setEmail("");
    setWebsite("");
    setImg("");
    setJava("");
    setHtml("");
    setCss("");
    setRadio("");
  };

  const handleReset = () => {
    setLanguage([]);
  };
  console.log(name);

  console.log(language);

  // ----------------------------------------------------------------------
  return (
    <div className="w-full">
      <p className="sample">SAMPLE</p> 
      <br /> 
      <p className="sample2">
      Student Enrollemnt Form
      </p> 
      <div className="flex justify-center m-5 ">
        <div className="  w-full flex justify-around">


          {/* current */}
          <div className="border-r-2 border-black w-[610px]">
            {/* border border-black */}
            <div className="flex justify-around">
              <div className="m-2"> 
                <div className="text-start m-2 p-2">Name</div>
                <div className="text-start m-2 p-2">Email</div>
                <div className="text-start m-2 p-2">Website</div>
                <div className="text-start m-2 p-2">Img</div>
                <div className="text-start m-2 p-2">Gender</div>
                <div className="text-start m-2 p-2">Skills</div>
              </div>
              <div className="flex flex-col  m-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  className="w-[300px] border border-black m-2 p-1 rounded-lg"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required:true
                  type="text"
                  className="w-[300px] border border-black m-2 p-1 rounded-lg"
                />

                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}

                  type="text"
                  className="w-[300px] border border-black m-2 p-1 rounded-lg"
                />

                <input
                  value={img}
                  onChange={(e) => setImg(e.target.value)}

                  type="text"
                  className="w-[300px] border border-black m-2 p-1 rounded-lg"
                />
                {/* radio button */}
                <div className="flex m-3">
                  <div>
                    <input
                      type="radio"
                      value="female"
                      checked={radio == "female"}
                      onChange={getRadio}
                      name="name"
                      className="m-2"
                    />
                    female
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="male"
                      checked={radio == "male"}
                      onChange={getRadio}
                      name="name"
                      className="m-2"
                    />
                    male
                  </div>
                </div>
                <div className="flex m-3">
                  {/* checkbox  */}
                  <div>
                    <input
                      type="checkbox"
                      checked={java}
                      value="java"
                      onChange={checkJava}
                      name="name"
                      className="m-2"

                    />
                    Java
                  </div>
                  <div>
                    <input
                      checked={html}
                      type="checkbox"
                      value="html"
                      onChange={checkHtml}
                      name="name"
                      className="m-2"

                    />
                    HTML
                  </div>

                  <div>
                    <input
                      checked={css}
                      type="checkbox"
                      value="css"
                      onChange={checkCss}
                      name="name"
                      className="m-2"

                    />
                    CSS
                  </div>
                </div>
              </div>
            </div>
    <div className="w-[full]  flex justify-start">

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-[200px] m-2 rounded-lg " onClick={addProfile}>
              Enroll Student
            </button>
            <button className=" p-2 w-[100px] m-2 rounded-lg bg-red-500 hover:bg-red-700 text-white font-bold " onClick={handleReset}>
              Clear
            </button>
    </div>

          </div>
          <div className="w-[610px] flex justify-center ">
            {/* ---------------------------------------------------------------------- */}

            {/* profile */}
            <div className=" w-[500px] ">
              <p className="imgP">Enrolled Students</p>
              <div className=" grid grid-cols-3 p-1 bg-[red]">
                <p className="ml-5 text-start col-span-2">Description</p>
                <p className=" col-span-1 mr-[60px]">image</p>
              </div>
              {/* <hr /> */}
              {language.map((e, index) => {
                return (
                  <div key={index} className="grid grid-cols-3 w-full border-2 border-red-200 ">
                  <div className="col-span-2 text-start flex flex-col justify-center ml-5 ">

                    <div>{e.name}</div>
                    <div>{e.radio}</div>
                    <div>{e.email}</div>
                    <Link to={e.website} >{e.website}</Link>
                    <div className="flex">

                    <div>{e.java},</div>
                    <div>{e.html},</div>
                    <div>{e.css}</div>
                    </div>
                  </div>
                      <div className="col-span-1 flex items-center justify-center border-l-2 border-red-500 "> 

                      <img
                        className="h-[100px] w-[100px] rounded-lg"
                        src={e.img}
                        alt="demo"
                      />
                      </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
