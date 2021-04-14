import Aux from '../Auxil/Auxil';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import './Layout.css';

const Layout = props => {
    return (
        <Aux>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;