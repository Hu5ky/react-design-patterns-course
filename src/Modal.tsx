import  { useState } from 'react';
import styled from 'styled-components';

const ModalBackgroud = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

interface ModalProps {
    children?: React.ReactNode; // Children can be any valid React node
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <button onClick={() => setShouldShow(true)}>Show Modal</button>
            {shouldShow && (
                <ModalBackgroud onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}>Hide Modal</button>
                        { children }
                    </ModalBody>
                </ModalBackgroud>
            )}
        </>
    );
}

export default Modal