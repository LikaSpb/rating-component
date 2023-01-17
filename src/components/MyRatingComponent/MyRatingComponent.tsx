import React from "react";
import RatingContent from "../RatingContent/RatingContent";
import RatingRadio from "../RatingRadio/RatingRadio";
import RatingButton from "../RatingButton/RatingButton"
import { RatingButtonProps } from "../RatingButton/RatingButton";
import { RatingContentProps } from "../RatingContent/RatingContent";
import "./MyRatingComponent.css";

type Props = RatingButtonProps & RatingContentProps;

const MyRatingComponent = ({
  contentTitle,
  contentText,
  buttonLabel,
}: Props) => {
  return (
    <div className="rating-card">
      <img src="" alt="" />
      <RatingContent contentTitle={contentTitle} contentText={contentText} />
      <RatingRadio />
      <RatingButton buttonLabel={buttonLabel} />
    </div>
  );
};

export default MyRatingComponent;
