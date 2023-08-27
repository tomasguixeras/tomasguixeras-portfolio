import React from "react";

function ContactForm() {
  return (
    <div className="w-5/6 mb-16">
      <form action="">
        <div className="flex text-left">
          <div className="flex flex-col mr-2">
            <label className="pl-2" htmlFor="">
              Name
            </label>
            <input
              placeholder="Demo Name"
              className="box-border w-full bg-transparent border rounded-lg p-1"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="pl-2" htmlFor="">
              Email
            </label>
            <input
              placeholder="example@mail.com"
              className="box-border w-full bg-transparent border rounded-lg p-1"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col text-left mt-2">
          <label className="pl-2" htmlFor="">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            className="bg-transparent border rounded-lg p-1"
            name=""
            id=""
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#FFC25C] py-2 px-4 w-40 m-4 rounded-full text-[#333544]"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
