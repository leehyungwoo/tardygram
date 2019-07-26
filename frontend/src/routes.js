/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 
import Profile from "views/examples/Profile.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
 
import CreateHost from "views/examples/CreateHost.js";

import RoomDetail from "views/examples/RoomDetail.js";
import DoneHost from "views/examples/DoneHost.js";


var routes = [
 
{
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }, 
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
 
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },

  {
    path: "/CreateHost",
    name: "CreateHost",
    icon: "ni ni-circle-08 text-blue",
    component: CreateHost,
    layout: "/admin"
  },
  {
    path: "/roomdetail/:id",
    name: "RoomDetail",
    icon: "ni ni-circle-08 text-blue",
    component: RoomDetail,
    layout: "/admin"
  },
  {
    path: "/donehost",
    name: "DoneHost",
    icon: "ni ni-circle-08 text-blue",
    component: DoneHost,
    layout: "/admin"
  },


  
];
export default routes;
