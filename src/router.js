import Vue from "vue";
import Router from "vue-router";
import TrafficStopForm from "./views/TrafficStopForm.vue";
import Petition from "./views/Petition.vue";
import ThankYou from "./views/ThankYou.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "TrafficStopForm",
      component: TrafficStopForm
    },
    {
      path: "/petition",
      name: "Petition",
      component: Petition
    },
    {
      path: "/thank-you",
      name: "ThankYou",
      component: ThankYou
    }
  ]
});
