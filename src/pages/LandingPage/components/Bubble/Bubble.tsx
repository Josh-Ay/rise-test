type Position = 'absolute' | 'relative' | 'static';

const Bubble = ({
    position='absolute',
    top,
    left,
    right,
    bottom,
    size,
    backgroundColor='#A0DDE2',
    zIndex,
}: {
    position?: Position;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    size?: string;
    backgroundColor?: string;
    zIndex?: string;
}) => {
    return <div
        style={{
            position,
            top,
            right,
            left,
            bottom,
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor,
            zIndex,
        }}
    ></div>
}

export default Bubble