export const  backTopMixin = {
  data(){
    return {
      toTopIsShow:false
    }
  },
  methods: {
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,1000);
      
    }
  }
}
