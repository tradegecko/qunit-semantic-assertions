import { findControl } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function(label) {
  //TODO: convert findObject to findDefinitionList (in semantic dom selector)
  const descriptionList = findObject('dl', label, 'descriptionList');

  let descriptionListAsserter = buildAsserter(descriptionList, { label });
  descriptionListAsserter.hasTerm = function(term) {
    //TODO: convert to within & findDefinitionTerm (in semantic dom selector)
    let descriptionTermElements = [...descriptionList.querySelectorAll('dt')].find((element) => {
      return element.innerText.trim() === term;
    });
    //TODO: remove ambiguous message after migrated to findObject
    if (descriptionTermElements && descriptionTermElements.length > 1) {
      throw new Error(`Multiple "${term}" description terms were found inside "${label}" description list`);
    }

    const descriptionTermElement = descriptionTermElements ? descriptionTermElements[0] : undefined;
    let descriptionTermAsserter = buildAsserter(descriptionTermElement, { term });
    descriptionTermAsserter.withDefinition = function(description) {
      //TODO: convert to within & findDescriptionDefinition (in semantic dom selector)
      const descriptionDefinitionElement = descriptionTermElement.nextElementSibling;

      return buildAsserter(descriptionDefinitionElement, { description });
    };
    return descriptionTermAsserter;
  };
  return descriptionListAsserter;
}
