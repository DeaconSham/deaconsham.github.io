const skillCategories = [
    {
        title: 'Embedded',
        skills: ['C/C++', 'ARM Cortex-M (STM32)', 'FreeRTOS', 'I2C/SPI/CAN/UART', 'Raspberry Pi', 'CMake']
    },
    {
        title: 'Software',
        skills: ['Python', 'HTML/CSS/JavaScript', 'C#/.NET', 'Java', 'MATLAB', 'SQL']
    },
    {
        title: 'Hardware & Laboratory',
        skills: ['Altium Designer', 'KiCAD', 'LTSpice', 'Verilog', 'Oscilloscopes', 'DMM', 'Soldering', 'Optical Equipment']
    },
    {
        title: 'Tools',
        skills: ['Git', 'Linux', 'PyTorch', 'NumPy', 'React.js', 'Flask', 'Firebase', 'MySQL/PostgreSQL']
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
