import React from 'react'
import { useParams } from "react-router-dom";




export default function Category() {

  const { categoryName } = useParams();


  useEffect(() => {
    menusApi.getAllMenus().then((response) => {
      setmenuTopbar(response.data);
        setCourses(allCourses);
        setOrderedCourses(allCourses);
      });
  }, [categoryName]);




  return (
    <div>Category</div>
  )
}
