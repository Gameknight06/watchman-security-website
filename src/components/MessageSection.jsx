import {SendIcon} from "lucide-react";
import React from "react";
import {cn} from "../lib/utils.js";

export const MessageSection = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0e038e6d-92c6-41e6-90f1-c6f415be3830");

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
      <section className={"min-h-200 relative flex flex-col items-center justify-center mt-20 md:mb-0 mb-30"} id={"message"}>
          <div className="bg-background p-16 flex md:flex-row flex-col items-center justify-between gap-10 max-w-95 md:max-w-6xl md:min-w-335 mx-auto rounded-3xl shadow-xs mt-15" onSubmit={onSubmit}>
              <div className={"text-center md:mb-10 flex flex-col items-center justify-center"}>
                  <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>
                      Send Us a Message
                  </h1>
                  <h3 className={"text-sm md:text-lg font-bold mt-12 max-w-xl"}>
                      Enter your information and a message and click the send message button to get in contact with us.
                  </h3>
                  <h3 className={"text-sm md:text-lg font-bold mt-12 max-w-xl"}>
                      You may also go to the bottom of the site to find our contact info.
                  </h3>
              </div>
              <form className="space-y-6 min-w-full md:min-w-1/3 gap-5 mx-auto">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
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
                      <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
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
                      <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                      <textarea
                          id="message"
                          name="message"
                          required
                          className="w-full px-4 py-3 rounded-md border border-input bg-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Hello, I'd like to get in touch with you about ..."
                      />
                  </div>

                  <button type="sumbit" className={cn("animated-button mx-auto",
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
              <div className="text-center mt-5 text-muted-foreground cursor-default">
                  {result}
              </div>
          </div>
      </section>
    );
};