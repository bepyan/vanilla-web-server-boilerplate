export const State = (state) => {
  state._subscribers = new Set();
  state.subscribe = (render) => state._subscribers.add(render);

  Object.keys(state).forEach((key) => {
    let _value = state[key];

    Object.defineProperty(state, key, {
      get() {
        return _value;
      },

      set(value) {
        if (_value === value) return;
        if (JSON.stringify(_value) === JSON.stringify(value)) return;

        _value = value;
        state._subscribers.forEach((fn) => fn());
      },
    });
  });

  return state;
};
