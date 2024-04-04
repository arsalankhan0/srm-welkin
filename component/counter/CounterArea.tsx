// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import CountUp from "react-countup";
// type Props = {
//   marginTop: string;
// };
// const CounterArea = ({ marginTop }: Props) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
//     if (entries[0].isIntersecting) {
//       setIsVisible(true);
//     }
//   };

//   const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const targetElement = document.querySelector(".tf__counter2_overlay");

//     if (targetElement) {
//       intersectionObserverRef.current = new IntersectionObserver(
//         onVisibilityChange,
//         {
//           threshold: 0.5,
//         }
//       );

//       intersectionObserverRef.current.observe(targetElement);
//     }

//     return () => {
//       if (intersectionObserverRef.current) {
//         intersectionObserverRef.current.disconnect();
//       }
//     };
//   }, []);
//   return (
//     <div className={`tf__counter_area ${marginTop}`}>
//       <div className="tf__counter2_overlay">
//         <ul className=" d-flex flex-wrap justify-content-center">
//           <li className="tf__single_counter">
//             <h2 className="counter">
//               {isVisible && <CountUp start={1} end={200} duration={5} />}
//             </h2>
//             <h4>Well Qualified & experienced Teachers</h4>
//           </li>
//           <li className="tf__single_counter">
//             <h2 className="counter">
//               {isVisible && <CountUp start={1} end={6000} duration={5}/>}
//             </h2>
//             <h4>Student Enrolled</h4>
//           </li>
//           <li className="tf__single_counter percent">
//             <h2 className="counter">
//               {isVisible && <CountUp start={1} end={99.9} duration={5} decimals={1}/>}
//             </h2>
//             <h4>Best results in Academics and other Curricular Activities</h4>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CounterArea;

"use client"
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type CounterData = {
  start: number;
  end: number;
  duration: number;
  decimals?: number;
  label: string;
};

type Props = {
  marginTop: string;
  counters: CounterData[];
};

const CounterArea = ({ marginTop, counters }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".tf__counter2_overlay");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={`tf__counter_area ${marginTop}`}>
      <div className="tf__counter2_overlay">
        <ul className="d-flex flex-wrap justify-content-center">
          {counters.map((counter, index) => (
            <li className={`tf__single_counter ${counter.decimals ? 'percent' : ''}`} key={index}>
              <h2 className="counter">
                {isVisible && (
                  <CountUp
                    start={counter.start}
                    end={counter.end}
                    duration={counter.duration}
                    decimals={counter.decimals || 0}
                  />
                )}
              </h2>
              <h4>{counter.label}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CounterArea;
