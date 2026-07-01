import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

function App(){

    const [loading,setLoading] = useState(true);

    return(
        <>
            {
                loading
                ?
                <Loader
                    onComplete={() => setLoading(false)}
                />
                :
                <Hero/>
            }
        </>
    );
}

export default App;