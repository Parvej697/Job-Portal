import { Indicator, Menu, Notification } from "@mantine/core";
import { IconBell, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNotifications, readNotification } from "../../Services/NotificationService";
import { useNavigate } from "react-router-dom";

const NotificationMenu = () => {
     const navigate = useNavigate();
     const user=useSelector((state:any)=>state.user);
     const [notifications, setNotifications] = useState<any>([]);
     useEffect(() => {
  if (user && user?.id) {
    getNotifications(user?.id)
      .then((res) => {
        setNotifications(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [user]);


    const unread = (index: number) => {
     let notifi = [...notifications];
     notifi = notifi.filter((_: any, i: number) => i !== index); 
     setNotifications(notifi);
     readNotification(notifications[index].id).then((res) => {
         console.log(res);
     }).catch((err) => {
         console.log(err);
     });
};



      const [opened, setOpened] = useState(false);
      return   <Menu  opened={opened} onChange={setOpened} shadow="md" width={400}>
      
      <Menu.Target>
         <div className="bg-shiraz-700 p-1.5 rounded-full">
          <Indicator disabled={notifications.length<=0 } color="eucalyptus.4" size={8} offset={5} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown  onChange={()=>setOpened(true)}>
        <div className="flex flex-col gap-1">
            {
                notifications.map((noti:any,index:number)=>
                <Notification onClick={()=>{
                    navigate(noti.route);
                    unread(index);
                    setOpened(false);
                }}
                 key={index} className="hover:bg-shiraz-700 cursor-pointer" onClose={() => unread(index)} icon={<IconCheck  size={20} />} color="teal" title={noti.action}  mt="md">
                  {noti.message}
                </Notification>
                )}
        {
            notifications.length==0 && <div className="text-center text-gray-500">No Notifications</div>
        }
     </div>
     
      </Menu.Dropdown>
    </Menu>
  
}
    


export default NotificationMenu;