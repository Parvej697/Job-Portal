import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talent from "../FindTalent/Talent";

const FindTalentPage=()=>{
return <div className="min-h-[90vh]  bg-shiraz-800 font-[poppins] px-4">
          
           <SearchBar/>
           <Divider color="frangipani.3"  size="xs"/>
           <Talent/>
</div>

}

export default FindTalentPage;