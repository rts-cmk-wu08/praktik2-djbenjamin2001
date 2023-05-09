import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="flex ml-auto ">
            <ul className="flex gap-2 mt-[2rem]">
                <li>
                  <Link href={"/"}>Boliger til salg</Link>  
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