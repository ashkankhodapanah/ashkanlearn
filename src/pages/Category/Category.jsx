import React, { useEffect, useState } from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import coursesApi from "../../api/coursesApi";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";

export default function Category() {
  const { categoryName } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coursesApi.getCategoryCourses({}, categoryName);
      setData(response.data);
    };
    fetchData();
  }, [categoryName]);

  console.log(Data);

  return (
    <>
      <NavbarTop />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {Data.map((item) => (
                <CategoryBox key={item._id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
