/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./style";
const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios.get("/js/data.json").then((res) => {
      setImages(res.data.portfolio);
      setTitles(res.data.portfolio);
    });
  }, []);

  const PortfolioImages = images.map(function (imageItem) {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>{imageItem.hoverText}</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });
  const PortfolioTitles = titles.map(function (titleItem) {
    return (
      <PortfolioItem key={titleItem} active={titleItem.active}>
        {titleItem.title}
      </PortfolioItem>
    );
  });

  return (
    <>
      <PortfolioSection>
        <PortfolioTitle>
          <PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio
        </PortfolioTitle>
        <PortfolioList>{PortfolioTitles}</PortfolioList>

        <div className="Box">{PortfolioImages}</div>
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
