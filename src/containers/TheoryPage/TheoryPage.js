import { NavLink } from 'react-router-dom';

import './TheoryPage.css';

const TheoryPage = props => {
    console.log(props);
    return (
        <div className="TheoryPage-Wrapper">
            <ul className="TheoryPage__Themes">
                <li><NavLink
                    exact={true}
                    to={props.match.url + '/theme1'}>Тема1</NavLink></li>
                <li><NavLink
                    exact={true}
                    to={props.match.url + '/theme2'}>Тема2</NavLink></li>
                <li><NavLink
                    exact={true}
                    to={props.match.url + '/theme3'}>Тема3</NavLink></li>
            </ul>
        </div>
    );
}

export default TheoryPage;