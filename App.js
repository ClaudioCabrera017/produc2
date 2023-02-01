//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App w-50 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
