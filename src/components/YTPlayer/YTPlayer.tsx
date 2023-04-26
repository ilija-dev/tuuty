import { useEffect, useState } from 'react';
import { PlayIcon, YTImage, YTImageContainer, YTPlayerContainer } from './YTPlayer.style';

import PlayIconSVG from './icons/play-icon.svg';

const YTVideoURL = 'https://www.youtube.com/embed/';
const YTThumbURL = 'https://img.youtube.com/vi/';

export type YTPlayerProps = JSX.IntrinsicElements['div'] & {
    margin?: string;
    padding?: string;
    height: string;
    width: string;
    url: string;
};

export const YTPlayer = (props: YTPlayerProps): JSX.Element => {

    const {
        margin,
        padding,
        height,
        width,
        url
    } = props;

    const [playState, changePlayState] = useState(false);

    useEffect( () => {
        changePlayState(false);
    }, [url] )
    
    return (
        <YTPlayerContainer 
            padding={padding}
            margin={margin}
            height={height}
            width={width}
            onClick={() => changePlayState( !playState )}>
            
            { playState ?
                <iframe 
                    width={width}
                    height={height}
                    src={url + '?autoplay=1&mute=0&rel=0'}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen 
                />
            :  
                <YTImageContainer>
                    <PlayIcon src={ PlayIconSVG.src } />
                    <YTImage src={`${YTThumbURL}${ url.replace(YTVideoURL, '') }/maxresdefault.jpg`} alt='YouTube video' width={width} height={height} />
                </YTImageContainer>
            }
            
        </YTPlayerContainer>
    );
}