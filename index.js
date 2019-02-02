function getInputItem () {
  $('#js-shopping-list-form').on('submit',
    function() {
       event.preventDefault();


      let input = $('.js-shopping-list-entry').val();

      console.log(input);
    });
};



function startApp() {
  getInputItem();
}

$(startApp());
