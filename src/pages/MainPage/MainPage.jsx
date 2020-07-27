import React from "react";
import MainContent from "../../Components/MainPage component/MainPg.component";
import Banner from "./../../Components/BannerSection component/BannerSection.component";

class MainPage extends React.PureComponent {
    state = {};
    render() {
        return (
            <>
                <Banner />
                <MainContent />
            </>
        );
    }
}

export default MainPage;
