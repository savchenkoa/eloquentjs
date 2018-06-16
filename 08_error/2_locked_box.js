// The locked box
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    // Your code here.
    let boxWasOpen = !box.locked;
    try {
        if (!boxWasOpen) {
            box.unlock();
        }
        body();
    } catch (e) {
        console.log('Error: ', e.message)
    } finally {
        if (!boxWasOpen) {
            box.lock()
        }
    }

  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  console.log(box.locked);
  // → true