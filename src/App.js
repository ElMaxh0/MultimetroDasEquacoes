import './App.css';
import './css/global/backgrounds.css'
import './css/global/buttons.css'
import './css/global/scroll.css'
import './css/global/global.css'
import Main from './main/inteface';
import InfoidProvider from './hooks/infoid';

function App() {
  return (
    <InfoidProvider>
        <div>
          <Main />
        </div>
    </InfoidProvider>
  );
  
}

export default App;
