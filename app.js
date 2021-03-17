const app = {
  data() {
    return {
      slideData: [
        {
          text: '1. Watch shares behavior with watchEffect in terms of manual stoppage, side effect invalidation (with onInvalidate)',
          title: 'Basics'
        },
        {
          text: '2. You need to know about props for now, but once youve finished reading this page and feel comfortable with its content.',
          title: 'Components'
        },
        {
          text: '3. Which can be used in the template to control the font size of all blog posts:',
          title: 'Routers'
        },
        {
          text: '4. Now les add a button to enlarge the text right before the content of every post:',
          title: 'Vuex'
        },
        {
          text: '5. When we click on the button, we need to communicate to the parent that it should enlarge the text of all posts.',
          title: 'Composition'
        },
      ],
      title: 'The plan of Vue 3 learning',
      activeIndex: 0,
      finished: false
    }
  },
  methods: {
    activeSlide(i, event) {
      this.activeIndex = i
    },
    prevSlide() {
      if(this.backActive) {
        this.activeIndex -= 1
      }
    },
    nextSlide() {
      if(!this.isLast) {
        this.activeIndex += 1
      } else {
        this.finished = true
      }
    },
    reset() {
      this.activeIndex = 0
      this.finished = false
    }
  },
  computed: {
    slideActive() {
      return this.slideData[this.activeIndex]
    },
    backActive() {
      return this.activeIndex > 0 ? true : false
    },
    isLast() {
      return this.slideData.length - 1 > this.activeIndex ? false : true
    }
  }
}

Vue.createApp(app).mount('#app')