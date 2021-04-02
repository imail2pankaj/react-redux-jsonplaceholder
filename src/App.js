import './App.css';
import { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import routes from './routes';
import Layout from './components/Layout';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

const hist = createBrowserHistory();

function App(props) {
  return (
    <Router history={hist}>
      <Suspense fallback={<Loading></Loading>}>
        <Layout>
          <Switch>
            {
              routes.map(route => <Route key={route.path} {...route} />)
            }
            <Route path="/" key={'not-found'} component={NotFound} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;