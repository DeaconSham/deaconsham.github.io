const experiences = [
    {
        title: 'STEM Outreach Instructor - Carleton University',
        url: 'https://carleton.ca/',
        date: 'January 2026 - Present',
        desc: 'Mobilizing technical educational programming across the National Capital Region.'
    },
    {
        title: 'Electrical and Firmware Team Member - Midnight Sun',
        url: 'https://www.uwmidsun.com/',
        date: 'September 2025 - Present',
        desc: 'Designed a custom battery monitoring PCB and implemented a data acquisition task in FreeRTOS utilizing DMA and ADCs on an STM32 microcontroller.'
    },
    {
        title: 'Research Assistant - University of Ottawa SQO Group',
        url: 'https://sqogroup.ca/',
        date: 'January 2024 - August 2024',
        desc: 'Fabricated voltage tunable liquid crystal optics using DMD photoalignment and automated Stokes vector reconstruction via Python, supervised by Dr. Ebrahim Karimi.'
    }
];

function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <h2 className="section-label">
                EXPERIENCE
                <span className="ttc-badge" style={{ backgroundColor: '#00933c' }}>2</span>
            </h2>

            {experiences.map((exp, index) => (
                <div className="experience-block" key={index}>
                    <div className="experience-header">
                        <a href={exp.url} target="_blank" rel="noopener noreferrer">
                            {exp.title}
                        </a>
                        <span className="experience-date">{exp.date}</span>
                    </div>
                    <p className="experience-desc">
                        {exp.desc}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Experience