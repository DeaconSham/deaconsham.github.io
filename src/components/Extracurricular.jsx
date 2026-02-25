const extracurriculars = [
    {
        title: 'Outreach Executive - CUTC Organization',
        url: 'https://cutc.ca/',
        date: 'September 2025 - Present',
        desc: 'Built strategic industry partnerships and managed corporate engagement for Canada’s largest student-led technology conference.'
    },
    {
        title: 'NCCP Certfied Coach - Power Badminton Academy',
        url: 'https://www.ottawapba.ca/',
        date: 'September 2023 - June 2024',
        desc: 'Initiated the formation of a new badminton club in Ottawa, contributing to its conception, planning, and implementation.'
    },
    {
        title: 'NCCP Certfied Coach - Soong Badminton Academy',
        url: 'https://www.badmintonontario.ca/directory/soong-badminton-academy/',
        date: 'October 2022 - August 2023',
        desc: 'Mentored and coached athletes by delivering individualized lesson plans and leading team training sessions.'
    }
];

function Extracurricular() {
    return (
        <section id="extracurricular" className="section experience-section">
            <h2 className="section-label">
                EXTRACURRICULARS
                <span className="ttc-badge" style={{ backgroundColor: '#0085cd' }}>3</span>
            </h2>

            {extracurriculars.map((exp, index) => (
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

export default Extracurricular
