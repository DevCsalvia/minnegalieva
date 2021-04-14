import './MainPage.css';

import Button from '../../components/UI/Button/Button';

const mainPage = props =>
    <div className="MainPage-Wrapper">
        <h1>Это Стартовая Страница</h1>
        <Button link="/theory/js" addClass="Button--Black">Начать обучение!</Button>
    </div>

export default mainPage;