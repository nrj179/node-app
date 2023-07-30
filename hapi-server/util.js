function handleMsg(msg) {
  if (msg !== null) {
    try {
      console.log(msg);
    } catch (err) {
      console.log(err);
      return Promise.reject('fail');
    }
  }
  return Promise.resolve('OK');
  //return "OK1";
}

module.exports = handleMsg;
