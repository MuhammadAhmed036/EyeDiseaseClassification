import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

const Contact = (props) => {
  const form = useRef();
  const [Loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      "service_ytpdnfv",
      "template_sel0xjo",
      form.current,
      "Qc4IEdSfGeohecLaR"
    );
    e.target.reset();
    setLoading(false);
    props.settoastCondition({
      status: "success",
      message: "Message Sent Successfully!!!",
    });
    props.setToastShow(true);
  };

  return (
    <div className="body w-full ">
      <Navbar></Navbar>

      <div className="bg-secoundry ">
        <div className="">
          <div>
            <div className="flex justify-center mt-4">
              <h1 className=" rounded p-10 px-8 font-bold font-poppins text-3xl">
                Contact us
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 mt-4 ">
          <div>
            <div className="max-w-full  lg:mx-32 mx-4 my-8 bg-white py-8 px-16 rounded-3xl  border-8 border-primary">
              <div className="flex justify-center">
                <h1 className=" rounded  px-4 font-bold font-poppins text-3xl">
                  Reach us
                </h1>
              </div>
              <div className="">
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Email :
                </h1>
                <h1 className="font-poppins text-xl">malikah0312@gmail.com</h1>
              </div>
              <div>
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Address :
                </h1>
                <h2 className="font-poppins text-xl">
                  EDO Eye Hospital Uppal Chowk, Wah Cantt{" "}
                </h2>
              </div>
              <div>
                <h1 className="font-bold font-poppins text-2xl mt-4 ">
                  Contact Number :
                </h1>
                <h2 className="font-poppins text-xl">
                (051) 4540151{" "}
                </h2>
              </div>
            </div>
          </div>

          <div>
          <div className="bg-white p-4 rounded shadow-lg lg:mr-4 mt-0 mb-0 m-0" style={{ width: '450px' }}>



              <form className="grid  gap-4 " >
                <div className="grid grid-cols-0  ">
                  <label className="font-poppins font-bold lg:text-xl col-span-1">
                    
                  </label>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.943563637147!2d72.72290807480182!3d33.787955531640876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa7ec46f210ef%3A0x9e6d78829c993ae1!2sEdo%20Eye%20Hospital!5e0!3m2!1sen!2s!4v1712574722729!5m2!1sen!2s" width="420" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-auto relative bottom-0">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
