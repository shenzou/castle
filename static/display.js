/*'use strict';

(() => {
  const render = () => {
      var jsonF;
    
      $.ajax ({ url: "./static/externalFiles/hostels.json", method: "GET"})
      .success(function (response) {
         jsonF = $.parseJSON (response);
      });

    const jsonFile = jsonF;
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = jsonFile.map(actor => {
      return `
      <div class="actor">
          <span>${actor.name}</span>
          <span>${actor.location}</span>
          <span>${actor.description}</span>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#comp');

  button.addEventListener('click', function onClick () {

    
    render();

    document.getElementById("result").style.display="block";


    return;
  });
})();

*/



/* Brouillon

<script type="text/javascript" src="static/externalFiles/hostels.json">
            
            const render = () => {
              var jData = JSON.parse(hostels);
            const fragment = document.createDocumentFragment();
            const div = document.createElement('div');
            const template = jData.map(actor => {
            return `
              <div class="actor">
              <span>${actor.name}</span>
              <span>${actor.location}</span>
              <span>${actor.description}</span>
              </div>
            `;
              }).join('');

            div.innerHTML = template;

            fragment.appendChild(div);
            document.querySelector('#actors').innerHTML = '';
            document.querySelector('#actors').appendChild(fragment);
            };
            </script>

*/


