function vueSlider() {
  new Vue({
    el: "#app",
    data: {
      image: "img/city",
      current: 1,
      min: 1,
      max: 7,
      timer: null,
    },
    mounted: function () {
      this.startRotation();
    },
    methods: {
      next: function () {
        this.current++;
        if (this.current > this.max) {
          this.current = this.min;
        }
      },
      prev: function () {
        this.current--;
        if (this.current < this.min) {
          this.current = this.max;
        }
      },
      startRotation: function () {
        this.timer = setInterval(this.next, 3000);
      },
      stopRotation: function () {
        clearTimeout(this.timer);
        this.timer = null;
      },
    },
  });
}

vueSlider();

$(vueSlider);
