import React from "react"
import { Header, Main } from "../index"

const Layout = ({children}) =>{
return(
    <>
    <Header />
    <Main>{children}</Main>
    </>
)
}
export default Layout