import Footer from "./Footer";
import Navbar from "./Navbar";

const Tutorials = () => {
  return (
    <div className="body lg:overflow-hidden max-h-min flex flex-col">
      <Navbar />

      <div className="bg-secoundry font-poppins">
        <div className="flex justify-center">
          <h1 className="p-4 px-8 font-bold text-6xl text-primary">How to Register Account</h1> {/* Increased text size */}
        </div>
        
        {/* Video Section */}
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ujn3Mj0jX9Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        
        {/* Paragraph Section */}
        <div className="p-4">
          <p className="text-2xl text-gray-700"> {/* Increased text size */}
            How to register an account? If you're facing an issue, don't worry, watch this video. Follow steps or guidelines to create an account:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-2xl text-gray-700">To create an account, simply click on the register button.</li> {/* Increased text size */}
            <li className="text-2xl text-gray-700">After that, two options are available: patient or admin.</li> {/* Increased text size */}
            <li className="text-2xl text-gray-700">If you're a patient, then click on patient and fill out this form, but make sure to fill all the fields properly. A video is attached if you're facing issues.</li> {/* Increased text size */}
            <li className="text-2xl text-gray-700">If you're a Doctor, please email us your documents and below section you will find the procedure to get an account.</li> {/* Increased text size */}
            <li className="text-2xl text-gray-700">If the user doesn't remember your password, then the user can email us. After a response from admin, the user can easily create a new account with the CNIC number.</li> {/* Increased text size */}
          </ul>
        </div>
        
        {/* Additional Heading */}
        <div className="flex justify-center">
          <h2 className="p-4 px-8 font-bold text-5xl text-primary">Doctor Registration Documents</h2> {/* Increased text size */}
        </div>

        {/* Bullet Points Section */}
        <div className="p-5">
          <ul className="list-disc pl-20">
            <li className="text-2xl text-gray-700">An Ophthalmologist in Pakistan is a licensed medical healthcare practitioner who has undergone standard MBBS, followed by a specialization in Ophthalmology from a recognized institute.</li> {/* Increased text size */}
            <li className="text-2xl text-gray-700">You must email a postgraduate degree in Ophthalmology</li> {/* Increased text size */}
            <li className="text-2xl text-gray-700">Give your all details to the admin such as <span className="font-bold text-black">name, surname, email, cnic no, mobile no, your complete address</span>. After that, admin sends your credentials through email.</li> {/* Increased text size */}
          </ul>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Tutorials;
