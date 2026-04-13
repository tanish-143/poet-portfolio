export const LiquidFilter = () => {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
      <defs>
        <filter id="liquid-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.04" 
            numOctaves="3" 
            result="noise" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="20" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
        <filter id="blood-splatter-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.8" 
                numOctaves="4" 
                result="noise" 
            />
            <feColorMatrix 
                type="matrix" 
                values="1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 18 -7" 
                in="noise" 
                result="coloredNoise" 
            />
            <feComposite operator="in" in="SourceGraphic" in2="coloredNoise" result="composite" />
            <feDisplacementMap 
                in="composite" 
                in2="noise" 
                scale="10" 
                xChannelSelector="R" 
                yChannelSelector="G" 
                result="displaced"
            />
            <feMerge>
                <feMergeNode in="displaced" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
    </svg>
  );
};
