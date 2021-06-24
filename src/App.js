import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/home.js'
import Header from './components/header';
import Loginpage from './components/loginpage';
import HomeLogged from './components/hero';
import SliderGura from './components/SliderGura';
import Schedule from './components/schedule'
import Holonews from './components/holonews';
import FilterableContactTable from './components/holovoice'
var CONTACT = [
  // {Name: 'Gawr Gura',SongName:'',Link: ''},
  // {Name: 'Ninomae Ina\'nis',SongName:'', Link: ''},
  // {Name: 'Nakiri Ayame',SongName:'', Link: ''},
  // {Name: 'Amelia Watson',SongName:'', Link: ''},
  // {Name: 'Takanashi Kiara', SongName:'',Link: ''},
  // {Name: 'Mori Calliope',SongName:'', Link: ''},
  {Name: 'Takanashi Kiara', SongName:'Hacking to the Gate',Link: 'https://www.youtube.com/watch?v=WaBSyR0XEsw&list=PLLLTSoKIAK2y0smn1zOIGyBMFYLDoJmqg&index=18'},
  {Name: 'Gawr Gura',SongName:'Country Road',Link: 'https://www.youtube.com/watch?v=jR8s6isVZ6w&list=PLLLTSoKIAK2yYkEGj5S_vfqXEYb_AoKHi&index=21'},
  {Name: 'Ninomae Ina\'nis',SongName:'City of Stars', Link: 'https://www.youtube.com/watch?v=mT_U7H3R9sI&list=PLLLTSoKIAK2xOTqPhXeDddQaeiRhIiYNn'},
  {Name: 'Ninomae Ina\'nis',SongName:'I\'m yours', Link: 'https://www.youtube.com/watch?v=wivauAE2_e8&list=PLLLTSoKIAK2xOTqPhXeDddQaeiRhIiYNn&index=4'},
  {Name: 'Nakiri Ayame',SongName:'グッバイ宣言', Link: 'https://www.youtube.com/watch?v=z1W4c7ym49Y'},
  {Name: 'Amelia Watson',SongName:'Take On Me', Link: 'https://www.youtube.com/watch?v=qe3FD73Ojns'},
  {Name: 'Takanashi Kiara', SongName:'Wrecking Ball',Link: 'https://www.youtube.com/watch?v=2URyhqtYLYM&list=PLLLTSoKIAK2y0smn1zOIGyBMFYLDoJmqg&index=46'},
  {Name: 'Mori Calliope',SongName:'Live Again', Link: 'https://www.youtube.com/watch?v=h-LOlueKCtk'},
  {Name: 'Takanashi Kiara', SongName:'Ahoy',Link: 'https://www.youtube.com/watch?v=d_j_9iJnRP0&list=PLLLTSoKIAK2y0smn1zOIGyBMFYLDoJmqg&index=15'},
  {Name: 'Takanashi Kiara', SongName:'Smile',Link: 'https://www.youtube.com/watch?v=2Oni4WxffM8&list=PLLLTSoKIAK2y0smn1zOIGyBMFYLDoJmqg&index=82'},
  {Name: 'Gawr Gura',SongName:'Ride on Time',Link: 'https://www.youtube.com/watch?v=NcOLcQJmm5M&list=PLLLTSoKIAK2yYkEGj5S_vfqXEYb_AoKHi'},
  {Name: 'Gawr Gura',SongName:'King',Link: 'https://www.youtube.com/watch?v=6Pc9HolQcqA&list=PLLLTSoKIAK2yYkEGj5S_vfqXEYb_AoKHi&index=64'},
  {Name: 'Gawr Gura',SongName:'Fly Me To The Moon',Link: 'https://www.youtube.com/watch?v=MMQSXgvJW0c&list=PLLLTSoKIAK2yYkEGj5S_vfqXEYb_AoKHi&index=16'},
  {Name: 'Gawr Gura',SongName:'Koi',Link: 'https://www.youtube.com/watch?v=FDC6rfdnjIM&list=PLLLTSoKIAK2yYkEGj5S_vfqXEYb_AoKHi&index=2'},
  {Name: 'Ninomae Ina\'nis',SongName:'TOKYO', Link: 'https://www.youtube.com/watch?v=5Nse4fW_JlI&list=PLLLTSoKIAK2xOTqPhXeDddQaeiRhIiYNn&index=13'},
  {Name: 'Mori Calliope',SongName:'失礼しますが、RIP♡', Link: 'https://www.youtube.com/watch?v=5y3xh8gs24c&list=PL49N0z6TSjQqr4mRvPBHgGtZgTHtb0PNM&index=2'},
  {Name: 'Mori Calliope',SongName:'DEAD BEATS', Link: 'https://www.youtube.com/watch?v=6ydgEipkUEU&list=OLAK5uy_kxznuS3JS6EBt51PKgCop6-QlzLyCCmmQ'},
  {Name: 'Amelia Watson',SongName:'Kiss me', Link: 'https://www.youtube.com/watch?v=9SBcBDHYfv8&list=PLLLTSoKIAK2xSsIA6KdpKgHlCY170-dkv&index=5'},
  {Name: 'Amelia Watson',SongName:'Still Alive', Link: 'https://www.youtube.com/watch?v=0p5f7C7pZEA&list=PLLLTSoKIAK2xSsIA6KdpKgHlCY170-dkv&index=10'},
  {Name: 'Amelia Watson',SongName:'A Thousand Miles', Link: 'https://www.youtube.com/watch?v=mkBUSx_jHUo&list=PLLLTSoKIAK2xSsIA6KdpKgHlCY170-dkv&index=13 '},
  
  
];
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/" >
            <Home />
          </Route>
          <Route exact path = "/login">
            <Loginpage />
          </Route>
          <Route exact path = "/homelogged">
            <HomeLogged />
          </Route>
          <Route exact path = "/detailgura">
            <SliderGura />
          </Route>
          <Route exact path = "/schedule">
            <Schedule />
          </Route>
          <Route exact path = "/holonews">
            <Holonews />
          </Route>
          <Route exact path = "/holovoice">
            <FilterableContactTable contacts={CONTACT}/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
