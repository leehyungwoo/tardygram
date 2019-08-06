import Profile from "views/Profile.js"
import Register from "views/Register.js"
import Login from "views/Login.js"
import RoomList from "views/RoomList.js"
import MakeRoom from "views/MakeRoom.js"
import RoomDetail from "views/RoomDetail.js"
import DoneHost from "views/DoneHost.js"
import Main from "views/Main/Main.js"
import ChartGraph from "views/ChartGraph"

var routes = [
  {path: "/login",name: "Login",icon: "ni ni-key-25 text-info",component: Login,layout: "/auth"},
  {path: "/register",name: "Register",icon: "ni ni-circle-08 text-pink",component: Register,layout: "/auth"},
  {path: "/index",name: "Main",icon: "ni ni-circle-08 text-pink",component: Main,layout: "/admin"},
  {path: "/user-profile",name: "User Profile",icon: "ni ni-single-02 text-yellow",component: Profile,layout: "/admin"},
  {path: "/roomlist",name: "RoomList",icon: "ni ni-bullet-list-67 text-red",component: RoomList,layout: "/admin"},
  {path: "/makeroom",name: "MakeRoom",icon: "ni ni-circle-08 text-blue",component: MakeRoom,layout: "/admin"},
  {path: "/roomdetail/:id",name: "RoomDetail",icon: "ni ni-circle-08 text-blue",component: RoomDetail,layout: "/admin"},
  {path: "/donehost",name: "DoneHost",icon: "ni ni-circle-08 text-blue",component: DoneHost,layout: "/admin"},
  {path: "/chartgraph",name: "DoneHost",icon: "ni ni-circle-08 text-blue",component: ChartGraph,layout: "/admin"
  }
 

]
export default routes
