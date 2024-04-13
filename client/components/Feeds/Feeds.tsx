/* eslint-disable */
// eslint-disable-line

import React, { useEffect, useRef, useState } from "react";
import "./feeds.css";
import FeedCard from "./FeedCard";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalState";
import Modal from "../Modal/Modal";

const Feeds = () => {
  const [data, setData] = useState([]);
  const lastElementRef = useRef(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [state] = useRecoilState(modalState);

  useEffect(() => {
    if (state.state) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove event listener
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [state]);

  const fetchFeedData = async () => {
    setLoading(true);
    await fetch(`http://localhost:4000/api/v1/feeds?page=${page}`)
      .then((res) => res.json())
      .then((json) => setData([...data, ...json.data]))
      .catch((err) => console.error(err));
    setLoading(false);
  };

  useEffect(() => {
    fetchFeedData();
  }, [page]);

  useEffect(() => {
    if (!data.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === lastElementRef.current) {
          setPage((prevPage) => prevPage + 1);
        }
      });
    });

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      if (lastElementRef.current) {
        observer.unobserve(lastElementRef.current);
      }
    };
  }, [data]);

  return (
    <div className="feeds">
      {state.state && <Modal />}
      {data?.map((el, index) => (
        <FeedCard key={index} item={el} />
      ))}
      {loading && <h1>Loading...</h1>}
      <div
        style={{
          width: "200px",
          height: "20px",
          position: "absolute",
          bottom: 0,
          zIndex: 100,
        }}
        ref={lastElementRef}
      ></div>
    </div>
  );
};

export default Feeds;
