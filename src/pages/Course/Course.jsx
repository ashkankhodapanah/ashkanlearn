import React, { useEffect } from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import coursesApi from "../../api/coursesApi";

export default function Course() {
  const { courseName } = useParams();
  console.log(courseName);
  // useEffect(() => {
  //   // اصلاح: ارسال پارامتر categoryName به تابع getCategoryCourses
  //   coursesApi.getCategoryCourses({}, categoryName).then((response) => {
  //     console.log(response.data);
  //   });
  // }, [categoryName]);

  return (
    <>
      <NavbarTop />
      <p>Course{courseName}</p>
      <Footer />
    </>
  );
}
