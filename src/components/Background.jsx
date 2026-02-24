import { useState, useEffect } from 'react'

function Background() {
    const [pageHeight, setPageHeight] = useState(1200)

    useEffect(() => {
        const updateHeight = () => {
            setPageHeight(document.documentElement.scrollHeight)
        }
        updateHeight()
        window.addEventListener('resize', updateHeight)
        const observer = new ResizeObserver(updateHeight)
        observer.observe(document.body)
        return () => {
            window.removeEventListener('resize', updateHeight)
            observer.disconnect()
        }
    }, [])

    // Scale factor: SVG coordinate space maps 1:1 with pixels at width=120px
    // viewBox width is 240, displayed at 120px → 2:1 ratio
    // So SVG y-coordinate = pageHeight * 2
    const svgHeight = pageHeight * 2

    return (
        <svg
            className="bg-decoration"
            viewBox={`0 0 240 ${svgHeight}`}
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
                    d={`M 40 100 L 40 320 L 70 350 L 70 ${svgHeight}`}
                    stroke="#ee352e" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                {/*Yellow*/}
                <path
                    d={`M 90 100 L 90 ${svgHeight}`}
                    stroke="#fccc0a" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                {/*Blue*/}
                <path
                    d={`M 140 100 L 140 450 L 110 480 L 110 ${svgHeight}`}
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

                    {/*Bottom stations — generated dynamically*/}
                    {Array.from({ length: Math.floor((svgHeight - 800) / 250) + 1 }, (_, i) => {
                        const y = 800 + i * 250
                        return (
                            <g key={`station-row-${i}`}>
                                <circle cx="70" cy={y} r="4.5" />
                                <circle cx="90" cy={y} r="4.5" />
                                <circle cx="110" cy={y} r="4.5" />
                            </g>
                        )
                    })}
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