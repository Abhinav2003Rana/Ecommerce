import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            At Forever, we believe that clothing is not just about style; it's a
            form of self-expression. Founded with a passion for fashion and a
            commitment to quality, we aim to provide a diverse range of apparel
            that suits every personality and occasion. Our curated collections
            are designed to inspire confidence and creativity in our customers,
            helping you to express your unique identity through fashion.
          </p>{" "}
          <p>
            We understand that shopping should be an enjoyable experience.
            That’s why we prioritize customer satisfaction and strive to make
            your journey with us seamless and enjoyable. From trendy basics to
            statement pieces, each item in our store is handpicked to ensure you
            find the perfect fit for your lifestyle.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals through fashion. We are
            dedicated to providing high-quality, stylish, and affordable
            clothing that reflects the latest trends while ensuring comfort and
            durability. We aim to create a community where everyone can find
            their unique style, embrace their individuality, and feel confident
            in their choices. Join us in redefining fashion, one outfit at a
            time!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.{" "}
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our usser-friendly interface and hassle-free ordering process,
            shopping has never been easier.{" "}
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.{" "}
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
