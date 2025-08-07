import { Button, TextInput } from "@mantine/core";

const Subscribe =()=>{
return <div className="mt-20 flex items-center bg-shiraz-700 mx-20 py-3 rounded-xl justify-around">
   <div className="text-4xl w-1/3 text-center font-semibold  text-shiraz-100">Never Wants to Miss Any
        <span className="text-frangipani-200"> Job News?</span></div>
   <div className="flex gap-4 rounded-xl  bg-shiraz-600 px-3 py-2 items-center">
       <TextInput className="[&_input]:text-shiraz-200 font-semibold [&_input]:placeholder-shiraz-200" variant="unstyled" placeholder="Your@gmail.com" size="xl" />
       <Button className="!rounded-lg" color="frangipani.4" variant="filled" size="lg" >Subscribe</Button>
    </div>  
</div>
}
export default Subscribe;