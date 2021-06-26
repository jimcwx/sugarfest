import Layout from './layout/Layout'
import { Route, Switch } from 'react-router-dom';

import VideoPlayer from './pages/VideoPlayer'
import SchedulePage from './pages/SchedulePage'
import FaqsPage from './pages/FaqsPage'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <VideoPlayer />
        </Route>
        <Route path='/schedule'>
          <SchedulePage />
        </Route>
        <Route path='/faqs'>
          <FaqsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
