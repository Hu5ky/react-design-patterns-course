export const partiallyApply = (Component: any, partialProps: any) => {
    return (props: any) => {
        return <Component {...partialProps} {...props} />
    }    
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size: string;
    color: string;
    text: string;
  }

export const Button: React.FC<ButtonProps> = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '6rem' : '2rem',
            backgroundColor: color,
        }} {...props} >{text}</button>
    );
}

export const DangerButton2 = partiallyApply(Button, { color: 'red' , onClick: () => {console.log('Explosion!')}});

export const DangerButton = (props: any) => {
    return (
        <Button {...props} color="red" onClick={() => {console.log('Explosion!')}}/>
    );
}

export const BigSuccessButton2 = partiallyApply(Button, { color: 'green', size: 'large' });

export const BigSuccessButton = (props: any) => {
    return (
        <Button {...props} size="large" color="green" onClick={() => {console.log('* crickets *')}}/>
    );
}