import './App.css';
import { useState } from 'react';
import Education from './components/Education';
import Skillslist from './components/Skillslist';
import Aboutme from './components/Aboutme';
import JobExp from './components/JobExp';
import Myname from './components/Myname';
import Summary from './components/Summary';
import info from './models/info';


function App() {
  let [data, setData] = useState(info)

  return (
    <div className="App">
      <Myname name = {info.name}></Myname>
      <Summary summary = {info.summary}></Summary>
      <JobExp JobExp = {info.JobExp}></JobExp>
      <Skillslist skillslist = {info.skillslist} />
      <Education education = {info.Education}></Education>
      <Aboutme ProffessionalSummary = {info.Aboutme}></Aboutme>
      
    </div>
  );
}

export default App;
