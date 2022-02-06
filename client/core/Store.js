export class Store {
  #state;
  #listeners = [];
  #reducer;

  /**
   * 액션을 수행하고 새로운 state를 반환한다. dispatch를 통해 원하는 액션을 수행할 수 있다.
   * @param { any } state
   * @param {{ (state, actionKey: string, payload: any) }} reducer
   */
  constructor(state, reducer) {
    this.#state = state;
    this.#reducer = reducer;
  }

  getState() {
    return { ...this.#state };
  }

  subscribe(func) {
    this.#listeners.push(func);
  }

  publish() {
    this.#listeners.forEach((func) => func());
  }

  /**
   * @param {string} actionKey
   */
  async dispatch(actionKey, { ...payload } = {}) {
    this.#state = await this.#reducer(this.#state, actionKey, { ...payload });
    this.publish();
  }
}
