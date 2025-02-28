import './App.css';
import Card from './components/card'
import reactLogo from './assets/react_logo.png';
import sqlLogo from './assets/Sql_logo.png';
import typescriptLogo from './assets/Typescript_Logo.png';
import pythonLogo from './assets/Python_logo.png';
import phpLogo from './assets/PHP_logo.png';
import javascriptLogo from './assets/JavaScript_logo.png';
import javaLogo from './assets/Java_logo.png';
import htmlLogo from './assets/html_logo.png';
import cssLogo from './assets/CSS_logo.png';
import cppLogo from './assets/C++_logo.png';


const App = () => {

  return (
    <div className="App">
      <h1>Tech Resources</h1>
      <div className="container">
        <Card logo = {reactLogo} title = {"React.js"}  link = {"https://react.dev/learn"}/>
        <Card logo = {sqlLogo} title = {"SQL"} link = {"https://www.w3schools.com/sql/default.asp"}/>
        <Card logo = {typescriptLogo} title = {"TypeScript"} link = {"http://w3schools.com/typescript/index.php"}/>
        <Card logo = {pythonLogo} title = {"Python"} link = {"https://www.w3schools.com/python/default.asp"}/>
        <Card logo = {phpLogo} title = {"PHP"} link = {"https://www.w3schools.com/php/default.asp"}/>
        <Card logo = {javascriptLogo} title = {"JavaScript"} link = {"https://www.w3schools.com/js/default.asp"}/>
        <Card logo = {javaLogo} title = {"Java"} link = {"https://www.w3schools.com/java/default.asp"}/>
        <Card logo = {htmlLogo} title = {"HTML"} link = {"https://www.w3schools.com/html/default.asp"}/>
        <Card logo = {cssLogo} title = {"CSS"} link = {"https://www.w3schools.com/css/default.asp"}/>
        <Card logo = {cppLogo} title = {"C++"} link = {"https://www.w3schools.com/cpp/default.asp"}/>
      </div>
    </div>
  )
}

export default App