import { Link } from "react-router-dom";

export default function CategoryBox({ _id, name, description, cover,shortName }) {
  return (
    
      <div key={_id} className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img
            src={`http://localhost:4000/courses/covers/${cover}`}
            alt={cover}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <Link to={`/course-info/${shortName}`}>
            <span className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">{description}</p>
      </div>
    
  );
}
