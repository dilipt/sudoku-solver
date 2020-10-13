export const Square = (initial) => {
  let value = initial;
  let editable = true;

  const getValue = () => value;

  const setValue = (newValue) => {
    value = editable ? newValue : value;
  };

  const lock = () => { editable = false; };

  const unlock = () => { editable = true; };

  return {
    getValue, setValue, lock, unlock,
  };
};
