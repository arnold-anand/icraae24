import React from "react";
export default function Contact() {
  return (
    <div className="text-[#222] bg-slate-100 h-screen lg:py-32">
      <section className="text-gray-500 body-font">
        <div className="container px-5 py-3 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#222]">
              Reach Out to Us
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                    
                  <h2 className="text-[#222] title-font font-medium">
                  Dr. Aldin Justin Sundararaj
                  </h2>
                  <p className="text-gray-500">Assistant Professor</p>
                  <p className="text-gray-500">Organising Secretary ICRAAE-24</p>
                  <p className="text-gray-500">Phone: 9047653317</p>
                  <p className="text-gray-500 text-sm lg:text-md">Email:icraae@karunya.edu</p>
                  
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-[#222] title-font font-medium">
                  Dr. S. Venkatachalam
                  </h2>
                  <p className="text-gray-500">Assistant Professor</p>
                  <p className="text-gray-500">Phone: 9791175905</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-[#222] title-font font-medium">
                  Dr. K. Anton Savio Lewise
                  </h2>
                  <p className="text-gray-500">Assistant Professor</p>
                  <p className="text-gray-500">Phone: 8122846066</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
