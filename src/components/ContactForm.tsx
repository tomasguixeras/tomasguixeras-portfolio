import React from "react";

function ContactForm() {
  return (
    <div className="w-5/6 mb-16 md:max-w-lg lg:w-full">
      <form action="">
        <div className="flex items-center justify-center text-left gap-2 mb-5">
          <div className="flex-1 flex flex-col">
            <label className="pl-2 mb-2 md:text-lg" htmlFor="">
              Name
            </label>
            <input
              placeholder="Demo Name"
              className="box-border w-full bg-transparent border-2 rounded-lg p-1 lg:w-52"
              type="text"
            />
          </div>
          <div className="flex-1 flex flex-col ml-1">
            <label className="pl-2 mb-2 md:text-lg" htmlFor="">
              Email
            </label>
            <input
              placeholder="example@mail.com"
              className="box-border w-full bg-transparent border-2 rounded-lg p-1 lg:w-52"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col text-left mt-2 lg:w-full">
          <label className="pl-2 mb-2 md:text-lg" htmlFor="">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            className="bg-transparent border-2 rounded-lg p-1 lg:w-full"
            name=""
            id=""
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#FFC25C] py-2 px-4 w-40 m-4 rounded-full text-[#333544] md:text-xl md:font-semibold md:w-60 md:py-2 hover:shadow-md hover:shadow-amber-400"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
