import "../styles/index.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("[ 개발모드로 실행중 ]");
}

document.querySelector("#app").innerHTML = "hello world";
