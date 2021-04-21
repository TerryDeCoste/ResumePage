//This links to reference information, PII not to be stored in source control
//This file is the generic version of references.
const referenceInfo = ['Provided on request'];

const referenceElement = document.getElementById('referenceBox');
if (referenceElement){
    referenceElement.innerHTML = '<li>' + referenceInfo.join('</li><li>') + '</li>';
}
