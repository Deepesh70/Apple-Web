import React from 'react'
import useMacBookStore from '../store';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box , OrbitControls } from '@react-three/drei';
import MacBookModel14 from './models/Macbook';    
import StudioLight from './three/StudioLight';
import ModelSwitch from './three/ModelSwitch';
import { useMediaQuery } from 'react-responsive';

const Productviewer = () => {
    const { color, scale, setColor, setScale} = useMacBookStore();
    const isMobile = useMediaQuery({ query:'(max-width: 1024px)'});

  return (
    <section id='product-viewer'>
        <h2>Take a Closer look.</h2>
        <div className='controls'>
            <p className='info'>MacBook Pro {scale} in {color}</p>

            <div className='flex-center gap-5 mt-5'>
                <div className='color-control'>
                    <div 
                    onClick={() => setColor('#adb5bd')}
                    className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}>
                        
                    </div>
                    <div 
                    onClick={() => setColor('#2e2c2e')}
                    className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}>
                        
                    </div>
                   

                </div>
                <div className='size-control'>
                    <div 
                    onClick={() => setScale(0.06)}
                    className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                    <p>14"</p>    
                    </div>
                    <div 
                    onClick={() => setScale(0.08)}
                    className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                    <p>16"</p>
                    </div>

                </div>

            </div>

        </div>
        <Canvas id='canvas' camera={{ position:[0,2,5] , fov:50 , near: 0.1 , far:100}}>
            <StudioLight />
            {/* <directionalLight position={[10,10,5]} intensity={1} />
            <directionalLight position={[-10,-10,-5]} intensity={1} /> */}
            <MacBookModel14 scale={scale} position={[0,0.5,0]} rotation={[0,Math.PI,0]} />

            <ModelSwitch scale={ isMobile ? scale - 0.03  : scale   } />    
        </Canvas>

    </section>
  )
}

export default Productviewer