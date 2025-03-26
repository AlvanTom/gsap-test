import './Box.css';
import { gsap  } from 'gsap-trial';
import { GSDevTools } from 'gsap-trial/GSDevTools';
import { useGSAP } from '@gsap/react';
/** Primary UI component for user interaction */
export const Box = () => {
  gsap.registerPlugin(useGSAP, GSDevTools);

  const { contextSafe } =useGSAP(() => {
  }, []);

  const onClick = contextSafe(() => {
    const shift = gsap.fromTo('.box', {
        x: 0,
    }, {
        x: 100,
        duration: 1,
        ease: 'power2.inOut',
    });

    GSDevTools.create({
      animation: shift,
    });
  });

  return (
    <>
      <div className="box" />
      <button onClick={onClick}>Play</button>
    </>
  );
};
