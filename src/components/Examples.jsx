import React, { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from '../UI/TabButton';
import Section from '../UI/Section';
import Tabs from '../UI/Tabs';

function Examples() {
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
    <Section id='examples'>
      <h2>Examples</h2>
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        <div id='tab-content'>{tabContent}</div>
      </Tabs>
    </Section>
  );
}

export default Examples;
