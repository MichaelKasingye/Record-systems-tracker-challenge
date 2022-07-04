/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from '../context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const customButton = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-dark me-3'
  },
  buttonsStyling: false
}))

    
function Login() {

  // React toastify
  const notify = () => toast.success('Success! Login success', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });

  const history = useHistory()
  const { login,errors,currentUser } = useAuth()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  
console.log(errors);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
    
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
          setLoading(true)
          await login(data)

          await notify()
          await history.push("/dashboard")
        } catch(error) {
          console.log(e);
        }

        setLoading(false)
    }
  
useEffect(() => {
  if(errors !== null){ customButton.fire('Error', `${errors}`, 'error') }
  // if(loading && !errors ){ notify()  }
}, [errors])

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card-group d-block d-md-flex row">
            <div
                className="card col-md-5 text-white py-5"
                style={{ backgroundColor: '#096691' }}
              >
                <div className="card-body text-center">
                  <div >
                  <img src="/android-chrome-192x192.png" width="100" alt="logo" className="rounded-3 border "/>
                  </div>
                  <h1>Dashboard</h1>
                  <p>Login to Manage Records-system" activities</p>
                </div>
              </div>
              <div className="card col-md-7 p-4 mb-0">
                <div className="card-body">
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to admin account
                  </p>
                  <form onSubmit={handlesubmit}>
                    <div className="input-group mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="enter your email"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="enter your Password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6 w-100">
                        <button className="btn btn-dark px-4 w-100 rounded-1" type="submit">
                          {loading ? 'Logging...': 'Login'}
                        </button>
                      </div>
                    </div>
                  </form>
                  <code>
                    email: admin@gmail.com <br/>
                    password: 123456
                  </code>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
