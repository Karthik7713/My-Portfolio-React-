import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        
        
        style: {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: -1
},

        // fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#000000" } },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#00BFFF" },
          shape: { type: "circle" },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 10,
            random: true,
            anim: { enable: true, speed: 4, size_min: 1, sync: false }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            outModes: { default: "out" }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground;
