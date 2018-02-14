(() => {


// var root = null;
// var useHash = true; // Defaults to: false
// var hash = '#!'; // Defaults to: '#'
// var router = new Navigo(root, useHash, hash);

//   router.on({
//   // 'view' is the id of the div element inside which we render the HTML
//     'firstroute': () => { loadHTML('./templates/test.html', 'view'); },
//     'secondroute': () => { loadHTML('./templates/second.html', 'view'); },
//     'thirdroute': () => { loadHTML('./templates/third.html', 'view'); }
//   })
//   .resolve();


// Binds import html files to element ids on the index.html file
  let links = document.querySelectorAll('link[rel="import"]');
  links.forEach((link) => {
    try {
      let fileName = link.href.match(/.*\/([a-z]*[A-Z]*[0-9]*)\..+$/m)[1];
      console.log(fileName);
      let existingEl = document.getElementById(fileName);
      let templeteEl = link.import.querySelector('section');
      existingEl.appendChild(templeteEl.cloneNode(true));
    } catch (e) {
      throw new Error(`${e}`);
    }
  });
})();