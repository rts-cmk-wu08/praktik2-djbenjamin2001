import Banner from "@/components/Boligcomp/Banner";
import Bolig from "@/components/Boligcomp/Boliger";
const Boligside = ({searchParams}) => {
    return ( <>
    <Banner/>
    <main>
<Bolig searchParams={searchParams}/>
    </main>
    </> );
}
 
export default Boligside;