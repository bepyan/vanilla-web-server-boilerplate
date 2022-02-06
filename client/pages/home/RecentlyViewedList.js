import { RecentlyViewedStore } from "../../stores";

export const RecentlyViewedList = () => {
  const root = document.createElement("div");
  root.innerHTML = `
    <h5>최근 클릭한 아이템</h5>
    <div class="recent__wrapper"></div>
  `;
  const recentItemsWrapper = root.querySelector(".recent__wrapper");

  const renderRecentItems = () => {
    const { recentlyViewedList } = RecentlyViewedStore.getState();
    recentItemsWrapper.innerHTML = recentlyViewedList.join(", ");
  };

  renderRecentItems();

  RecentlyViewedStore.subscribe(renderRecentItems);

  return root;
};
