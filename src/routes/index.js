import HomePageNotLog from "../pages/HomePageNotLog";
import LoginPage1 from "../pages/Login/LoginPage1";
import LoginPage2 from "../pages/Login/LoginPage2";
import HomePageUser from "../pages/HomePageUser";
import HomePageAdmin from "../pages/HomePageAdmin";
import PrinterManage from "../pages/PrinterManage";
import StudentManage from "../pages/StudentManage";
import UserHistory from "../pages/UserHistory";
import AdminHistory from "../pages/AdminHistory";
import FileManage from "../pages/FileManage";
const publicRoute = [
  { path: "/", component: HomePageNotLog },
  { path: "/login", component: LoginPage1 },
  { path: "/login2", component: LoginPage2 },
  { path: "/user", component: HomePageUser },
  { path: "/admin", component: HomePageAdmin },
  { path: "/printerManage", component: PrinterManage },
  { path: "/studentManage", component: StudentManage },
  { path: "/userHistory", component: UserHistory },
  { path: "/fileManage", component: FileManage },
  { path: "/adminHistory", component: AdminHistory },
];
const privateRoute = [];
export { publicRoute, privateRoute };
