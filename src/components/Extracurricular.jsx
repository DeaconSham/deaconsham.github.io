const extracurriculars = [
    {
        title: 'Outreach Executive - CUTC Organization',
        url: 'https://cutc.ca/',
        date: 'September 2025 - Present',
        desc: 'Expanded conference reach to 500+ participants by spearheading corporate outreach initiatives and directing a 70+ person hackathon.'
    },
    {
        title: 'NCCP Certfied Coach - Power Badminton Academy',
        url: 'https://www.ottawapba.ca/',
        date: 'September 2023 - June 2024',
        desc: 'Launched a new club attracting 50+ inaugural participants and logging 500+ coaching hours by managing all phases of conception and implementation.'
    },
    {
        title: 'NCCP Certfied Coach - Soong Badminton Academy',
        url: 'https://www.badmintonontario.ca/directory/soong-badminton-academy/',
        date: 'October 2022 - August 2023',
        desc: 'Improved the technical skills of 200+ athletes by developing 10+ customized lesson plans and providing systematic, active feedback during training.'
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
