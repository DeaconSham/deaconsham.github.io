const experiences = [
    {
        title: 'Machine Learning Researcher - University of Waterloo SEMI/U&AI Labs',
        url: 'https://ecreager.github.io',
        date: 'April 2026 - Present',
        desc: 'Incoming undergraduate researcher analyzing computer vision and generative AI models using PyTorch to evaluate privacy risks and develop ethical guidelines.'
    },
    {
        title: 'Electrical and Firmware Team Member - Midnight Sun',
        url: 'https://www.uwmidsun.com/',
        date: 'September 2025 - Present',
        desc: 'Ensured voltage system protection by implementing I2C sensor drivers and developing C drivers for high voltage charger safety alerts.'
    },
    {
        title: 'STEM Outreach Instructor - Carleton University',
        url: 'https://carleton.ca/vv/',
        date: 'January 2026 - April 2026',
        desc: 'Empowered 2,000+ students across 20+ schools by delivering 10+ curriculum aligned technical workshops and coordinating program logistics.'
    },
    {
        title: 'Research Assistant - University of Ottawa SQO Group',
        url: 'https://sqogroup.ca/',
        date: 'January 2024 - August 2024',
        desc: 'Reduced manual data processing time by 90% by developing an automated Python program and fabricating voltage-tunable liquid crystal optics.'
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