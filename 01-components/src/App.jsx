import React from 'react'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Parent from "../../02-props/Parent.jsx";
import styles from "../../02-props/styles/styles.css"
const App = () => {
    return (
        <>
            <Header/>
            <About/>
            <Skills/>
            <Footer/>
            <Parent/>
        </>


    )
}
export default App
