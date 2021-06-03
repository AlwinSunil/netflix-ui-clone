import React, { useState, useEffect } from "react";
import DesktopSlider from "../../Components/DesktopSlider";
import MoblieSilder from "../../Components/MobileSlider/MoblieSilder";
import "./Slider.scss";

function Slider(props) {
  const [mobile, setMobile] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (window.innerWidth > 700) {
      setMobile(null);
    }
    setData(props.data);
  }, [props]);

  return (
    <div className="slider__wrapper">
      {data ? (
        <>
          {mobile ? (
            <MoblieSilder data={data} type={props.type} />
          ) : (
            <DesktopSlider>
              {data.map((item) => (
                <DesktopSlider.Item
                  movie={item}
                  key={item.id}
                  type={props.type}
                >
                  item1
                </DesktopSlider.Item>
              ))}
            </DesktopSlider>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Slider;
