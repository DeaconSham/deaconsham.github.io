import { useState, useEffect } from 'react'

function Background() {
    const [pageHeight, setPageHeight] = useState(1200)

    useEffect(() => {
        const update = () => {
            const container = document.querySelector('.container')
            if (container) {
                const rect = container.getBoundingClientRect()
                const absoluteBottom = rect.bottom + window.scrollY
                const truePageBottom = Math.max(absoluteBottom, window.innerHeight)
                setPageHeight(truePageBottom - 52)
            }
        }
        update()
        window.addEventListener('resize', update)
        const observer = new ResizeObserver(update)
        observer.observe(document.body)
        return () => {
            window.removeEventListener('resize', update)
            observer.disconnect()
        }
    }, [])

    const svgHeight = pageHeight

    const stationStart = 950
    const stationSpacing = 175
    const stationCount = Math.max(0, Math.floor((svgHeight - stationStart - 200) / stationSpacing))

    const endHubY = stationStart + stationCount * stationSpacing + 150

    const renderStation = (cx, y, type) => {
        if (type === 0) {
            return <circle cx={cx} cy={y} r="3.5" fill="#ffffff" stroke="#0a0a0a" strokeWidth="1.5" />
        } else if (type === 1) {
            return null
        } else {
            return (
                <g>
                    <circle cx={cx} cy={y} r="6" fill="#0a0a0a" stroke="#ffffff" strokeWidth="2.5" />
                    <circle cx={cx} cy={y} r="2.5" fill="#ffffff" stroke="none" />
                </g>
            )
        }
    }

    const renderHubRow = (y) => (
        <g>
            <rect x="60" y={y - 12} width="60" height="24" rx="12" fill="#0a0a0a" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="70" y1={y} x2="110" y2={y} stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="70" cy={y} r="4" fill="#ffffff" />
            <circle cx="90" cy={y} r="4" fill="#ffffff" />
            <circle cx="110" cy={y} r="4" fill="#ffffff" />
        </g>
    )

    return (
        <svg
            className="bg-decoration"
            width="360"
            viewBox={`0 0 360 ${svgHeight}`}
            preserveAspectRatio="xMinYMin meet"
            style={{ height: `${pageHeight}px` }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.9">
                <g fontFamily="Futura, 'Trebuchet MS', Arial, sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.25em" fill="#ffffff" textAnchor="start">
                    <text x="35" y="90" transform="rotate(-40 35 90)">OTTAWA</text>
                    <text x="85" y="90" transform="rotate(-40 85 90)">TORONTO</text>
                    <text x="135" y="90" transform="rotate(-40 135 90)">WATERLOO</text>
                </g>

                <path
                    d={`M 40 100 L 40 380 L 70 410 L 70 ${svgHeight}`}
                    stroke="#00933c" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                <path
                    d={`M 90 100 L 90 ${svgHeight}`}
                    stroke="#b933ad" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                <path
                    d={`M 140 100 L 140 600 L 110 630 L 110 ${svgHeight}`}
                    stroke="#f58220" strokeWidth="6" strokeLinejoin="round" fill="none"
                />

                <g>
                    {renderStation(40, 100, 2)}
                    {renderStation(90, 100, 2)}
                    {renderStation(140, 100, 2)}
                </g>

                <g>
                    {renderStation(40, 300, 0)}
                    {renderStation(90, 300, 0)}
                    {renderStation(140, 300, 0)}
                </g>

                <g>
                    {renderStation(70, 500, 0)}
                    {renderStation(90, 500, 0)}
                    {renderStation(140, 500, 0)}
                </g>

                {renderHubRow(750)}

                {Array.from({ length: stationCount }, (_, i) => {
                    const y = stationStart + i * stationSpacing
                    return (
                        <g key={`station-${i}`}>
                            {renderStation(70, y, 0)}
                            {renderStation(90, y, 0)}
                            {renderStation(110, y, 0)}
                        </g>
                    )
                })}

                {renderHubRow(endHubY)}
            </g>
        </svg>
    )
}

export default Background