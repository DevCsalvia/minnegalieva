// My css
import './NavigationItems.css';

// My components
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className="Navigation__items">
        <NavigationItem link="/" exact={true}>Главная</NavigationItem>
        <NavigationItem link="/theory">Изучение Теории</NavigationItem>
        <NavigationItem link="/test">Проверь себя</NavigationItem>
        <NavigationItem link="/sign">Авторизоваться</NavigationItem>
    </ul>
);

export default NavigationItems;