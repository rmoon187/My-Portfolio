import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/heromodels/ContactExperience";
import emailjs from '@emailjs/browser'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {

  useGSAP(()=>{
          gsap.fromTo('.contact-left',
              {x:-50,
              opacity:0
              },
              {x:0,
               opacity:1,
               duration:1,
               ease:'power2.inOut',
              
               scrollTrigger:{
                  trigger:'#contact',
                  start:'top center'
               }   
              }
          )
      },[])

  useGSAP(()=>{
          gsap.fromTo('.contact-right',
              {x:50,
              opacity:0
              },
              {x:0,
               opacity:1,
               duration:1,
               ease:'power2.inOut',
              
               scrollTrigger:{
                  trigger:'#contact',
                  start:'top center'
               }   
              }
          )
      },[])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EMAILJS ERROR", error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"Get In Touch With Me"}
          sub={"📭 Contact Information"}
        />

        <div className="grid-12-cols mt-16">
          {/* Left Side: Contact Form */}
          <div className=" contact-left xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
              ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {" "}
                      {loading ? "Sending ..." : "Send Message"}{" "}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Contact Experience */}
          <div className="xl:col-span-7 min-h-96 contact-right ">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
