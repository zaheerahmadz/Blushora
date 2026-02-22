import React from "react";
import {
  FaTruck,
  FaPhone,
  FaHeadset,
  FaSyncAlt,
  FaInstagram,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import CtnBtn from "./CtnBtn";

const MailingListCTA = () => {
  return (
    <>
      <section className=" w-full h-60 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
        <h2 className="text-center text-4xl py-5">
          SIGN-UP THE{" "}
          <span className="text-red-600 ">BEAUTY FAN CLUB TODAY</span>
          <p className="text-center text-xl py-5 text-gray-600">
            Subscribe to our mailing list to be notified about news, collections
            and special offers
          </p>
        </h2>
        <div className="max-w-3xl mx-auto px-4 ">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className=" w-full flex-1py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-0.5 focus:ring-red-500 focus:border-red-500 transition"
            />

            <CtnBtn className="bg-red-500 w-full sm:w-auto px-8 py-3">
              Subscribe
            </CtnBtn>
          </form>
        </div>
      </section>
    </>
  );
};

export default MailingListCTA;
