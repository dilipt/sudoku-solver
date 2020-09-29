export function Square(val) {
  let value = val;
  let editable = true;

  function getValue() { return value; }
  function setValue(newValue) {
    if (editable) { value = newValue; }
  }

  function lock() { editable = false; }
  function unlock() { editable = true; }

  return {
    getValue, setValue, lock, unlock,
  };
}
