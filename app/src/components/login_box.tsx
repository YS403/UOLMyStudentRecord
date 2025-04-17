import { useState } from "react";

const Login_box = () => {
  const [selected, setSelected] = useState("A");

  return (
    <>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-3/5 text-center">
            <h2 className="text-center text-2xl font-medium">
              Choose your sign-in method
            </h2>
            <div>
              <button
                className={`rounded py-3 w-1/2 text-base my-5 font-semibold
                ${selected === "A" ? "bg-sky-100" : " "}
              `}
                onClick={() => setSelected("A")}
              >
                Staff and Student
              </button>
              <button
                className={`rounded py-3 w-1/2 text-base font-semibold
                ${selected === "B" ? "bg-green-100 " : ""}
              `}
                onClick={() => setSelected("B")}
              >
                Applicant
              </button>
            </div>
            
            {selected === "A" ? (
                <div>
                
              <div className="bg-sky-100 rounded h-auto p-3 list-disc text-base list-inside text-gray-800 leading-relaxed space-y-4 text-left ">
                <p className="text-sky-600">
                  If you have a university email account ending
                  @student.le.ac.uk or @leicester.ac.uk sign in below using your
                  email address and the password for your university IT account.
                  If you require a password reset, please use the Forgotten your
                  password? link below.
                </p>
                <p className="text-sky-600">
                  If your account has Multi Factor Authentication (MFA) enabled
                  you will be prompted to complete the sign in on your
                  registered device.
                </p>
                <p className="text-sky-600">
                  If you require further assistance, visit the following web
                  page: MyStudentRecord Sign In Help
                </p>
              </div>
              <div className="flex flex-col text-left py-5 px-3  my-3 rounded">
              <label htmlFor="">University Of Leicester Email</label>
              <input type="email" name="email" id="" className="rounded h-9 bg-slate-100 border-1 border-solid border-gray-400 "/>
              <label htmlFor="" className="mt-4">Password</label>
              <input type="text" name="password" id="" className=" rounded h-9 bg-slate-100 border-1 border-solid border-gray-400 " />
              <input type="submit" value="Sign In" className="bg-green-400 text-md mt-4 h-9 rounded text-white font-semibold"/>
            </div>
              </div>
            ) : (
                <div>
              <div className="bg-green-100 rounded h-auto p-3 list-disc text-base list-inside text-gray-800 leading-relaxed space-y-4 text-left ">
                <p className="text-green-600">
                  If you have submitted an application through the University of
                  Leicester application form, you can sign in here using the
                  same details as you used for your application.
                </p>
                <p className="text-green-600">
                  If you applied through UCAS, DfE or an agent submitted the
                  application on your behalf and you are signing in for the
                  first time, please click on the 'New User' button below to set
                  up your account. If you have already set up your account, you
                  can sign in here using the details you created.
                </p>
                <p className="text-green-600">
                  If you are an applicant and you have been asked to complete
                  Online Registration for your course, choose the relevant
                  option to set up your account or sign in and complete online
                  registration.
                </p>
              </div>
              <div className="flex flex-col text-left py-5 px-3  my-3 rounded">
              <label htmlFor="">University Of Leicester Email</label>
              <input type="email" name="email" id="" className="rounded h-9 bg-slate-100 border-1 border-solid border-gray-400 "/>
              <label htmlFor="" className="mt-4">Password</label>
              <input type="text" name="password" id="" className=" rounded h-9 bg-slate-100 border-1 border-solid border-gray-400 " />
              <input type="submit" value="Sign In" className="bg-green-400 text-md mt-4 h-9 rounded text-white font-semibold"/>
             
              <div  className="bg-orange-100 mt-8 p-3 rounded">
                <h2 className="bg-orange-200 p-2 rounded font-medium text-orange-700">New to MyStudentRecord</h2>
                <p className="text-orange-500 p-2">If you have applied through UCAS, DfE or an agent submitted the application on your behalf and you have not previously created a MyStudentRecord account, please click the 'New User' button below to set up your sign in details.</p></div>
              <input type="button" value="New User" className="bg-orange-300 rounded mt-4 h-9 font-semibold text-orange-900" />
            </div>
              </div>
            )}

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_box;
