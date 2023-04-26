import { ButtonContainer, Text, Icon } from './Button.style';

export type ButtonVariant = 'Default' | 'Transparent';
export type Size = 'Small' | 'Large';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
    size?: Size;
    icon?: any;
    margin?: string;
    emphasis?: boolean;
    variant?: ButtonVariant;
    action?: () => void;
  };

export const Button = (props: ButtonProps): JSX.Element => {

    const {
        icon,
        margin = '',
        children,
        disabled,
        size = 'Small',
        variant = 'Default',
        onClick,
    } = props;
    
    return (
        <ButtonContainer onClick={ onClick } disabled={disabled} variant={variant} size={size} margin={margin}>
            { icon && <Icon src={icon.src} /> }
            <Text>{children}</Text>
        </ButtonContainer>
    );
}