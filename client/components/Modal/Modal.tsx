import React, { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import { GenericObject } from "../../interfaces/index";
import "./modal.css";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalState";
import Details from "./Details";
import Comments from "./Comments";

const Modal = () => {
  const [state, setState] = useRecoilState(modalState);
  const [currentContent, setCurrentContent] = useState(1);
  const [data, setData] = useState({});

  const content1Ref = useRef(null);
  const content2Ref = useRef(null);

  const fetchData = async () => {
    await fetch(`http://localhost:4000/api/v1/feeds/${state.itemId}`)
      .then((res) => res.json())
      .then((json) => setData(json.data[0]))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "1") {
              setCurrentContent(1);
            } else if (entry.target.id === "2") {
              setCurrentContent(2);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (content1Ref.current) {
      observer.observe(content1Ref.current);
    }
    if (content2Ref.current) {
      observer.observe(content2Ref.current);
    }

    return () => {
      if (content1Ref.current) {
        observer.unobserve(content1Ref.current);
      }
      if (content2Ref.current) {
        observer.unobserve(content2Ref.current);
      }
    };
  }, [content1Ref, content2Ref]);

  useEffect(() => {
    if (state?.state && state.itemId) {
      fetchData();
    }
  }, [state]);

  return (
    <>
      <div className="container">
        <div
          className="close"
          onClick={() => setState({ state: false, itemId: "" })}
        >
          <ImCross size={10} />
        </div>
        <div className="media">
          <div className="media--controls">
            <a
              onClick={() => setCurrentContent(1)}
              href={`#${currentContent}`}
              className={`media--controls__button ${
                currentContent === 1 && "disable"
              }`}
            >
              <FaArrowUp size={15} />
            </a>
            <a
              onClick={() => setCurrentContent(2)}
              href={`#${currentContent}`}
              className={`media--controls__button ${
                currentContent === 2 && "disable"
              }`}
            >
              <FaArrowDown size={15} />
            </a>
          </div>
          <div id="1" ref={content1Ref} className="media--content1">
            <img
              src={data?.banner_image}
              alt="banner"
              className="media--content1__image"
            />
          </div>
          <div id="2" ref={content2Ref} className="media--content2">
            <Details item={data} />
          </div>
        </div>
        <div className="content">
          <Comments item={data} />
        </div>
      </div>
    </>
  );
};

export default Modal;
