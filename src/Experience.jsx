import './Experience.css';
import { Environment,Float, Html, PresentationControls, Text, useGLTF } from '@react-three/drei';
import Arrow from './Arrow';

function Experience() {

  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  
  return (
    <>
      <Environment preset="city" />
      <PresentationControls 
        global 
        rotation={[0.1,0.02,0]} 
        polar={[-0.4, 0.2]} 
        azimuth={[-1, 0.75]}
        config={{mass:2, tension:400}}
        snap={{mass:4, tension:400}}>
            <Float rotationIntensity={0.001}>
            <rectAreaLight 
              width={2.5}
              height={1.65}
              intensity={85}
              color={'#ffffff'}
              rotation = {[0.1, Math.PI, 0]}
              position={[-1,1,-2]}
            />
              <primitive object={computer.scene} position-y={-1.2} position-x={-0.5} rotation-y={0.3}>
                  <Html transform 
                        wrapperClass="htmlScreen" 
                        distanceFactor={0.76}
                        position={[-0.05,1.55,-1]}
                        rotation={[-0.2,0,0]}
                        >
                      <iframe 
                      src={"https://lahari07.github.io/portfolio/"}
                      title="my portfolio"
                      />
                  </Html>
                  <Html position={[1.15,2.58,-1]}>
                  <Arrow/>
                </Html>
                <Text 
                  font={'./Zeyada.ttf'}
                  fontSize={0.2}
                  position={[1.8,2.25,-1]}
                >
                Keep Scrolling
                </Text>
                </primitive>

                <Text 
                  font={'./luckiest-guy.ttf'}
                  fontSize={0.6}
                  children={'LAHARI\nCHEPURI'}
                  position={[1.5,0,-0.5]}
                  rotation={[0,-1,0]}>
                </Text>

            </Float>
      </PresentationControls>
    </>

  );
}

export default Experience;