
import { jwtDecode } from "jwt-decode";
import React, { JSX, use } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute :React.FC<PublicRouteProps> = ({ children }) => {
    const token=useSelector((state:any) => state.jwt);
    if(token && window.location.pathname === "/login"){
        return<Navigate to="/"/>
    }
 
    return children;
}

export default PublicRoute;