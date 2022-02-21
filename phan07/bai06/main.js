var batman = (function () {
  return {
    identity: "Bruce Wayne",
    fightCrime: function () {
      console.log("Cleaning up Gotham.");
    },
    goCivilian: function () {
      console.log("Attend social events as " + this.identity);
    }
  }
})();
