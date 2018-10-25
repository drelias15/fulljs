import React from 'react';
import Header from './Header';
import ContentList from './ContentList';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {

  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContentList contests={this.state.contests} />
       
      </div>
    );
  }
}

export default App;
