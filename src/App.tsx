import React, { useState } from 'react';
import './App.scss';
import { AnnouncementsList } from './components/AnnouncementsList/AnnouncementList';
import { Content } from './components/Content/Content';
import { SideBar } from './components/SideBar/SideBar';
import { Announcement } from './types/Announcement';

const testList: Announcement[] = [
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
]

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ShowApp = () => setIsOpen(true);

  return (
    <div className="App">
      {isOpen ? (
        <>
          <Content>
            <AnnouncementsList announcements={testList} />
          </Content>
          <SideBar />
        </>
      ) : (
        <button 
          type="button" 
          className="button App__button"
          onClick={ShowApp}
        >
          Go to Announcements
        </button>
      )}
    </div>
  );
}

export default App;
