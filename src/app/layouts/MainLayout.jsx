import Header from "../../widgets/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import {Suspense, useCallback, useEffect, useState} from "react";
import Loading from "../../shared/ui/Loading/Loading.jsx";
import {fetchCurrentCityWeather, fetchFiveDaysWeather} from "../../shared/api/fetchWeather.js";

export default function MainLayout() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Outlet></Outlet>
            </Suspense>
        </>
    )
}