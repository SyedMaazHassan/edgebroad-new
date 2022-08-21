// import '_/https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';

function setValue(type) {
  $(".type-btns").removeClass("active");
  $(`#${type}`).addClass("active");
  $("#upload_post_select").val(type);
}
