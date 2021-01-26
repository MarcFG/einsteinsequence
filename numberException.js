class NullNumberException extends Error {
    constructor(message) {
      super(message);
      this.name = 'NULL NUMBER';
      this.message = message;
    }
  }
  
  module.exports = {
    NullNumberException
  }