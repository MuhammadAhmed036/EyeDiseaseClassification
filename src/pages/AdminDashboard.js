import admin_profile from "../assets/img/dashboard/adminloginnew.png";

import Footer from "../components/landingPage/Footer";
import PatientList from "../components/adminDashboard/PatientList";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminDashboard = (props) => {
  const [adminEmail, setAdminEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchAdmin() {
      const res = await fetch("/getadmin");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      }
      setAdminEmail(data.admin.email);
    }
    fetchAdmin();
  }, []);

  return (
    <div className="full-body col-span-10">
      <div className="body-without-footer  h-screen max-h-min bg-bgprimary ">
        <div className="main  m-2  ">
          {/* dashboard today start */}
          <div className="">
            <div className="flex  h-12 m-2 bg-bgprimary rounded ml-6 ">
              <Link to="/AdminDash">
                <div>
                  <h1 className="text-2xl font-poppins font-bold p-2 ">
                    DashBoard Today
                  </h1>
                </div>
              </Link>


              <div className="flex bg-white rounded shadow px-4 ml-auto mr-4 h-20">
                
                <img
                  src={admin_profile}
                  className="h-20 my-1  p-1 rounded-2xl"
                  alt="profile"
                ></img>
                <div className="flex items-center ml-4  font-bold font-poppins">
                  <h1>{adminEmail} </h1>
                </div>
              </div>
            </div>
            <div>
              <PatientList></PatientList>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AdminDashboard;
