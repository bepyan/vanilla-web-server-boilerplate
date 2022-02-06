import { Store } from "../core";

const initState = { recentlyViewedList: [] };

const reducer = (state, actionKey, { text }) => {
  const { recentlyViewedList } = state;

  switch (actionKey) {
    case "ADD_ITEM":
      const newList = [text, ...recentlyViewedList.filter((v) => v !== text)];
      return { ...state, recentlyViewedList: newList };
    default:
      return { ...state };
  }
};

/**
 * @actionKey `ADD_ITEM`
 * @state { recentlyViewedList: string[] }
 */
export const RecentlyViewedStore = new Store(initState, reducer);
