import React, { useState } from 'react';
import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleClick(selectButton) {
    setSelectedTopic(selectButton);
  }

  let tabContent = <p>Please click a button.</p>;

  if (selectedTopic) {
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleClick('jsx')}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleClick('state')}
            >
              State
            </TabButton>
          </menu>
          <div id='tab-content'>{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
