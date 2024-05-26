import Footer from "./Footer";
import Navbar from "./Navbar";
import bloodSugarImage from "../../assets/img/tutorials/Blood Sugar.jpg";
import familyHistoryImage from "../../assets/img/tutorials/family tree.jpg";
import healthyWeightImage from "../../assets/img/tutorials/healthy weight up.jpg";
import protectiveEyewearImage from "../../assets/img/tutorials/protective glasses.jpg";
import quitSmokingImage from "../../assets/img/tutorials/avoid smoking.jpg";
import sunglassesImage from "../../assets/img/tutorials/eye glasssssss.jpg";
import eyeRestImage from "../../assets/img/tutorials/resttttttttt.jpg";
import cleanHandsImage from "../../assets/img/tutorials/close-up-hands-washing.jpg";
import eatRightImage from "../../assets/img/tutorials/vegetables.jpg";

const About = () => {
  return (
    <div className="body lg:overflow-hidden max-h-min flex flex-col">
      <Navbar />

      <div className="bg-secoundry font-poppins">
        <div className="flex justify-center">
          <h1 className="p-4 px-8 font-bold text-3xl text-primary">Tips to Prevent Vision Loss</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={bloodSugarImage} alt="Maintain Blood Sugar Levels" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Maintain your blood sugar levels</h2>
            <p className="mt-2 text-gray-600">
              90% of blindness caused by diabetes is preventable. Ask your health care team to help you set and reach goals to manage your blood sugar, blood pressure, and cholesterol—also known as the ABCs of diabetes.
              <br />
              A1c: The goal set for many people is less than 7% for this blood test, but your doctor might set different goals for you.
              <br />
              Blood pressure: High blood pressure causes heart disease. The goal is less than 140/90 mmHg for most people, but your doctor might set different goals for you.
              <br />
              Cholesterol: LDL or “bad” cholesterol builds up and clogs your blood vessels. HDL or “good” cholesterol helps remove the “bad” cholesterol from your blood vessels. Ask what your cholesterol numbers should be.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={familyHistoryImage} alt="Know Your Family's Eye Health History" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Know your family’s eye health history</h2>
            <p className="mt-2 text-gray-600">
              Talk to your family members about their eye health history. It’s important to know if anyone has been diagnosed with an eye disease or condition, since many are hereditary. This information will help to determine if you’re at higher risk for developing an eye disease or condition.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={healthyWeightImage} alt="Maintain a Healthy Weight" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Maintain a healthy weight</h2>
            <p className="mt-2 text-gray-600">
              Being overweight or obese increases your risk of developing diabetes and other systemic conditions, which can lead to vision loss, such as diabetic eye disease or glaucoma. If you’re having trouble maintaining a healthy weight, talk to your doctor.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={protectiveEyewearImage} alt="Wear Protective Eyewear" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Wear protective eyewear</h2>
            <p className="mt-2 text-gray-600">
              Wear protective eyewear when playing sports or doing activities around the home. Protective eyewear includes safety glasses and goggles, safety shields, and eye guards specially designed to provide the correct protection for the activity in which you’re engaged. Most protective eyewear lenses are made of polycarbonate, which is 10 times stronger than other plastics. Many eye care providers sell protective eyewear, as do some sporting goods stores.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={quitSmokingImage} alt="Quit Smoking or Never Start" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Quit smoking or never start</h2>
            <p className="mt-2 text-gray-600">
              Smoking is as bad for your eyes as it is for the rest of your body. Research has linked smoking to an increased risk of developing age-related macular degeneration, cataract, and optic nerve damage, all of which can lead to blindness.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={sunglassesImage} alt="Be Cool and Wear Your Shades" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Be cool and wear your shades</h2>
            <p className="mt-2 text-gray-600">
              Sunglasses are a great fashion accessory, but their most important job is to protect your eyes from the sun’s ultraviolet rays. When purchasing sunglasses, look for ones that block out 99 to 100 percent of both UV-A and UV-B radiation.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={eyeRestImage} alt="Give Your Eyes a Rest" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Give your eyes a rest</h2>
            <p className="mt-2 text-gray-600">
              If you spend a lot of time at the computer or focusing on any one thing, you sometimes forget to blink and your eyes can get fatigued. Try the 20-20-20 rule: Every 20 minutes, look away about 20 feet in front of you for 20 seconds. This short exercise can help reduce eyestrain.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={cleanHandsImage} alt="Clean Your Hands and Contact Lenses Properly" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Clean your hands and your contact lenses—properly</h2>
            <p className="mt-2 text-gray-600">
              To avoid the risk of infection, always wash your hands thoroughly before putting in or taking out your contact lenses. Make sure to disinfect contact lenses as instructed and replace them as appropriate.
            </p>
          </div>
          <div className="shadow-sm border-2 p-4 rounded-md hover:shadow-xl">
            <img src={eatRightImage} alt="Eat Right to Protect Your Sight" className="h-60 w-full object-cover rounded-md" />
            <h2 className="font-bold text-xl text-secondary mt-4">Eat right to protect your sight</h2>
            <p className="mt-2 text-gray-600">
              You’ve heard that carrots are good for your eyes. But eating a diet rich in fruits and vegetables—particularly dark leafy greens, such as spinach, kale, or collard greens—is important for keeping your eyes healthy, too. Research has also shown there are eye health benefits from eating fish high in omega-3 fatty acids, such as salmon, tuna, and halibut.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
