import styled from "styled-components";
import { Colors } from "./../../utils/Colors.theme";

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
`;
const Ledder = styled.section`
    display: flex;
    flex-grow: 1;

    @media (max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
    }

    @media (max-width: 400px) {
        flex-direction: column;
        width: 100%;
    }
`;
const Collection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    @media (max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
const PlaceOfTeam = styled.div`
    width: 150px;
    height: 80px;
    margin: 40px 10px;
    border-radius: 3px;
    border: 2px solid #333;
    box-shadow: 0px 5px 6px -5px #555;
    transition: 0.3s;

    @media (max-width: 1024px) {
        width: 130px;
        height: 70px;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 60px;
    }

    @media (max-width: 600px) {
        width: 120px;
        height: 60px;
        margin: 20px 30px;
    }

    @media (max-width: 400px) {
        width: 100px;
    }

    @media (max-width: 360px) {
        width: 80px;
        height: 40px;
    }
`;
const QuarterfinalColumns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin: 20px 0;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 0;
    }

    @media (max-width: 400px) {
        margin: 10px 20px;
    }
`;
const SemiFinalsColumns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin: 20px 0;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 0;
    }
`;

const Final = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    @media (max-width: 768px) {
        flex-direction: row;
    }
`;
const Teams = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px auto 0;
    // max-width: 70%;
    padding: 20px;

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;
const TeamSquads = styled.div`
    border-radius: 3px;
    margin: 10px 20px;
    flex-grow: 1;
    border: 2px solid #222;
    box-shadow: 0px 5px 6px -5px #555;

    @media (max-width: 768px) {
        margin: 15px 30px;
    }
`;
const H3 = styled.h3`
    position: absolute;
    text-align: center;
    top: 2%;
    color: #fff;
`;
const H1 = styled.h1`
    text-transform: uppercase;
    color: #fff;
    background-color: #222;
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid #333;
    border-radius: 0 0 10px 10px;
`;
const PInLederSection = styled.p`
    text-align: center;
    line-height: 80px;
    font-size: 0.9rem;
    color: ${Colors.blue_text};
    cursor: default;

    @media (max-width: 1024px) {
        line-height: 70px;
        font-size: 0.7rem;
    }

    @media (max-width: 768px) {
        line-height: 60px;
        font-size: 0.8rem;
    }

    @media (max-width: 360px) {
        line-height: 40px;
    }
`;
const P = styled.p`
    padding: 10px;
    color: ${Colors.blue_text};
    font-size: 22px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export {
    Container,
    Ledder,
    Collection,
    PlaceOfTeam,
    QuarterfinalColumns,
    SemiFinalsColumns,
    Final,
    Teams,
    TeamSquads,
    H3,
    H1,
    PInLederSection,
    P,
};
