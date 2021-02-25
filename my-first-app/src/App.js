import './App.css';
import Header from '../src/components/Header'
import Body from '../src/components/Body'

const data = {
  name: 'HappyShoes',
  logo: 'https://logoipsum.com/logo/logo-16.svg',
  company: 'SZH Inc.',
  cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'Welcome to our brand new HappyShoes website!',
  description: 'Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.',
}

const newDate = new Date();
const currentYear = newDate.getFullYear()


function App() {
  return (
    <div className="App">
      <Header name={data.name} logo={data.logo}/>
      <main>
        <Body cover={data.cover} title={data.title} description={data.description}/>
      </main>
      <footer>"copyright by Me"{currentYear}</footer>
    </div>
  );
}

export default App;





/* <header className="App-header">
        <button onClick={handleButton}>Button</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */