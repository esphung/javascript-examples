function myJSCallback() {
  // 2nd code goes here
  console.log('uh oh 2')
};

var callback1 = () => {
  // 1st code goes here
  console.log('uh oh 1'),
  myJSCallback()
};

callback1();
