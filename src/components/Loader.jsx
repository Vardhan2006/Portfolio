import { useEffect, useState } from "react";
import "../styles/loader.css";

export default function Loader({ onComplete }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setProgress(prev => {

                if(prev >= 100){

                    clearInterval(interval);

                    setTimeout(() => {
                        onComplete();
                    },500);

                    return 100;
                }

                return prev + 1;
            });

        },30);

        return () => clearInterval(interval);

    },[onComplete]);

    return (
        <div className="loader-wrapper">

            <div className="loader-text">
                SAI VARDHAN
            </div>

            <div className="loading-percent">
                loading... {progress}%
            </div>

        </div>
    );
}