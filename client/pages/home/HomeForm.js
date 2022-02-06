import { homeState } from "./_state";

export const HomeForm = () => {
  const root = document.createElement("form");
  root.innerHTML = `
    <h1>Form</h1>
    <input id="name"/>
    `;

  root.addEventListener("submit", (e) => {
    e.preventDefault();

    // @ts-ignore
    const newList = [...homeState.list, e.target.name.value];
    homeState.list = newList;

    // @ts-ignore
    e.target.name.value = "";
  });

  return root;
};
