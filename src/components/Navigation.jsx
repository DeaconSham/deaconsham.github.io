import { useState, useEffect, useCallback } from 'react'

const stations = [
    { id: 'bio', label: 'BIO' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
]

const LINE_COLOR = '#fccc0a'
const COLOR_PASSED = '#00933c'
const COLOR_UPCOMING = '#ee352e'

function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const updateActiveStation = useCallback(() => {
        const scrollY = window.scrollY + window.innerHeight * 0.2
        const atBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20
        let currentIndex = 0

        if (atBottom) {
            currentIndex = stations.length - 1
        } else {
            for (let i = stations.length - 1; i >= 0; i--) {
                const el = document.getElementById(stations[i].id)
                if (el && el.offsetTop <= scrollY) {
                    currentIndex = i
                    break
                }
            }
        }

        setActiveIndex(currentIndex)
    }, [])

    useEffect(() => {
        updateActiveStation()
        window.addEventListener('scroll', updateActiveStation, { passive: true })
        return () => window.removeEventListener('scroll', updateActiveStation)
    }, [updateActiveStation])

    const handleClick = (id) => {
        if (id === 'bio') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    const svgWidth = 620
    const lineY = 22
    const padding = 15
    const getStationX = (i) => padding + i * ((svgWidth - padding * 2) / (stations.length - 1))

    return (
        <nav className="subway-nav" aria-label="Section navigation">
            <div className="subway-nav-inner">
                <svg
                    className="subway-nav-svg"
                    viewBox={`0 0 ${svgWidth} 52`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Yellow main line — starts and ends at stations */}
                    <line
                        x1={getStationX(0)} y1={lineY}
                        x2={getStationX(stations.length - 1)} y2={lineY}
                        stroke={LINE_COLOR}
                        strokeWidth={6}
                    />

                    {/* Station dots and labels */}
                    {stations.map((station, i) => {
                        const cx = getStationX(i)
                        const isPassed = i <= activeIndex
                        const isHovered = hoveredIndex === i
                        const isActive = isPassed || isHovered

                        const stationColor = isHovered ? COLOR_PASSED : (isPassed ? COLOR_PASSED : COLOR_UPCOMING)
                        const labelColor = isActive ? '#ffffff' : '#7a7c7f'

                        return (
                            <g
                                key={station.id}
                                className="subway-station-group"
                                onClick={() => handleClick(station.id)}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Big station — outer ring */}
                                <circle
                                    cx={cx} cy={lineY}
                                    r={isHovered ? 10 : 8}
                                    fill="#0a0a0a"
                                    stroke={stationColor}
                                    strokeWidth={3}
                                    className="subway-station-dot"
                                />
                                {/* Big station — inner dot */}
                                <circle
                                    cx={cx} cy={lineY}
                                    r={isHovered ? 4 : 3}
                                    fill="#ffffff"
                                    className="subway-station-dot"
                                />

                                {/* Station label */}
                                <text
                                    x={cx}
                                    y={lineY + 20}
                                    textAnchor="middle"
                                    className="subway-station-label"
                                    fill={labelColor}
                                >
                                    {station.label}
                                </text>
                            </g>
                        )
                    })}
                </svg>
            </div>
        </nav>
    )
}

export default Navigation