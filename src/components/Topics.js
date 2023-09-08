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
                <li>Advances in Space Propulsion and Power Concepts</li>
                <li>Clean Combustion, Performance and Emission</li>
                <li>Green Propellants</li>
                <li>Cryogenics</li>
                <li>Thermal Analysis</li>
                <li>Heat Exchangers</li>
                <li>Atomization and Sprays</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
              Experimental and Computational Aerodynamics
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-4">
                <li>Wind Tunnel Testing</li>
                <li>Shock Waves</li>
                <li>Hypersonic Aerodynamics</li>
                <li>Re-entry Aerodynamics</li>
                <li>Acoustics</li>
                <li>Aeroelasticity</li>
                <li>Fluid Structure Interaction</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
              Materials and Composites
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-7">
                <li>Smart Materials</li>
                <li>Additive Manufacturing</li>
                <li>Advanced Joining Methods</li>
                <li>Material Charecterisation</li>
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
                <li>Digital Aviation</li>
                <li>Drone Technology</li>
                <li>Anti Drone Technology</li>
                <li>Aircraft Maintenance</li>
                <li>Civil Aviation and Space Policies</li>
                <li>Helicopter Technology</li>
                <li>Aircraft Design</li>
                <li>Launch Vehicle Systerms and Technologies</li>
              </ul>
            </div>
          </div>
          <div className="p-3 border border-gray-400 m-5 rounded-md h-96 w-72">
            <div className="text-md font-bold text-center">
            Space Technology
            </div>
            <div className="m-5">
              <ul className="list-decimal space-y-7">
                <li>Space Dynamics and Interplanetary Trajectory</li>
                <li>Defence and Security</li>
                <li>Space Resource Utilization</li>
                <li>Astrophysics</li>
                <li>Lander Technology for Space</li>
                <li>Orbital Mechanics</li>
                <li>Rocket Theory and Design</li>
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
                <li>Human System Unteraction</li>
                <li>Sensors</li>
                <li>Digital Twinning</li>
                <li>Mechatronics, Microelectronics in Aerospace systems</li>
                <li>Automation Control and Robotics</li>
                <li>Spacecraft System Design and Control</li>
                <li>Avionic Systems and Integration</li>
                <li>Satellite Collision and Guidance</li>
                <li>Missile and Trajectory Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
