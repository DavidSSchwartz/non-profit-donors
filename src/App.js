import './App.css';
import AddForm from './features/add/AddForm';
import Panes from './features/panes/Panes';
import SearchBar from './features/search/SearchBar';
import SortDropdown from './features/sort/SortDropdown';

function App() {
  return (
    <div>
      <div>
        <AddForm />
      </div>
      <div className = "main-content">
        <div className = "panes-actions">
          <SortDropdown />
          <SearchBar />
        </div>
        <div className = "panes-display">
          <Panes />
        </div>
      </div>
    </div>
  );
}

export default App;
