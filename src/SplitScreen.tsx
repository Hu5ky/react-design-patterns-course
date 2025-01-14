import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: 1;
`;

interface SplitScreenProps {
    left: React.ComponentType;
    right: React.ComponentType;
}

export const SplitScreen: React.FC<SplitScreenProps> = ({
    left: Left,
    right: Right,
}) => {
    return (
        <>
            <Container>
                <Pane>
                    <Left />
                </Pane>
                <Pane>
                    <Right />
                </Pane>
            </Container>
        </>
    )
}