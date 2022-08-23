import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Todolist from './Screens/Todolist/Todolist';
import TaskDetail from './Screens/TaskDetail/TaskDetail'
import NotFound from './Screens/NotFound/NotFound';
import SignIn from './Screens/SignIn/SignIn';
// import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Todolist" component={Todolist}></Route>
          <Route path="/Taskdetail/:id" component={TaskDetail}></Route>
          <Route path="/Signin" component={SignIn}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
