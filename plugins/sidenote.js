const remarkSidenote = () => (tree) => {
    const sidenoteClass = 'sidenote';
    let sidenoteCounter = 0;
  
    const visit = (node, index, parent) => {
      if (node.type === 'footnoteReference') {
        sidenoteCounter++;
        
        // Create a unique key for each reference using the sidenoteCounter
        const sidenotePlaceholder = {
          type: 'html',
          value: `<sup id="sidenote-ref-${sidenoteCounter}" class="${sidenoteClass}-ref">${sidenoteCounter}</sup>`
        };
        console.log(sidenotePlaceholder);
        parent.children.splice(index, 1, sidenotePlaceholder);
      }
  
      if (node.type === 'footnoteDefinition') {
        sidenoteCounter++;
  
        const sidenote = {
          type: 'html',
          value: `
            <div id="sidenote-${sidenoteCounter}" class="${sidenoteClass}">
              <sup>${sidenoteCounter}</sup> ${node.children.map((child) => child.value).join('')}
            </div>
          `
        };
  
        // Inject sidenote with a unique key
        parent.children.splice(index, 1, sidenote);
      }
    };
  
    const transformer = (tree) => {
      visit(tree, null, null);
    };
  
    return transformer;
  };
  
  export default remarkSidenote;
  