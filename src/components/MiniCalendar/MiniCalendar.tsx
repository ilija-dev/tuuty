import { MiniCalendarContainer,  DateBox, Wrapper, DaysBox, SelectionsBox, TimesBox } from './MiniCalendar.style';

export type MiniCalendarProps = JSX.IntrinsicElements['div'] & {
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
    onClick?: () => void;
    onMouseEnter?: (e: any) => void;
  };

export const MiniCalendar = (props: MiniCalendarProps): JSX.Element => {

    const {
        margin,
        padding,
        height,
        width,
        onClick,
        onMouseEnter
    } = props;
    
    return (
        <MiniCalendarContainer 
            onClick={ onClick }
            onMouseEnter={ onMouseEnter }
            padding={padding}
            margin={margin}
            height={height}
            width={width}>
            

            {/* <DateBox className='date-box' />
            <DaysBox className='days-box' />
            <TimesBox className='times-box' />
            <SelectionsBox className='selections-box' /> */}

            <Wrapper className="wrapper">
                <DateBox>
                    <p>SEP</p>
                    <p>2023</p>
                </DateBox>
                <DaysBox>
                    <>
                        <p>Mo</p>
                        <p>21</p>
                    </>
                    <>
                        <p>Tu</p>
                        <p>22</p>
                    </>
                    <>
                        <p>We</p>
                        <p>23</p>
                    </>
                    <>
                        <p>Th</p>
                        <p>24</p>
                    </>
                    <>
                        <p>Fr</p>
                        <p>25</p>
                    </>
                    <>
                        <p>Sa</p>
                        <p>26</p>
                    </>
                    <>
                        <p>Su</p>
                        <p>27</p>
                    </>
                </DaysBox>
                <TimesBox>
                    <div>00 ~ 04</div>
                    <div>04 ~ 08</div>
                    <div>08 ~ 12</div>
                    <div>12 ~ 16</div>
                    <div>16 ~ 20</div>
                    <div>20 ~ 24</div>
                </TimesBox>
                <SelectionsBox>
                    <div><div className='available' onClick={onClick}/></div>
                    <div><div className='available' onClick={onClick}/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div className='available' onClick={onClick}/></div>
                    <div><div className='available' onClick={onClick}/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div className='available' onClick={onClick}/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div className='available' onClick={onClick} /></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div className='available' onClick={onClick}/></div>
                    <div><div/></div>
                    <div><div/></div>
                    <div><div/></div>
                </SelectionsBox>
            </Wrapper>
            
        </MiniCalendarContainer>
    );
}