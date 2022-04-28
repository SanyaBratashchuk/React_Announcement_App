import { useState } from 'react';
import './App.scss';
import { AddForm } from './components/AddForm/AddForm';
import { AnnouncementsList } from './components/AnnouncementsList/AnnouncementList';
import { Content } from './components/Content/Content';
import { SideBar } from './components/SideBar/SideBar';

/* const testList: Announcement[] = [
  {
    id: 15,
    title: 'Зробити домашнє завдання до завтраншнього ранку  Зробити домашнє завдання до завтраншнього ранку Зробити домашнє завдання до завтраншнього ранку',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 15,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 15,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 15,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 16,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 17,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 18,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 19,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 20,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 21,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },
  {
    id: 22,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },  
  {
    id: 23,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },  
  {
    id: 24,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },  
  {
    id: 25,
    title: 'Hello',
    description: 'Hello World',
    dateAdded: '12.01.1999',
  },    
] */

function App() {
  const [start, setStart] = useState<boolean>(false);
  const [isAddFormVisible, setIsAddFormVisible] = useState<boolean>(false);
  const showApp = () => setStart(true);
  const showForm = () => setIsAddFormVisible(true);

  return (
    <div className="App">
      {start ? (
        <>
          <Content>
            <>
              {isAddFormVisible ? (
                <AddForm />
              ) : (
                <button 
                  className="button App__button--showForn"
                  onClick={showForm}
                >
                  New announcement
                </button>
              )}
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
