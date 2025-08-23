import { Burger, Button, Drawer, } from "@mantine/core";
import {IconDeviceImacSearch, IconX,} from "@tabler/icons-react";
import Navlinks from "./Navlinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuButton from "./MenuButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NotificationMenu from "./NotificationMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { setupResponseInterceptors } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";



 const links =[
        {name:"Find Jobs",url:"find-jobs"},
        {name:"Find Talent",url:"find-talent"},
        {name:"Post Job",url:"post-job/0"},
        {name:"Posted Job",url:"posted-job/0"},
        {name:"Job History",url:"job-history"},   
    ]

const Header = () => {
  const[opened,{open,close}]=useDisclosure(false);
  const token = useSelector((state: any) => state.jwt);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
   
  useEffect(()=>{
    setupResponseInterceptors(navigate);
   
     },[navigate])



useEffect(() => {
  if (token && token !== "") {
    const rawToken = localStorage.getItem("token") || "";

    try {
      // decode sirf tab karo jab token valid lag raha ho
      if (rawToken.split(".").length === 3) {
        const decoded: any = jwtDecode(rawToken);
        dispatch(setUser({ ...decoded, email: decoded.sub }));
      } else {
        console.warn("Invalid JWT token in localStorage");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  if (user?.profileId) {
    getProfile(user?.profileId)
      .then((res) => {
        dispatch(setProfile(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [token, dispatch, user?.profileId]);



  const location = useLocation();
  return location.pathname != "/sign-up" && location.pathname != "/login" ? (
    <div
      className="w-full text-white bg-mine-shaft-950 font-[poppins] h-20 flex justify-between 
    px-6 items-center"
    >
      <div className="flex  gap-3 items-center text-eucalyptus-500">
        <IconDeviceImacSearch className="h-10 w-10" stroke={1.5} />
        <div className=" xs-mx:hidden text-3xl font-semibold"> JobFinder</div>
      </div>
      {Navlinks()}
      <div className="flex gap-3 items-center">
        {user ? (
          <MenuButton />
        ) : (
          <Link to={"/login"}>
            <Button variant="subtle" color="eucalyptus.3">
              Login
            </Button>
          </Link>
        )}
        {/*<div className="bg-shiraz-700 p-1.5 rounded-full">
               <IconSettings stroke={1.5}/>
            </div>*/}
            {
              user?<NotificationMenu/>:<></>
            }

            {

            }
            <Burger className="bs:hidden" opened={opened} onClick={open} aria-label="toggle navigation"  />
            <Drawer overlayProps={{backgroundOpacity:0.5, blur:4}} position="right" opened={opened} size="xs" onClose={close} closeButtonProps={{icon:<IconX size={30}/>}} >
            <div className="flex flex-col gap-6 items-center ">
                       { links.map((link,index) =>
          <div key={index} className="h-full flex items-center " >
        <Link className="hover:text-eucalyptus-400 text-xl" key={index} to={link.url}>{link.name}</Link>
    </div>)}
            </div> 
            </Drawer>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Header;
