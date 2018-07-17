function say(name, callback) {
  console.log("hello " + name)
  setTimeout(function() {
    callback("nihao")
  })
}
console.log(1)
say("aibin", function(data) {
  console.log(data)
})
console.log(2)
