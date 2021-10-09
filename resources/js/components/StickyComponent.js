import React, {
    CSSProperties,
    PropsWithChildren,
    useEffect,
    useRef,
    useState } from 'react';

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
        }, ms)
    };
}

export default function Sticky({children, ...props}) {
    const [offset, setOffset] = useState(undefined);
    const [height, setHeight] = useState(0);
    const [style, setStyle] = useState({});
    const elementRef = useRef(null);
    const supportRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            const boundingRect = elementRef.current.getBoundingClientRect();
            if (!offset) {
                setOffset(boundingRect.y -1);
            }

            if (height !== boundingRect.height) {
                setHeight(boundingRect.height);
            }
        }

        const handleScroll = debounce(function handleResize() {
            const supportRect = supportRef.current.getBoundingClientRect();
            const boundingRect = elementRef.current.getBoundingClientRect();
            
            if (supportRect.y < boundingRect.y){
                setStyle({...style, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'})
            }
            else {
                setStyle({...style, boxShadow: undefined})
            }
        }, 60)

        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    useEffect(() => {        
        if (offset) {
            setStyle({ position: 'fixed', top: offset, zIndex: 99});
        }
    }, [offset]);

    return (
        <>
            <div className="sticky" ref={elementRef} style={style}>
                {children}
            </div>
            <div ref={supportRef} style={{ visibility: 'hidden', height }} />
        </>
    );
}