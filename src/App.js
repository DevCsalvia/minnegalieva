import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import MainPage from './containers/MainPage/MainPage';
import TheoryPage from './containers/TheoryPage/TheoryPage';
import TestPage from './containers/TestPage/TestPage';

function App() {
  let routes = (
    <Switch>
      <Route path={'/theory'} render={TheoryPage} />
      <Route path={'/test'} render={TestPage} />
      <Route path={'/'} exact component={MainPage} />
      <Redirect to='/' />
    </Switch>
  )
  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
