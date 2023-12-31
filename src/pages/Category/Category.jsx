import React, { useEffect, useState } from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import coursesApi from "../../api/coursesApi";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";

export default function Category() {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coursesApi.getCategoryCourses({}, categoryName);
      setData(response.data);
    };
    fetchData();
  }, [categoryName]);

  const handleShowMore = () => {    setDisplayCount((prevCount) => prevCount + 3);  };

  return (
    <>
      <NavbarTop />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {data.slice(0, displayCount).map((item) => (
                <CategoryBox key={item._id} {...item} />
              ))}
            </div>
            {data.length >= displayCount && (
              <button  className="mt-4 px-4 py-2 bg-yellow-600 hover:bg-orange-600 text-white rounded-md"  onClick={handleShowMore} >
                نمایش موارد بیشتر
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
