import React from "react";

import Header from "./components/Header";
import SocialMediaMarketing from "./components/SocialMediaMarketing";
import ServiceList from "./components/ServiceList";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <SocialMediaMarketing />
            <ServiceList />
            <Appointment />
            <Footer />
        </>
    );
}

export default App;
