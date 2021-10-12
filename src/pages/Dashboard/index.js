import { Tasks } from "../index";
import {Header} from "./Layout/Header"

const Dashboard = () =>{
return(
    <div>
    <Header/>
    <main className="m-6">
        <Tasks/>

    </main>
    </div>
)
}
export {Dashboard}