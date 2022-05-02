import { useState } from 'react';
import { AddForm } from './components/AddForm/AddForm';
import { AnnouncementsList } from './components/AnnouncementsList/AnnouncementList';
import { Content } from './components/Content/Content';
import { SideBar } from './components/SideBar/SideBar';
import './App.scss';

function App() {
  const [isAppOpen, setIsAppOpen] = useState<boolean>(false)

  const showApp = () => setIsAppOpen(true);
  return (
    <div className="App">
      {isAppOpen ? (
        <>
          <Content>
            <>
              <AddForm />
              <AnnouncementsList />
            </>
          </Content>
          <SideBar />
        </>
      ) : (
        <button
          type="button"
          className="button App__button"
          onClick={showApp}
        >
          Go to Announcements
        </button>
      )}
    </div>
  );
}

export default App;
