import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import './App.scss';
import { AnnouncementsList } from './components/AnnouncementsList/AnnouncementList';
import { Button } from './components/Button/Button';
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

  const ShowApp = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(true);
  }, [])

  return (
    <div className={classNames("App", { "App--start": !isOpen })}>
      {isOpen ? (
        <>
          <Content children={<AnnouncementsList announcements={testList} />} />
          <SideBar />
        </>
      ) : (
        <Button
          title="Go to Announcements"
          hoverScale={1.05}
          borderRadius={20}
          width={150}
          height={70}
          activebgColor="#032e73"
          hoverbgColor="#4278f5"
          handleClick={ShowApp}
        />
      )}
    </div>
  );
}

export default App;
