
import Banner from "@/components/Boligcomp/Banner";
import Bolig from "@/components/Boligcomp/Boliger";

const Boligside = ({searchParams}) => {
    return ( <>
    <Banner/>
 
<Bolig searchParams={searchParams}/>

    </> );
}
 
export default Boligside;