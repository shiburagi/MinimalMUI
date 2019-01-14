import React from "react"
import Lottie from "react-lottie";
import animationData from "assets/json/loading.json"

function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Lottie options={defaultOptions}
        height={100}
        autoplay={true}
        loop={true}
        width={100}/>)
}

export default Loader;