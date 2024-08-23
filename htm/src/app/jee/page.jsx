import React from "react";
import Section from "../../../component/Card";

export default function Jeepage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around flex-wrap w-screen">
        <Section subject_name="Physics" logo="/physics logo.jpg"></Section>
        <Section subject_name="Chemistry" logo="/chem logo.jpg"></Section>
        <Section subject_name="Maths" logo="/maths image.jpeg"></Section>
      </div>
    </>
  );
}
