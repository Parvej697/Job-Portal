import { Button, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Subscribe =()=>{
    const matches = useMediaQuery("(max-width: 639px)");
        const matches1 = useMediaQuery("(max-width: 475px)");
return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 sm-mx:mx-5 py-3 rounded-xl justify-around flex-wrap">
   <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl w-2/5 bs-mx:w-4/5 text-center font-semibold text-mine-shaft-300">Never Wants to Miss Any
        <span className="text-eucalyptus-400"> Job News?</span></div>
   <div className="flex gap-4 rounded-xl xs-mx:flex-col xs:items-center bg-mine-shaft-700 px-3 py-2 ">
       <TextInput className="[&_input]:text-mine-shaft-100 font-semibold " variant="unstyled" placeholder="Your@gmail.com" size={matches1?"sm":matches?"md":"xl"} />
       <Button className="!rounded-lg" color="eucalyptus.4" variant="filled" size={matches1?"sm":matches?"md":"lg"} >Subscribe</Button>
    </div>  
</div>
}
export default Subscribe;