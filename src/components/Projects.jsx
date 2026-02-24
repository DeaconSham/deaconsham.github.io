const projects = [
    {
        name: 'RL Bobble League Agent',
        desc: 'RL model for a turn-based soccer game',
        url: 'https://github.com/DeaconSham/RL-Bobble-League-Agent',
    },
    {
        name: 'Delirium Risk Monitoring Wearable',
        desc: 'STM32 wearable for patient vital monitoring',
        url: 'https://github.com/DeaconSham/Delirium-Prevention-Wearable',
    },
    {
        name: 'BENTOgelion',
        desc: 'A survival rover for MakeUofT 2026',
        url: 'https://github.com/DeaconSham/BENTOgelion',
    },
    {
        name: 'Airline Booking Software',
        desc: 'Console reservation system in C++',
        url: 'https://github.com/DeaconSham/Airline-Booking-Software',
    },
    {
        name: 'Sudoku',
        desc: 'Generator and solver with backtracking',
        url: 'https://github.com/DeaconSham/Sudoku',
    },
    {
        name: 'Particle Detection for Medical Imaging',
        desc: 'Top 10% CERN competition proposal',
        url: 'https://drive.google.com/file/d/18i8jgXv7321wLO_pFvskjW6e5mcL3_Rw/view?usp=sharing',
    }
]

function Projects() {
    return (
        <section className="section projects-section">
            <h2 className="section-label">
                PROJECTS
                <span className="mta-badge" style={{ backgroundColor: '#00933c' }}>2</span>
            </h2>
            <ul className="project-list">
                {projects.map((project) => (
                    <li key={project.name} className="project-item">
                        {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                        ) : (
                            <span style={{ fontWeight: 500 }}>{project.name}</span>
                        )}
                        <span className="project-desc">{project.desc}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects