import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Lesson from './routes/Lesson';
import Board from './routes/Board';
import Qna from './routes/Qna';
import MyPage from './routes/MyPage';
import Login from './routes/Login';

import Header from './components/Header';

class App extends Component {
  
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));  
  }

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };  

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/lesson" component={Lesson}/>
            <Route path="/board" component={Board}/>
            <Route path="/qna" component={Qna}/>
            <Route path="/mypage" component={MyPage}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
