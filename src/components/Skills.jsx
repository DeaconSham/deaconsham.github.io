const skillCategories = [
    {
        title: 'Embedded',
        skills: ['C/C++', 'FreeRTOS', 'ARM Cortex-M (STM32)', 'Raspberry Pi', 'CMake', 'I2C/SPI/CAN/UART']
    },
    {
        title: 'Software',
        skills: ['Python', 'MATLAB', 'HTML/CSS', 'JavaScript', 'C#/.NET', 'Java']
    },
    {
        title: 'Tools',
        skills: ['Git', 'Linux', 'PyTorch', 'React.js', 'Vite']
    },
    {
        title: 'Hardware',
        skills: ['Altium Designer', 'KiCAD', 'Verilog']
    },
    {
        title: 'Laboratory',
        skills: ['Oscilloscopes', 'DMM', 'Soldering', 'Optical Equipment']
    },
    {
        title: 'Languages',
        skills: ['English (Native)', 'French (Fluent)', 'Cantonese (Intermediate)']
    }
];

function Skills() {
    return (
        <section id="skills" className="section skills-section">
            <h2 className="section-label">
                SKILLS
                <span className="ttc-badge" style={{ backgroundColor: '#f58220' }}>5</span>
            </h2>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div className="skill-category" key={index}>
                        <h3 className="skill-category-title">{category.title}</h3>
                        <ul className="skill-list">
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
