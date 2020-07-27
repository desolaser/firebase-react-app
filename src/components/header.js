import React from 'react'
import { Link } from 'react-router-dom'

import BrandTitle from './brand_title'

const Header = () => {
    return (
        <nav>
            <BrandTitle>
                Firebase example app
            </BrandTitle>
            <ul>
                <li>
                    <Link to=""></Link>
                </li>
                <li>
                    <Link to=""></Link>
                </li>
                <li>
                    <Link to=""></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
