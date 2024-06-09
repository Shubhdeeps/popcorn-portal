import { starSVG } from "@/assets/Star.svg";
import { HTMLAttributes, ImgHTMLAttributes } from "react";

type ICardProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;
interface ICardDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
}
interface ICardHeaderProps extends ICardProps {}
interface ICardFooterProps extends ICardProps {}
interface ICardContentProps extends ICardProps {}
type ICardImageProps = ImgHTMLAttributes<HTMLImageElement>;
interface IMovieRating {
  rating: number | string;
}
/** BASE CARD
 * default Card
 * CardTitle
 * CardContent
 * CardDescription
 * CardFooter
 * CardHeader
 * CardImage
 */
function Card({ children, ...props }: ICardProps) {
  return <div className={`card ${props.className || ""}`}>{children}</div>;
}

function CardTitle({ children, ...props }: ICardContentProps) {
  return (
    <div className={`card__card-title ${props.className || ""}`}>
      {children}
    </div>
  );
}

function CardHeader({ children, ...props }: ICardHeaderProps) {
  return (
    <div className={`card__card-header ${props.className || ""}`}>
      {children}
    </div>
  );
}
function CardFooter({ children, ...props }: ICardFooterProps) {
  return (
    <div className={`card__card-footer ${props.className || ""}`}>
      {children}
    </div>
  );
}
function CardDescription({ children, ...props }: ICardDescriptionProps) {
  return (
    <div className={`card__card-description ${props.className || ""}`}>
      <span>{children}</span>
      <div className="card__tooltip">{children}</div>
    </div>
  );
}

function CardContent({ children, ...props }: ICardContentProps) {
  return (
    <div className={`card__card-content ${props.className || ""}`}>
      {children}
    </div>
  );
}

function CardImage({ ...imageProps }: ICardImageProps) {
  return (
    <div className={`card__card-image ${imageProps.className || ""}`}>
      <img {...imageProps} />
    </div>
  );
}

function CardRating({ rating }: IMovieRating) {
  return (
    <div className="card__card-rating">
      {starSVG} {rating} / 10
    </div>
  );
}

export default Card;
export {
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardRating,
};
