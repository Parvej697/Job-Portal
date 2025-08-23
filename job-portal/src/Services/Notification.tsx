import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"

const successNotification=(title:string,message:string)=>{
      notifications.show({
          title: title,
          message: message,
          withCloseButton:true,
          icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
          color:"yellow",
          withBorder:true,
          className:"!border-yellow-500"
        }) 
}

const errorNotification=(title:string,message:string)=>{
     notifications.show({
          title: title,
          message: message,
          withCloseButton:true,
          icon:<IconX style={{width:"90%",height:"90%"}}/>,
          color:"blue",
          withBorder:true,
          className:"!border-blue-500"
        });
}

export { successNotification,errorNotification}