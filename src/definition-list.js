import { findControl } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function(label) {
  //TODO: convert findObject to findDefinitionList (in semantic dom selector)
  const definitionList = findObject('dl', label, 'definitionList');

  let definitionListAsserter = buildAsserter(definitionList, { label });
  definitionListAsserter.hasTerm = function(term) {
    //TODO: convert to within & findDefinitionTerm (in semantic dom selector)
    let definitionTermElements = [...definitionList.querySelectorAll('dt')].find((element) => {
      return element.innerText.trim() === term;
    });
    //TODO: remove ambiguous message after migrated to findObject
    if (definitionTermElements && definitionTermElements.length > 1) {
      throw new Error(`Multiple "${term}" definition terms were found inside "${label}" definition list`);
    }

    const definitionTermElement = definitionTermElements ? definitionTermElements[0] : undefined;
    let definitionTermAsserter = buildAsserter(definitionTermElement, { term });
    definitionTermAsserter.withDefinition = function(definition) {
      //TODO: convert to within & findDefinitionDefinition (in semantic dom selector)
      const definitionDefinitionElement = definitionTermElement.nextElementSibling;

      return buildAsserter(definitionDefinitionElement, { definition });
    };
    return definitionTermAsserter;
  };
  return definitionListAsserter;
}
