import { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      seachField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
    console.log(this.state.robots)
  }

  onSearchChange = (event) => {
    this.setState({seachField: event.target.value.toLowerCase()});
    }

  render() {
    const newRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.seachField);
    })
    return (
      <div className="tc">
        <img className='mv4'
          alt='robofriends' src={`https://see.fontimg.com/api/renderfont4/ALExA/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Um9ib0ZyaWVuZHM/aeroblade-demo.png`}/>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={newRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App;