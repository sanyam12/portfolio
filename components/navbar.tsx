'use client'
import Button from "./button";
import { useState } from "react";

export default function NavBar() {
    const [lastClicked, setLastClicked] = useState("home") // ["home", "doc", "code", "github", "linkedin", "twitter"
    const onHomeClick = ()=>{
        console.log("Home")
        setLastClicked("home")
    }

    // const onDocClick = ()=>{
    //     console.log("Doc")
    //     setLastClicked("doc")
    // }

    // const onCodeClick = ()=>{
    //     console.log("Code")
    //     setLastClicked("code")
    // }

    const onGithubClick = ()=>{
        console.log("Github")
        setLastClicked("github")
    }

    const onLinkedinClick = ()=>{
        console.log("Linkedin")
        setLastClicked("linkedin")
    }

    const onTwitterClick = ()=>{
        console.log("Twitter")
        setLastClicked("twitter")
    }


    return (
        <div className="flex justify-center">
            <div className="w-[75vw] md:w-[50vw] lg:w-[34vw] h-[11vh] bg-custom-gray-90 rounded-full flex justify-evenly items-center">
                <Button path="/home.svg" onClick={onHomeClick} isClicked={lastClicked=="home"} href={"/"}/>
                {/* <Button path="/doc.svg" onClick={onDocClick} isClicked={lastClicked=="doc"} href={"/doc"}/> */}
                {/* <Button path="/code.svg" onClick={onCodeClick} isClicked={lastClicked=="code"} href={"/code"}/> */}
                <Button path="/github.svg" onClick={onGithubClick} isClicked={lastClicked=="github"} href={"https://github.com/sanyam12"}/>
                <Button path="/linkedin.svg" onClick={onLinkedinClick} isClicked={lastClicked=="linkedin"} href={"https://www.linkedin.com/"}/>
                <Button path="/twitter.svg" onClick={onTwitterClick} isClicked={lastClicked=="twitter"} href={"https://twitter.com/SanyamRatr61964"}/>
            </div>
        </div>
    );
}