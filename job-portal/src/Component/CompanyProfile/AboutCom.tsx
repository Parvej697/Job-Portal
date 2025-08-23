import { companyData } from "../../Data/CompanyData";

const AboutCom = () =>{
    const company :{[key:string]:any}=companyData;
  return <div className="flex flex-col gap-5">
    {
        Object.keys(company).map((key,index)=> key!='Name' && <div key={index}>
            <div className="text-xl mb-3 font-semibold">  {key}  </div>
           { key!="Website" && <div  className=" text-sx text-shiraz-300 text-justify">{key!="Specialities"?company[key]:company[key].map((item:string,index:number)=> <span key={index}> &bull; {item}</span> )}</div>}
           { key=="Website" && <a href={company[key]} target="blank" className=" text-sx text-frangipani-300 text-justify">  {company[key]}</a>}
        </div> )
    }
  </div>
}
export default AboutCom;