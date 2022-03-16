import { Header } from 'Components/Header';
import { Viewer } from 'Components/Viewer';

const App = () => {
  /**
   * Add your pdf file in public folder and place it on file folder
   * assigned value as 'file/sample.pdf'
   */
  const value = '';

  return (
    <div className="App">
      <Header />
      <Viewer value={value} />
    </div>
  );
};

export default App;
