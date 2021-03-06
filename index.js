function getInputItem () {
  $('#js-shopping-list-form').on('submit',
    function() {
       event.preventDefault();

      let input = $('.js-shopping-list-entry').val();

      console.log(input);
      $('.shopping-list').append(`<li>
      <span class="shopping-item">${input}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`)

    });
};

function toggleCheck() {
  $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  }
);
}

function handleDeleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}


function startApp() {
  getInputItem();
  toggleCheck();
  handleDeleteItem();
}

$(startApp());
