// @ts-nocheck
import { RecentlyViewedStore } from "../../stores";
import { homeState } from "./_state";

export const AddedList = () => {
  const root = document.createElement("div");
  root.innerHTML = `
    <h5>등록된 아이템 목록</h5>
    <div class="added__wrapper"></div>
  `;
  const itemList = root.querySelector(".added__wrapper");

  const renderItemList = () => {
    itemList.innerHTML = `
        ${homeState.list
          .map((name) => `<span class="added__item">${name}</span>`)
          .join("")}
    `;
  };

  root.addEventListener("click", (e) => {
    const isItem = e.target.classList.contains("added__item");
    if (isItem) {
      RecentlyViewedStore.dispatch("ADD_ITEM", { text: e.target.innerText });
    }
  });
  renderItemList();

  homeState.subscribe(renderItemList);

  return root;
};
