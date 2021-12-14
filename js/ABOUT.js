wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  function changeAnh(obj) {
    var print = obj.src
    var img = document.getElementById("mainId")
    img.src = print
}
