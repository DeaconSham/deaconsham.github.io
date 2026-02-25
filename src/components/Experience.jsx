function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <h2 className="section-label">
                EXPERIENCE
                <span className="ttc-badge" style={{ backgroundColor: '#fccc0a', color: '#0a0a0a' }}>1</span>
            </h2>

            <div className="experience-block">
                <p>
                    In my current role as a STEM Outreach Instructor at{' '}
                    <a href="https://carleton.ca/" target="_blank" rel="noopener noreferrer">
                        Carleton University
                    </a>
                    , I am responsible for the development of technical educational programming.
                    My work involves mobilizing these programs across the city of Ottawa.
                </p>
            </div>

            <div className="experience-block">
                <p>
                    Also, I am an electrical and firmware member of the{' '}
                    <a href="https://www.uwmidsun.com/" target="_blank" rel="noopener noreferrer">
                        Midnight Sun Solar Rayce Car Team
                    </a>
                    , where I have designed a custom battery monitoring PCB and written firmware in C for an STM32 microcontroller.
                    I implemented a data acquisition task in FreeRTOS using DMA and ADCs to continuously monitor battery health, and built a PWM driver for steering wheel lights and the high voltage charger safety system.
                </p>
            </div>

            <div className="experience-block">
                <p>
                    Serving as an Outreach Executive for the{' '}
                    <a href="https://cutc.ca/" target="_blank" rel="noopener noreferrer">
                        Canadian Undergraduate Technology Conference (CUTC)
                    </a>
                    , I focus on building strategic industry partnerships and managing corporate engagement for Canada’s largest student-led technology conference.
                </p>
            </div>

            <div className="experience-block">
                <p>
                    Before, I was a Research Assistant at the{' '}
                    <a href="https://sqogroup.ca/" target="_blank" rel="noopener noreferrer">
                        University of Ottawa's Structural Quantum Optics Group
                    </a>
                    {' '} with Dr. Ebrahim Karimi, where I fabricated voltage tunable liquid crystal optics using DMD based photoalignment techniques.
                    I also built a Python program to automate Stokes vector reconstruction, and assembled a laser optics testbed for polarization state tomography.
                </p>
            </div>
        </section>
    )
}

export default Experience