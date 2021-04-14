import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar + ' Toolbar'}>
            <nav className={classes.Navigation_Wrapper}>
                <NavigationItems
                    className={classes.Navigation}
                />
            </nav>
        </header>
    )
};

export default Toolbar;