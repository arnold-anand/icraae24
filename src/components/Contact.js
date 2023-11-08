import React from "react";
export default function Contact() {
  return (
    <div className="text-blue-900 bg-[#f3f2ed] h-screen ">
      <section className="text-gray-500 body-font">
        <div className="container px-5 py-3 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
              Reach Out to Us
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                    
                  <h2 className="text-blue-900 title-font font-medium">
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
                <div className="flex-grow">
                  <h2 className="text-blue-900 title-font font-medium">
                  Dr. S. Venkatachalam
                  </h2>
                  <p className="text-gray-500">Assistant Professor</p>
                  <p className="text-gray-500">Phone: 9791175905</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-blue-900 title-font font-medium">
                  Dr. K. Anton Savio Lewise
                  </h2>
                  <p className="text-gray-500">Assistant Professor</p>
                  <p className="text-gray-500">Phone: 8122846066</p>
                </div>
              </div>
            </div>
          </div>
      <div className=" hidden lg:flex items-center justify-center lg:p-10">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3598830116975!2d76.74148607452811!3d10.93616398922253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba866bd6aaaaaab%3A0xc650b8a75e7b51f0!2sKarunya%20Institute%20of%20Technology%20and%20Sciences%20(Deemed%20University)!5e0!3m2!1sen!2sin!4v1694439544151!5m2!1sen!2sin" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        </div>
      </section>
    </div>
  );
}
