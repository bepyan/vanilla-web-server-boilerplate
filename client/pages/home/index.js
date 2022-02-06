import { HomeForm } from "./HomeForm";
import { AddedList } from "./AddedList";
import { RecentlyViewedList } from "./RecentlyViewedList";

export const HomePage = () => {
  const app = document.querySelector("#app");

  app.appendChild(HomeForm());
  app.appendChild(AddedList());
  app.appendChild(RecentlyViewedList());
};
