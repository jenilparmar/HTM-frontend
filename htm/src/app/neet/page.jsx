import React from "react";
import Section from "../../../component/Card";

export default function Neetpage() {
  return (
    <>
      <div className="md:flex  justify-around ">
        <Section subject_name="Physics" logo="physics logo.jpg"></Section>
        <Section subject_name="Chemistry" logo="chem logo.jpg"></Section>
        <Section subject_name="Biology" logo="bio image.jpeg"></Section>
      </div>
    </>
  );
}
