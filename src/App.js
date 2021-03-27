import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';
import Loading from './components/Loading';

function App(props) {
  return (
    <Router>
      <Suspense fallback={<Loading></Loading>}>
        <Layout>
          <Switch>
            {
              routes.map(route => <Route key={route.path} {...route} />)
            }
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;