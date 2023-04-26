import { CardContainer } from './Card.style';

export type CardVariant = 'Default' | 'Transparent';
export type Size = 'Small' | 'Large';

export type CardProps = JSX.IntrinsicElements['div'] & {
    icon?: any;
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
    children: any,
    onClick?: () => void;
    onMouseEnter?: (e: any) => void;
  };

export const Card = (props: CardProps): JSX.Element => {

    const {
        icon,
        margin,
        padding,
        height,
        width,
        children,
        onClick,
        onMouseEnter
    } = props;
    
    return (
        <CardContainer onClick={ onClick } onMouseEnter={ onMouseEnter } padding={padding} margin={margin} height={height} width={width}>
            {children}
        </CardContainer>
    );
}