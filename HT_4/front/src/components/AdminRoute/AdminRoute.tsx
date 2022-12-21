import {useAppSelector} from "../../hooks/redux";
import {selectIsAuth, selectUserRole} from "../../store/user/user.selectors";
import {Navigate, Outlet} from "react-router-dom";
import React from "react";
import ROUTES from "../../contants/routes";
import {UserRole} from "../../models/user";


function AdminRoute() {
    const isAuth = useAppSelector(selectIsAuth);
    const userRole = useAppSelector(selectUserRole);

    if( !isAuth ) {
        return <Navigate to={ROUTES.LOGIN} />
    }

    if( userRole !== UserRole.ADMIN ) {
        return <Navigate to={ROUTES.COURSES} />
    }

    return <Outlet />
}

export default AdminRoute;
