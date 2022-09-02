export default () => ({
  count: 0,
  increment() {
    this.count++;
  },
  init() {
    console.log('init counter');
  }
});