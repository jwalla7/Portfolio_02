## Portfolio



### update node_modules/buffer-to-arraybuffer/buffer-to-arraybuffer.js
```javascript
(function (root) {
  // Use Buffer.alloc(0) instead of new Buffer(0) for checking ArrayBuffer support
  var isArrayBufferSupported = (Buffer.alloc(0)).buffer instanceof ArrayBuffer;

  var bufferToArrayBuffer = isArrayBufferSupported ? bufferToArrayBufferSlice : bufferToArrayBufferCycle;

  function bufferToArrayBufferSlice(buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  }

  function bufferToArrayBufferCycle(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
      view[i] = buffer[i];
    }
    return ab;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = bufferToArrayBuffer;
    }
    exports.bufferToArrayBuffer = bufferToArrayBuffer;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return bufferToArrayBuffer;
    });
  } else {
    root.bufferToArrayBuffer = bufferToArrayBuffer;
  }
})(this);
```