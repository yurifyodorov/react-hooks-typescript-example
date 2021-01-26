import React, { useState } from 'react';
import { Container, Header, Content, Sidebar, Sidenav, Nav, Dropdown, Icon } from 'rsuite';

import './App.scss';

// test components
import Counter from '../Counter/Counter';
import CounterReducer from '../CounterReducer/CounterReducer';
import CounterTitle from '../CounterTitle/CounterTitle';
import NavToggle from '../NavToggle/NavToggle';

// An object of all possible app components that can be rendered
const COMPONENTS = {
  Counter,
  CounterTitle,
  CounterReducer,
  NavToggle,
};

type Components = keyof typeof COMPONENTS;

const EXAMPLE_NAMES = Object.keys(COMPONENTS) as Components[];

const App: React.FC = () => {
  // Use state to keep track of the current displayed example component
  const [component, setExample] = useState<Components>('Counter');
  const [isExpand, setIsExpand] = React.useState<boolean>(false);

  // The currently selected example component that should be rendered
  const Component = COMPONENTS[component];

  // A list of buttons for all examples to render
  const Buttons = EXAMPLE_NAMES.map((name, el) => (
    <button type="button" key={name} onClick={() => setExample(name)} className={name === component ? 'active' : ''}>
      &lt;
      {name} /&gt;
    </button>
  ));

  const handleToggle = () => {
    setIsExpand(!isExpand);
  };

  // get current vieport width
  const viewWidth = window.innerWidth;

  return (
    <div className="App">
      <Container>
        <Sidebar
          className={`sidebar-left ${!isExpand ? '' : '-expanded'}`}
          style={{ display: 'flex', flexDirection: 'column' }}
          width={isExpand ? 256 : 70}
          collapsible
        >
          <Sidenav.Header className="logo">
            <img
              className="icon"
              src="https://img.ityuan.com/cloudstatics/image/20190902/1567434362481091886.png"
              alt="logo"
            />
            <span className="title" style={{ marginLeft: 12 }}>
              Logo
            </span>
          </Sidenav.Header>
          <Sidenav className="menu" expanded={isExpand} defaultOpenKeys={['3']} appearance="subtle">
            <Sidenav.Body>
              <Nav>
                <Nav.Item className="item" eventKey="1" active icon={<Icon className="icon" icon="dashboard" />}>
                  Информационная панель
                </Nav.Item>
                <Dropdown
                  className="item"
                  eventKey="2"
                  trigger="hover"
                  title="Видео"
                  icon={<Icon className="icon" icon="video-camera" />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                  <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                </Dropdown>
                <Nav.Item className="item" eventKey="3" icon={<Icon className="icon" icon="tasks" />}>
                  Поток событий
                </Nav.Item>
                <Nav.Item className="item" eventKey="4" icon={<Icon className="icon" icon="archive" />}>
                  Архив событий
                </Nav.Item>
                <Nav.Item className="item" eventKey="5" icon={<Icon className="icon" icon="file-text" />}>
                  Отчеты
                </Nav.Item>
                <Nav.Item className="item" eventKey="6" icon={<Icon className="icon" icon="attribution" />}>
                  Метрики
                </Nav.Item>
                <Nav.Item className="item" eventKey="7" icon={<Icon className="icon" icon="area-chart" />}>
                  Графики
                </Nav.Item>
                <Dropdown
                  className="item"
                  eventKey="8"
                  trigger="hover"
                  title="Настройки"
                  icon={<Icon className="icon" icon="gear-circle" />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={isExpand} onChange={handleToggle} />
        </Sidebar>

        <Container className="page-main">
          <Header className="header">
            <h2>Page Title</h2>
          </Header>
          <Content className="content">
            Content
            <p>vieport width: {viewWidth}</p>
          </Content>
        </Container>
      </Container>

      <div className="test-buttons">
        <button type="button" onClick={handleToggle}>
          Button
        </button>
        {Buttons}
        <Component expand={isExpand} onChange={handleToggle} />
      </div>
    </div>
  );
};

export default App;
