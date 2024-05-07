
import Header from "./header"
import Sidebar from "./sidebar"

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div className="flex justify-between ">
                <div className="w-[10%] md:min-w-40"> <Sidebar /></div>
                <div className=" "></div>
                    <div className="p-1 w-[90%] md:min-w-60" >
                      <main>{children}</main>
                    </div>
         </div>
    </div>
  )
}

export default Layout;