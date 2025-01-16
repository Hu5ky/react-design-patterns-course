import styled from 'styled-components';
import { ReactElement } from 'react';

const Container = styled.div`
    display: flex;
`;

/*
    <{ weight: number }>: TypeScript props definition
    ${...}: Dynamic expression
    ({weight}): Destructured prop weight from Pane
*/
interface PaneProps {
    $weight: number; 
}

const Pane = styled.div<PaneProps>`
    flex: ${({ $weight }) => $weight};
`;

interface SplitScreenProps {
    children: [ReactElement, ReactElement];
    leftWeight?: number;
    rightWeight?: number;
}

/*
    React.FC or React.FunctionalComponent: React component that return JSX or null with
    prop types defined by SplitScreenProps interface
*/
export const SplitScreen: React.FC<SplitScreenProps> = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [left, right] = children;
    return (
        <>
            <Container>
                <Pane $weight={leftWeight}>
                    {left}
                </Pane>
                <Pane $weight={rightWeight}>
                    {right}
                </Pane>
            </Container>
        </>
    )
}