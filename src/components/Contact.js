import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((err) => alert(err));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap xl:w-[1280px]">
        <div className="lg:w-2/3 md:w-1/2 bg-main rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2816638.338963826!2d-124.06812!3d46.4165225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1651379382281!5m2!1sen!2sus"
          />
          <div className="bg-header relative flex flex-wrap py-6 rounded shadow-md w-full opacity-80">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-primary tracking-wide text-xs">
                LOCATION
              </h2>
              <p className="mt-1 text-background">Beaverton, OR 97006</p>
              <h2 className="title-font font-semibold text-primary tracking-wide text-xs mt-4">
                EMAIL
              </h2>
              <p className="text-background leading-relaxed hover:underline">
                <a href="mailto:ccboveda@gmail.com">ccboveda@gmail.com</a>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 lg:mt-0 mt-4">
              <h2 className="title-font font-semibold text-primary tracking-widest text-xs">
                LINKEDIN
              </h2>
              <p className="leading-relaxed text-background hover:underline">
                <a href="https://www.linkedin.com/in/chris-boveda/">
                  linkedin.com/in/chris-boveda/
                </a>
              </p>
              <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4">
                GITHUB
              </h2>
              <p className="leading-relaxed text-background hover:underline">
                <a href="https://github.com/cboveda">github.com/cboveda</a>
              </p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-accent sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            I am seeking a remote or local software engineering position with a
            path towards team leadership.
          </p>
          <div className="relative mt-2 mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-accent">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-background2 border border-header focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-main py-1 px-3 leading-8 transition-colors duration-400 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-accent">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-background2 border border-header focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-main py-1 px-3 leading-8 transition-colors duration-400 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-accent">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=" h-24 w-full bg-background2 border border-header focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-main py-1 px-3 leading-8 transition-colors duration-400 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-background border border-accent bg-primary py-2 px-6 focus:outline-none hover:bg-secondary text-lg transition-colors duration-400 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
