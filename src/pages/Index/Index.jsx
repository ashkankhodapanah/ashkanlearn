import React, { useEffect, useState } from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import coursesApi from "../../api/coursesApi";

export default function Index() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await coursesApi.getAllCourses();
      setData(response.data);    };
    fetchData();  }, []);

  return (
    <>
      <NavbarTop />
      <Slider  Data={Data} />
      <Footer />
    </>
  );
}
