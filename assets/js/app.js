class App {
   show(e) {
      if (e.target == document.querySelector(".search")) {
         document.querySelector(".close").classList.remove("hiden");
         document.querySelector(".barrier").classList.remove("hiden");
      } else {
         document.querySelector(".close").classList.add("hiden");
         document.querySelector(".barrier").classList.add("hiden");
      }
   }

   image() {
      location.href = "image.html";
   }

   clear() {
      document.querySelector(".search").value = "";
   }
}

const app = new App();

document.querySelector(".close").addEventListener("click", app.clear);

document.querySelector("html").addEventListener("click", app.show);

document.querySelector(".camera").addEventListener("click", app.image);
