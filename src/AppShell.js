import { useState } from "react"
import { AnimatedGIF } from "./AnimatedGIF";


export const AppShell = () => {
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(false);
    const [noAll, setNoAll ] = useState(false);
    const handleYes = () => {
        setYes(true);
    };

    const handleNo = () => {
        setNo(true);
    };

    const handleYes1 = () => {
       setNoAll(true);
    }

    const handleNo1 = () => {
        setYes(false);
        setNo(false);
    }

    const handleDate = () => {
        window.location.href = 'https://calendly.com/karthikvajja/book-a-date';
    }
    return (
        <div>
            {
                noAll?
                <div>
                    <center>
                        <h1> : |</h1>
                        <AnimatedGIF src='./book-date/cat_sad.gif' alt='Animated GIF' />
                    </center>
                </div>:
                yes ? 
                <div>
                    <center>
                        <h1> When are you free? XD </h1>
                        <AnimatedGIF src='./book-date/cat_dance.gif' alt='Animated GIF'/>
                    </center>
                    <div style={{ marginTop: '1em', display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleDate} style={{ backgroundColor: 'red', color: 'white', padding: '1em', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Book a date</button>
                    </div>
                </div> :
                no ?
                <div>
                    <center>
                        <h1> Are you sure? :{'('} </h1>
                        <AnimatedGIF src='./book-date/cat_sad.gif' alt='Animated GIF'/>
                    </center>
                    <div style={{ marginTop: '1em', display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleNo1} style={{ marginRight: '20vh', backgroundColor: 'red', color: 'white', padding: '1em', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>No</button>
                    <button onClick={handleYes1} style={{ backgroundColor: 'green', color: 'white', padding: '1em', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Yes</button>
                    </div>
                </div> :
                <div>
                    <center>
                    <h1> Want to go on a date?? :P </h1>
                    <AnimatedGIF src='./book-date/cat_please.gif' alt='Animated GIF'/>
                </center>
                    <div style={{ marginTop: '1em', display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleNo} style={{ marginRight: '20vh', backgroundColor: 'red', color: 'white', padding: '1em', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>No</button>
                    <button onClick={handleYes} style={{ backgroundColor: 'green', color: 'white', padding: '1em', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Yes</button>
                    </div>
                </div>
            }
        </div>
    )
}