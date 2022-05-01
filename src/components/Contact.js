import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data).map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        ).join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message })
        })
            .then(() => alert("Message sent!"))
            .catch(err => alert(err));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-slate-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                    <div className="bg-slate-800 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-stone-50 tracking-wide text-xs">
                                LOCATION
                            </h2>
                            <p className="mt-1">
                                Beaverton, OR 97006
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 lg:mt-0 mt-4">
                            <h2 className="title-font font-semibold text-stone-50 tracking-wide text-xs">
                                EMAIL
                            </h2>
                            <p className="text-sky-600 leading-relaxed">
                                ccboveda@gmail.com
                            </p>
                            <h2 className="title-font font-semibold text-stone-50 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">
                                925-321-5245
                            </p>
                        </div>
                    </div>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-stone-50 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        I am seeking a remote or local software engineering position with a path towards team leadership.
                    </p>
                    <div className="relative mt-2 mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-stone-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-slate-800 rounded border border-slate-600 focus:border-sky-600 focus:ring-2 focus:ring-sky-900 text-base outline-none text-stone-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-stone-400">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-full bg-slate-800 rounded border border-slate-600 focus:border-sky-600 focus:ring-2 focus:ring-sky-900 text-base outline-none text-stone-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-stone-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-slate-800 rounded border border-slate-600 focus:border-sky-600 focus:ring-2 focus:ring-sky-900 h-32 text-base outline-none text-stone-50 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-stone-50 bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}