import contactImg from "@assets/contact.jpg";
import { DataContact } from "../constants";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row py-8 px-4 gap-8 md:gap-4 bg-neutral-content my-10 rounded-lg">
      <div className="w-full md:w-[60%] min-h-[500px] md:h-auto  relative flex justify-center items-center">
        <img
          src={contactImg}
          alt="contact img"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 z-10 p-4">
          {DataContact.map((contact) => (
            <div
              key={contact.title}
              className="bg-neutral-content text-neutral-focus rounded-xl shadow-lg p-3 max-w-[250px]  flex flex-col gap-2 justify-center items-center"
            >
              <figure className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-neutral">
                <i
                  className={`${contact.icon} text-neutral-content text-2xl`}
                ></i>
              </figure>
              <h2 className="text-center text-lg font-bold">
                {contact.title}
              </h2>
              <p className="text-center text-xs md:text-sm">
                {contact.description}
              </p>
              {contact.url ? (
                <a
                  href={contact.url}
                  target="_blank"
                  className="flex items-center text-xs md:text-sm font-bold"
                >
                  <i className={contact.subIcon}></i>
                  {contact.data}
                </a>
              ) : (
                <p className="text-xs md:text-sm font-bold">{contact.data}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <form className="max-w-[350px] md:max-w-none mx-auto md:mx-0 md:w-[40%] flex flex-col gap-6 px-0 lg:px-4 text-neutral">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-center font-bold">Contact Me!</h2>
          <p className="text-sm text-center">
            If you're interested in connecting with me for potential job
            opportunities, please feel free to send me a message.
          </p>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-neutral font-bold">Name:</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered text-neutral-content bg-neutral-focus input-neutral input-sm md:input-md w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-neutral font-bold">Email:</span>
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="input   bg-neutral-focus text-neutral-content input-bordered input-neutral input-sm md:input-md w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-neutral font-bold">Message:</span>
          </label>
          <textarea
            className="textarea textarea-neutral text-neutral-content  bg-neutral-focus h-40 resize-none"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button className="btn btn-block btn-neutral">Send</button>
      </form>
    </section>
  );
};

export default Contact;
