"use client"



import { useSearchParams } from 'next/navigation';
import { useState } from "react"
import { formatter } from "@/helpers/Currency"




export default function FilterForm({type}) {
	const [max, setMax] = useState(8000000)
	const [min, setMin] = useState(0)
// const handleChange = (event) =>{

// console.log(event.currentTarget)
//  event.currentTarget.submit()
// }
	return   (
		<>
		
		<form>
			<div className="flex flex-col">
				<label className="flex flex-col">
					Max Pris
					<input type="range" id='type' min="1000000" max="8000000" step="100000" value={max} onChange={e => setMax(e.target.value)} name="price_lte" />
				</label>
				<span>{formatter.format(max)}</span>
				<label className="flex flex-col">
					min Pris
					<input type="range" min="1000000" max="6000000" step="100000" value={min} onChange={e => setMin(e.target.value)} name="price_gte" />
				</label>
				
				<span>{formatter.format(min)}</span>
				<label className="flex flex-col">
					min Pris
				<select name="type_eq" id="type_eq">
				
				<option value="Villa">villa</option>
				<option value="Ejerlejlighed">ejerlejlighed</option>
				<option value="Byhus">byhus</option>
				</select>
				</label>
			</div>
			<button type="submit">Filtrer</button>
		</form>
		</>
	)
  }
/*const Boligslider = () => { async function submitHandler(e) {
        e.preventDefault();
        console.log(e.target);
      } 
    return ( <form onSubmit={submitHandler}>
        min: <input type="range" name="gte" />
        max: <input type="range" name="lte" />
      </form>);
}
 
export default Boligslider;*/