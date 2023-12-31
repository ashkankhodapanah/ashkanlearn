import React, { useEffect, useState } from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import coursesApi from "../../api/coursesApi";
import CourseBox from "../../Components/CourseBox/CourseBox";
export default function Course() {
  const { courseName } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coursesApi.getSingleCourseData({}, courseName);
      setData(response.data);
    };
    fetchData();
  }, [courseName]);

  console.log(Data);
  return (
    <>
      <NavbarTop />
      <CourseBox Data={Data } />
      <Footer />
    </>
  );
}
