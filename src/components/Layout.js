import React from "react"
import { useLocation } from "@reach/router"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, props }) => {
  const location = useLocation();
  let bg;
  let tc;

  if (location.pathname == '/') {
    bg = 'transparent'
    tc = 'text-gray-200'
  } else {
    bg = 'bg-white'
    tc = 'text-gray-800;'
  }

  return (
    <>
      <Header backgroundColor={bg} textColor={tc} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      {console.log(props)}
    </>
  )
}

export default Layout