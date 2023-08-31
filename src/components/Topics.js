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
        <div className="flex justify-center items-center">
          <table className=" text-xs border-spacing-5 border-2 border-slate-500 md:w-3/4 lg:w-1/2">
            <tr className="">
              <td className="p-4 border border-slate-700">1</td>
              <td className="p-4 border border-slate-700">Propulsion</td>
              <td className="p-4 border border-slate-700">
                <ul className="p-4 list-decimal space-y-3">
                  <li>Advanced In-Space Propulsion & Power Concepts</li>
                  <li>Advances in Space Propulsion</li>
                  <li>Propulsion Analysis</li>
                  <li>Clean Combustion</li>
                  <li>Green propellant</li>
                  <li>Fluid Mechanics</li>
                </ul>
              </td>
            </tr>
            <tr className="">
              <td className="p-4 border border-slate-700">2</td>
              <td className="p-4 border border-slate-700">Structures</td>
              <td className="p-4 border border-slate-700">
                <ul className=" p-4 list-decimal space-y-3">
                  <li>Materials</li>
                  <li>Aviation 4.0</li>
                  <li>Heat Transfer</li>
                  <li>Theories, Models and Concepts</li>
                  <li>Advanced Energy Sources</li>
                  <li>Advanced Heat Pipe Technologies</li>
                  <li>Thermal Control</li>
                  <li>Thermal Control for Lunar and Deep Missions</li>
                  <li>Two Phase Thermal Control Systems</li>
                  <li>Advanced Thermal Control Technologies</li>
                </ul>
              </td>
            </tr>
            <tr className="">
              <td className="p-4 border border-slate-700">3</td>
              <td className="p-4 border border-slate-700">Space Dynamics</td>
              <td className="p-4 border border-slate-700">
                <ul className=" p-4 list-decimal space-y-3">
                  <li>Lunar in Space Resource Utilization</li>
                  <li>Lunar Lander Technologies and Design</li>
                  <li>Avionics</li>
                  <li>Astrophysics</li>
                  <li>New Directions in Astrophysics/Particle Physics</li>
                  <li>Enabling Technologies for Lunar Surface Science</li>
                  <li>
                    Far Term Space Transport and Environment Models and Theories
                  </li>
                  <li>High Capacity Heat Rejection Systems</li>
                  <li>Innovative Techniques in Nuclear Energy</li>
                  <li>Microgravity Thermophysics</li>
                  <li>New Directions in Communications</li>
                  <li>Planetary Defense and Societal Protection</li>
                  <li>Sensors</li>
                  <li>Smart Materials</li>
                  <li>Space faring societies</li>
                  <li>Space policy and space law in a social context</li>
                  <li>Space Science and Technology Roadmaps</li>
                  <li>Space societies/ the settlement of space environments</li>
                  <li>Technology transfers and spinoffs</li>
                  <li>
                    The relationship between astrosociology and astrobiology
                  </li>
                  <li>Theories on High Frequency Gravity Wave</li>
                  <li>
                    Unconventional Physical Principles and Gravitational Models
                  </li>
                  <li>
                    Engineering Design including Vibration & Noise, Thermal
                    Engineering, Cryogenics, Heat Transfer
                  </li>
                  <li>
                    Non-conventional & Renewable Energy, Fluid Mechanics &
                    Machinery
                  </li>
                  <li>
                    Optimisation, Simulation & Modelling, Dynamic Systems,
                    Measurement & Control
                  </li>
                  <li>
                    Reliability, Availability & Maintainability, Tribology
                    including Bearings
                  </li>
                  <li>
                    Artificial Intelligence, Knowledge Intensive CAD/CAM,
                    Computer Aided Product Development, PDM / Enterprise
                    Information Management, Computing Technologies
                  </li>
                  <li>
                    Bioengineering, Perception Based Engineering, Smart
                    Technology, Mechatronics, Micro Electronics in Mechanical
                    System
                  </li>
                  <li>
                    Energy Efficiency & Energy Conservation, Power Plant
                    Engineering
                  </li>
                  <li>Automation, Control & Robotics, Casting & Welding</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
