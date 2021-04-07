function vueSlider() {
  new Vue({
    el: "#app",
    data: {
      image: "img/city",
      current: 1,
      min: 1,
      max: 7,
    },
    methods: {
      next: function () {
        this.current++;
        if (this.current > this.max) {
          this.current = this.min;
        }
        //return this.current
      },
      prev: function () {
        this.current--;
        if (this.current < this.min) {
          this.current = this.max;
        }
      },
    },
  });
}

vueSlider();

$(vueSlider);
