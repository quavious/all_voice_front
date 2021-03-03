import ActorHeader from './header';
import ActorSideLeft from './sidebar/left';
import ActorMain from './main';
import ActorSideRight from './sidebar/right';
import ActorFooter from './footer';
import { Container } from '../../styled';

export default function ActorRoute() {
    return (
        <Container>
            <ActorHeader />
            <div style={{display: 'flex'}}>
                <ActorSideLeft />
                <ActorMain />
                <ActorSideRight />
            </div>
            <ActorFooter />
        </Container>
    )
}