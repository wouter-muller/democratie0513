var app = new Vue({
    el: '#vue',
    data: {
        hamburgerMenuOpen: false
    }
})


var images = document.querySelectorAll(".js-image")
for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    var snippet = this.cloneNode()
    document.querySelector('.js-image-wrapper').classList.add('--active');
    document.querySelector('.js-image-wrapper').appendChild(snippet);
  };
}

document.querySelector('.js-image-wrapper').onclick = function() {
    document.querySelector('.js-image-wrapper').classList.remove('--active');

}
