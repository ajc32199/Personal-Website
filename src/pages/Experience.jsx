import React from 'react'

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div>
        <h2>Daikin Applied - ADC Controls Intern</h2>
        <p>During the summer of 2024, I had the privilege of working as a software engineer intern for Daikin Applied Americas, Inc. While there, my primary role was to develop a configurable modbus dataprovider, which would be used to link and test various HVAC hardware, building management systems, chillers, and other systems. It was built upon libmodbus, and written in C++. Under the mentorship of a senior software engineer, I spent my time implementing essential functions the dataprovider needed. I implmemented standard modbus operations, such as point, register, and coil support, read/write multiple points, and other user stories. Additionally, I identified an issue of the systems ability to implement and detect endianess across various systems, which I was able to refactor to ensure uniform data transmission.</p>
        <p>
          I took away a lot from that experience. I became familiar with Azure DevOps and Agile methodologies. I learned the importance of proper documentation, and honed my ability to look at problems and software design from a high level, which allowed me to identify appropriate design paterns and solutions. I also gained great insight from other engineers, who were willing to share there experiences and help me develop as a software engineer.
        </p>
      </div>
    </div>
  )
}

export default Experience