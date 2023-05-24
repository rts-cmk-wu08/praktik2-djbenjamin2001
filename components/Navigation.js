import Link from "next/link";

const Navigation = ({footer}) => {
    return (
        <nav className={`flex ml-auto justify-center`}>
           
            <ul className={`flex  gap-2 mt-[2rem] ${footer?"flex-col  mb-[5rem] ": "flex-row"}`}> 
            {footer?(
              <p className='text-2xl font-bold'>Quick links</p>
                ): ""}
              
                <li>
                  <Link href={"boligside"}>Boliger til salg</Link>  
                </li>
                <li>
                  <Link href={"/"}>Mæglere</Link>  
                </li>
                <li>
                  <Link href={"/"}>Mine favoritter</Link>  
                </li>
                <li>
                  <Link href={"/"}>Kontakt os</Link>  
                </li>
               
            </ul>
        </nav>
      );
}
 
export default Navigation;