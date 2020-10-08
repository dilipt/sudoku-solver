export const Square = (initial) => {
  let value = initial;
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
};
