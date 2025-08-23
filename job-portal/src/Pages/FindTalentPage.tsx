import { Divider } from "@mantine/core";
import SearchBar from "../Component/FindTalent/SearchBar";
import Talent from "../Component/FindTalent/Talent";


const FindTalentPage=()=>{
return <div className="min-h-[90vh]  bg-mine-shaft-950 font-[poppins] px-4">
          
           <SearchBar/>
           <Divider color="frangipani.3"  size="xs"/>
           <Talent/>
</div>

}

export default FindTalentPage;