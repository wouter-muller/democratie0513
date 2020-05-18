var app = new Vue({
    el: '#vue',
    data: {
        hamburgerMenuOpen: false,
        heroNestedList: 1
    },
    methods: {
        toggleHeroNestedList: function(index) {
            if (this.heroNestedList === 0) {
                this.heroNestedList = index
            }
            else if (this.heroNestedList === 1) {
                if (index === 1) {
                    this.heroNestedList = 0
                } else {
                    this.heroNestedList = index
                }
            }
            else if (this.heroNestedList === 2) {
                if (index === 2) {
                    this.heroNestedList = 0
                } else {
                    this.heroNestedList = index
                }
            }
        }
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

var ScrollMonitor = {
  init: function() {
    var element = document.querySelector('.js-chapters');
    var breadcrumbs = document.querySelector('.js-breadcrumbs');

    var elementWatcher = scrollMonitor.create(element, -90);

    elementWatcher.enterViewport(function() {
        breadcrumbs.classList.remove('--visible');
    });
    elementWatcher.exitViewport(function() {
        breadcrumbs.classList.add('--visible');
    });

  }
};

window.onload = function() {
    ScrollMonitor.init();
};
