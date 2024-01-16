import { CORE_CONCEPTS } from '../data';
import Section from '../UI/Section';
import CoreConcept from './CoreConcept';

function CoreConcepts() {
  return (
    <Section id='core-concepts'>
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
