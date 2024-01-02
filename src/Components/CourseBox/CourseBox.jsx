export default function CourseBox({ Data }) {
  return (
    <div className="bg-gray-200 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              <li key={Data._id}>
                <div className="flex items-center text-sm">
                  <a
                    href={Data.shortName}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {Data.shortName}
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {Data.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center justify-between">
              <p className="text-lg text-gray-900 sm:text-xl">{Data.price}</p>

              <div className="ml-4  border-gray-300 pl-4">
                <h2 className="sr-only">price</h2>
                price
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{Data.description}</p>
            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center grid align-middle ">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={`http://localhost:4000/courses/covers/${Data.cover}`}
              alt={Data.cover}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to bag
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
