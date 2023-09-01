import React from "react";

export default function Topics() {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url(/stars.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className=" text-gray-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-0">
        <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
              Propulsion & Heat transfer Technology
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-7">
                <li>Clean Combustion</li>
                <li>Green Propellants</li>
                <li>Cryogenics</li>
                <li>Thermal analysis</li>
                <li>Heat exchangers</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
              Experimental and Computational Aerodynamics
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-4">
                <li>Wind tunnel testing</li>
                <li>Shock waves</li>
                <li>Hypersonic</li>
                <li>Re-entry aerodynamics</li>
                <li>Acoustics</li>
                <li>Aero-elasticity</li>
                <li>Fluid structure interaction</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
              Materials and composites
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-7">
                <li>Smart Materials</li>
                <li>Additives Manufacturing</li>
                <li>3-D printing</li>
                <li>Modelling and simulation technologies</li>
                <li>Structural analysis</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
            System Engineering
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-5">
                <li>Intensive CAD/CAM, optimising simulation and modelling.</li>
                <li>Aircraft Design and system engineering</li>
                <li>3-D printing</li>
                <li>Launch Vehicles system and Technologies</li>
                <li>Rocket and Space</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
            Unmanned Aircraft Systems 
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-20">
                <li>Digital aviation</li>
                <li>Aircraft Maintenance</li>
                <li>Civil aviation and Space policies</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
            Space Technology
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-7">
                <li>Space dynamics and Interplanetary trajectory</li>
                <li>Defence and Security</li>
                <li>Space resource utilization</li>
                <li>Astrophysics</li>
                <li>Lander technology for space</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
            Avionics, Communication Navigation Guidance and Control
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-2">
                <li>Aviation 4.0</li>
                <li>Human system interaction</li>
                <li>Sensors</li>
                <li>MEMS</li>
                <li>Mechatronics, microelectronics in Aerospace systems</li>
                <li>Automation control and robotics</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
