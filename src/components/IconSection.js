import React from 'react'
import './iconSection.css'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa'
import { Stack } from 'react-bootstrap'
import { AiOutlineLink } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import { GiNotebook } from 'react-icons/gi'
import { BiAlignLeft } from 'react-icons/bi'
import { RiLineChartFill } from 'react-icons/ri'
import { TiChartBarOutline } from 'react-icons/ti'
import { VscGraph } from 'react-icons/vsc'
import { GrPowerForceShutdown } from 'react-icons/gr'

const IconsSection = () => {
    return (
        <>
            <Stack className='icon-top-container'>
                <Stack className="icons-container">
                    <Link to='/'>
                        <RiLineChartFill className="icons" />
                    </Link>
                    <Link to='/about'>
                        <BiAlignLeft className="icons" />
                    </Link>
                    <Link to='/contacts'>
                        <FaBeer className="icons" />
                    </Link>
                    <Link to='/favorites'>
                        <AiOutlineLink className="icons" />
                    </Link>
                    <Link to='/feedback'>
                        <BsPeopleFill className="icons" />
                    </Link>
                    <Link to='/help'>
                        <GiNotebook className="icons" />
                    </Link>
                    <Link to='/more'>
                        <TiChartBarOutline className="icons" />
                    </Link>
                    <Link to='/myHome'>
                        <VscGraph className="icons" />
                    </Link>
                    <Link to='/tools'>
                        <VscGraph className="icons" />
                    </Link>
                    <Link to='/profile'>
                        <VscGraph className="icons" />
                    </Link>
                </Stack>
                <Stack className="bottom-icon">
                    <Link to='/organization'>
                        <GrPowerForceShutdown className="icons" />
                    </Link>
                </Stack>
            </Stack>
        </>

    )

}

export default IconsSection