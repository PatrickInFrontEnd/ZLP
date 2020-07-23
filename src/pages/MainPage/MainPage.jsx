import React from "react";
import MainPg from "../Components/MainPg";
import Banner from "./../Components/BannerSection";

class MainPage extends React.PureComponent {
    state = {};
    render() {
        return (
            <>
                <Banner />
                <MainPg />
            </>
        );
    }
}

export default MainPage;
