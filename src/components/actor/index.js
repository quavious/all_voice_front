import ActorHeader from './header';
import ActorSideLeft from './sidebar/left';
import ActorMain from './main';
import ActorSideRight from './sidebar/right';
import ActorFooter from './footer';
import { Container } from '../../styled';
import { useState, useEffect } from 'react';

export default function ActorRoute() {
    const [widthLeft, setWidthLeft] = useState(170)
    const [widthMain, setWidthMain] = useState(780)
    const [widthRight, setWidthRight] = useState(265)
    useEffect(() => {
        function callback(e) {
            const tmp = 220 + 170 + 265 + 30;
            setWidthMain(e.target.innerWidth - tmp);
        }
        window.addEventListener("resize", callback)
        return () => window.removeEventListener("resize", callback)
    }, [])
    return (
        <Container>
            <ActorHeader />
            <div style={{display: 'flex', maxWidth: "1215px", width: "100%", marginBottom: 70}}>
                <ActorSideLeft widthLeft={widthLeft} setWidthLeft={setWidthLeft} widthMain={widthMain} setWidthMain={setWidthMain} />
                <ActorMain widthLeft={widthLeft} setWidthLeft={setWidthLeft} widthMain={widthMain} setWidthMain={setWidthMain} widthRight={widthRight} setWidthRight={setWidthRight} />
                <ActorSideRight widthMain={widthMain} setWidthMain={setWidthMain} widthRight={widthRight} setWidthRight={setWidthRight}/>
            </div>
            <ActorFooter />
        </Container>
    )
}