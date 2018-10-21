import React, { Component } from 'react';
import SearchAppBar from './components/SearchAppBar';
import LeaveApp from './components/LeaveApp';
import LeaveReport from './components/LeaveReport';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='row'>        
        <SearchAppBar />
        <div className='col-sm-6'>
          <LeaveApp />
        </div>
        <div className='col-sm-6'>
          <LeaveReport />
        </div>

      </div>
    );
  }
}

export default App;
