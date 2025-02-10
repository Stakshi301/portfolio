import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import connect from 
function ContactMe() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",   // Replace with your EmailJS Service ID
      "YOUR_TEMPLATE_ID",  // Replace with your EmailJS Template ID
      form.current,
      "YOUR_PUBLIC_KEY"    // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        console.log("Success:", result.text);
        setIsSent(true);  // ✅ Show success message
        e.target.reset();  // ✅ Clear form after submission
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">Lets Connect</h1>

      <div className="text-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-8 p-6">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img src={contact} alt="Contact Me" className="w-full max-w-sm" />
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            
            <div className="flex flex-col">
              <label htmlFor="name" className="flex items-center gap-2 text-lg">
                <BsPerson /> Name
              </label>
              <input type="text" name="user_name" required className="p-2 mt-1 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-400 outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="flex items-center gap-2 text-lg">
                <HiOutlineMail /> Email
              </label>
              <input type="email" name="user_email" required className="p-2 mt-1 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-400 outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="flex items-center gap-2 text-lg">
                <BiMessageSquareDetail /> Message
              </label>
              <textarea name="message" rows="4" required className="p-2 mt-1 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-400 outline-none"></textarea>
            </div>

            {/* ✅ Button Changes After Submission */}
            <button 
              type="submit" 
              className={`mt-4 p-2 text-lg font-semibold rounded-md transition-all ${
                isSent ? "bg-green-500 text-white" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSent ? "Done ✅" : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactMe;
