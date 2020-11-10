import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import VideosList from './components/videos/VideosList';
import VideoForm from './components/videos/VideoForm';
import DetailVideo from './components/videos/DetailVideo';
import Navbar from './components/navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={VideosList} />
        <Route path="/video-create" component={VideoForm} />
        <Route path="/video-edit/:id" component={VideoForm} />
        <Route path="/:id" component={DetailVideo} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
