// components
import {Header, CreateContainer, MainContainer} from './components';
//react router dom 
import {Route, Routes} from 'react-router-dom';
// animations
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>
        <main className="mt-14 md:mt-20 p-8 w-full">
          <Routes>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
