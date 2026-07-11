import { Suspense } from "react";
import HomeContent from "./components/HomeContent/HomeContent";

export default function Home() {
    return (
        <Suspense fallback = {null}>
            <HomeContent/>
        </Suspense>
    );
}