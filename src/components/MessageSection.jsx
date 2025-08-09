import {ArrowDown, ArrowDownAZ, SendIcon} from "lucide-react";
import React from "react";
import {cn} from "../lib/utils.js";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver.js";

export const MessageSection = () => {
    const [result, setResult] = React.useState("");
    const [h1Ref, isH1Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [h2Ref, isH2Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [h3Ref, isH3Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [formRef, isformVisible] = useIntersectionObserver({ threshold: 0.5 });


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6f0ef7f9-3f7c-4b4d-9129-4bb9a8208efc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Thank you for your message! We will get back to you as soon as possible.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
      <section className={"min-h-200 relative flex flex-col items-center justify-center mt-25"} id={"message"}>
          <div className="bg-background p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 max-w-95 md:max-w-6xl md:min-w-335 mx-auto rounded-3xl shadow-xs mt-15">
              <div className={"text-center flex flex-col align-text-top gap-8"}>
                  <h1
                      ref = {h1Ref}
                      className={`text-3xl md:text-5xl font-bold -tracking-tight opacity-0 ${isH1Visible ? 'animate-fade-in-down' : ''}`}>
                      Send Us a Message
                  </h1>
                  <h3
                      ref = {h2Ref}
                      className={`text-sm md:text-lg font-bold mt-12 max-w-xl opacity-0 ${isH2Visible ? 'animate-fade-in-down md:animate-fade-in-left' : ''}`}>
                      If you are interested in a new alarm or camera system, please fill out the form and send us a message.
                  </h3>
              </div>

              <form
                  ref = {formRef}
                  className={`space-y-6 w-full md:row-start-1 md:col-start-2 md:row-span-2 md:mt-15 md:border-l-2 md:border-black md:pl-12 opacity-0 ${isformVisible ? 'animate-fade-in-up md:animate-fade-in-right' : ''}`} onSubmit={onSubmit}>
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-left"> Your Name</label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-md border border-input bg-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary"
                          placeholder="John Smith"
                      />
                  </div>

                  <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-left"> Your Email</label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-md border border-input bg-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary"
                          placeholder="JohnSmith@gmail.com"
                      />
                  </div>

                  <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-left"> Your Message</label>
                      <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-md border border-input bg-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Hello, I'd like to get in touch with you about ..."
                      />
                  </div>

                  <button type="submit" className={cn("animated-button mx-auto mt-10 shadow-2xl",
                  )}
                  >
                      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          ></path>
                      </svg>
                      <span className="text">Send Message</span>
                      <span className="circle"></span>
                      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          ></path>
                      </svg>
                  </button>
              </form>
              <div
                  ref = {h3Ref}
                  className={`text-center text-muted-foreground cursor-default flex flex-col items-center justify-center gap-16 md:mt-0 mt-16 opacity-0 ${isH3Visible ? 'animate-fade-in-up' : ''}`}>
                  <h3 className={`text-sm md:text-lg font-bold max-w-xl`}>
                      You may also go to the bottom of the site to find our contact info.
                  </h3>
                  <a href={"#contact"} className={"text-center "}>
                      <ArrowDown size={24}/>
                  </a>
              </div>
              <div className="text-center text-muted-foreground cursor-default md:col-span-2">
                  {result}
              </div>
          </div>
      </section>
    );
};