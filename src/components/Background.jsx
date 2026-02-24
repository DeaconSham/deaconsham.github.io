function Background() {
    return (
        <svg
            className="bg-decoration"
            viewBox="0 0 240 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.9">
                {/*City Labels*/}
                <g fontFamily="Futura" fontSize="12" fontWeight="700" letterSpacing="0.25em" fill="#ffffff" textAnchor="start">
                    <text x="35" y="90" transform="rotate(-40 35 90)">OTTAWA</text>
                    <text x="85" y="90" transform="rotate(-40 85 90)">TORONTO</text>
                    <text x="135" y="90" transform="rotate(-40 135 90)">WATERLOO</text>
                </g>

                {/*Transit Lines*/}
                {/*Red*/}
                <path
                    d="M 40 100 L 40 320 L 70 350 L 70 1250"
                    stroke="#ee352e" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                {/*Yellow*/}
                <path
                    d="M 90 100 L 90 1250"
                    stroke="#fccc0a" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                {/*Blue*/}
                <path
                    d="M 140 100 L 140 450 L 110 480 L 110 1250"
                    stroke="#0039a6" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                {/*Stations*/}

                <g stroke="#ffffff" strokeWidth="2.5" fill="#0a0a0a">
                    {/*Top Terminals*/}
                    <circle cx="40" cy="100" r="4.5" />
                    <circle cx="90" cy="100" r="4.5" />
                    <circle cx="140" cy="100" r="4.5" />

                    {/*Pre-merge Stations*/}
                    <circle cx="40" cy="220" r="4.5" />
                    <circle cx="90" cy="220" r="4.5" />
                    <circle cx="140" cy="220" r="4.5" />

                    <circle cx="90" cy="340" r="4.5" />
                    <circle cx="140" cy="340" r="4.5" />

                    {/*Mid-merge single station*/}
                    <circle cx="90" cy="460" r="4.5" />

                    {/*Bottom individual stations*/}
                    {/*Row 1*/}
                    <circle cx="70" cy="800" r="4.5" />
                    <circle cx="90" cy="800" r="4.5" />
                    <circle cx="110" cy="800" r="4.5" />

                    {/*Row 2*/}
                    <circle cx="70" cy="1050" r="4.5" />
                    <circle cx="90" cy="1050" r="4.5" />
                    <circle cx="110" cy="1050" r="4.5" />
                </g>

                {/*Hub*/}
                <g>
                    <rect x="60" y="568" width="60" height="24" rx="12" fill="#0a0a0a" stroke="#ffffff" strokeWidth="2.5" />
                    <line x1="70" y1="580" x2="110" y2="580" stroke="#ffffff" strokeWidth="2.5" />
                    <circle cx="70" cy="580" r="4" fill="#ffffff" />
                    <circle cx="90" cy="580" r="4" fill="#ffffff" />
                    <circle cx="110" cy="580" r="4" fill="#ffffff" />
                </g>
            </g>
        </svg>
    )
}

export default Background