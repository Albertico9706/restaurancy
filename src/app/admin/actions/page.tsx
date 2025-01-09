
import { useSearchParams } from "next/navigation"

export default  function Hello(){
const y=useSearchParams()

    return(
        <div className="flex place-items-center w-svw h-svh">
            {y.toString()}
        </div>
    )


}