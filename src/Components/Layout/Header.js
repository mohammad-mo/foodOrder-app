import React from 'react'

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => 
{
    return (
        <React.Fragment>
            <h1>Food Order app</h1>
            <header className={classes.header}>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </React.Fragment>
    )
}
 
export default Header
