import styles from './Button.module.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}: any) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]} ${checkButtonColor ? styles[checkButtonColor] : ''}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};