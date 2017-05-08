function forLoop(a) {
  for(let i =0;i<25;i++) {
    var s
    if(i===1) {
      s = "I am 1 strange loop."
    } else {
      s = "I am ${i} strange loops."
    }
    a.push(s)
  }
  return a
}

function whileLoop(n) {
  var i = n
  while(i > 0) {
    console.log(i--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(a) {
  do {
    var s = a.pop()
  } while(a.length > 0 && maybeTrue())
  return a
}
