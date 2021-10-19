import React from "react"
import { TasksList } from "..";
import Layout from "./Layout/Layout"

export {Header} from "./Layout/Header"
export {Main} from "./Layout/Main"

const Dashboard = () =>{
return(
    <Layout>
     <TasksList/>

    </Layout>
)
}
export {Dashboard}
