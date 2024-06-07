import React from 'react';
import UsersData from "./@usersData/page";

// type LayoutProps = {
//   children: React.ReactNode;
//   analytics: React.ReactNode;
//   usersData: React.ReactNode;
// };

const BoxStyle={
  border:"2px solid black",
   padding:"5px",
   margin:"5px",
}

const Layout: React.FC<any> = ({ children, analytics, usersData }) => {
  return ( 
    <div style={{display:"flex"}}>
      <div style={BoxStyle}>
        {usersData}
      </div>
      <div style={BoxStyle}>
        {children}
      </div>
      <div style={BoxStyle}>
        {analytics}
      </div>
    </div>
  );
};

export default Layout;
