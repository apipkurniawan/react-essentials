import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';

function App() {
  function handleClick(selectButton) {
    console.log('testt : ', selectButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick('jsx')}>Jsx</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;