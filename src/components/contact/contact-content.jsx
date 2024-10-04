import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import watsapp from "../../../public/images/whatsapp (1).png"
import twitter from "../../../public/images/twitter (1).png"
import facebook from "../../../public/images/facebook.png"

export default function ContactContent() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const [form, setForm] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "message"), form);
      alert("Message sent successfully");
      setForm({
        First_name: "",
        Last_name: "",
        Email: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <div className="flex text-left responsive-layout">
        <div className="w-full text-left mr-10">
          <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
            <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
              Writes us a message
            </h1>
            <br />
            <br />
            <div className="w-full text-lg custom-font-body-contact">
              Feel free to reach out to us anytime—whether you have a question,
              need more information, or just want to connect. We’d love to hear
              from you and are here to help with any inquiries you may have!
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex text-left custom-font-body-contact">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="font-custom">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="First_name"
                value={form.First_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="Last_name"
                value={form.Last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={form.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="message"
                id="message"
                name="Message"
                rows="5"
                value={form.Message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex text-left responsive-layout-contact">
        <div className="w-full text-left mr-10">
          <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
            <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
              Physical Location
            </h1>
            <br />
            <br />
            <div className="w-full text-lg custom-font-body-contact">
              You can easily locate Lemon Secure Solutions at First House, Plot
              Number BC52/53, Livingstone Avenue, P.O. Box 1246, Blantyre. The
              map below provides precise directions to our office, making your
              visit convenient. We look forward to assisting you in person!
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex text-left custom-map">
        <Map />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex text-left responsive-layout-contact">
        <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
          <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
            Visit our social media
          </h1>
          <br />
          <br />
          <div className="w-full text-lg custom-font-body-contact">
            Stay connected with Lemon Secure Solutions! Follow us on our social
            media pages for the latest updates, security tips, and insights into
            our services. You can also reach out to the following number for more information  +265 999 257 356.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="custom-spacer-contact"></div>
      <div className="flex text-left">
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src={watsapp}
          width={50}
          height={50}
        />
        <div className="w-24"/>
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src={twitter}
          width={50}
          height={50}
        />
        <div className="w-24"/>
        <Image
          className="transition-transform duration-300 transform hover:scale-110"
          src={facebook}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
