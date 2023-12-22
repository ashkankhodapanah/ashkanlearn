import React, { useEffect, useState } from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import coursesApi from "../../api/coursesApi";

export default function Category() {
  const { categoryName } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await coursesApi.getCategoryCourses({}, categoryName);
        setData(response.data); };
    fetchData();  }, [categoryName]);

  console.log(Data);   

  return (
    <>
    <NavbarTop />
    <h1>category </h1>
    <p>{categoryName}</p>
    {Data.map((item) => (
      <p key={item._id}>{item.name}</p>
    ))}
    <Footer />
  </>
  );
}
