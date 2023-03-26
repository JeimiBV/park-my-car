import SideBar from "@/components/SideBar"
import Navbar from "@/components/Navbar"
import Container from "@/components/Container"
export default function main(){
    return (<>
        <Navbar/>
        <div className="d-flex">
        <SideBar/>
        <Container/>
        </div>
        
    </>)
}