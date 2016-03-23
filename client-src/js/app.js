(function (){

  function whistle()
  {
    var post_promise = $.post(
      "https://myapi.express-website.mine/whistle-point/",
      {
        msg: 'User clicked button 1!'
      }
    );

    post_promise.then(function(){
      $("#button1").text("You have been successfully reported")
    })
  }

  function install_handlers()
  {
    $("#button1").click(whistle);
  }

  $(document).ready(install_handlers);

})();
