import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
//להחליף ניתוב לשרת שיצרתי כבר בכיתה
//בדף שרת להתקין קורס ולהוסיף את המידלוויר
//app.use(cors())
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
      console.log(res.data);
      
    })
  },[])



  return (
    <div className="App">
      <ul>
        <il>a</il>
        <il>b</il>
        <il>c</il>
      </ul>
      <form>
        <input type="text" placeholder='הכנס שם'/>
        <input type="text" placeholder='הכנס אימייל'/>
        <input type="text" placeholder='הכנס סיסמה'/>
        <button type='button'>הרשם</button>
      </form>
      
    </div>
  );
}

export default App;
