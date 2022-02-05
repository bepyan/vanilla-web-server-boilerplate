export const State = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];

    obj._subscribers = new Set();
    obj.subscribe = (render) => obj._subscribers.add(render);

    Object.defineProperty(obj, key, {
      get() {
        return _value;
      },

      set(value) {
        if (_value === value) return;
        if (JSON.stringify(_value) === JSON.stringify(value)) return;

        _value = value;
        obj._subscribers.forEach((fn) => fn());
      },
    });
  });
  return obj;
};
