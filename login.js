import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const url = "https://vue3-course-api.hexschool.io/v2";
const path = "yjchen-vue";

createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`${url}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          // token 寫入 cookie
          document.cookie = `hexschool=${token}; expires=${expired};`;
          window.location = "products.html";
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {
    console.log("initial");
  },
}).mount("#app");