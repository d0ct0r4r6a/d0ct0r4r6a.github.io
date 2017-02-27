$(document).ready(function(){

  // $(".modal").on('click', function(){
  //   $(this).css("animation-play-state","running");
  // });

  modal = document.getElementById("modal");
  
  $(".modal").click(function(event){
    event.preventDefault();
    $(this).css("animation-play-state","running");
    $(this).removeClass("modal-animation");
    $modal=$(this);
    setTimeout(function() {
      $modal.addClass("modal-animation");
    }, 10);
    
  });
});