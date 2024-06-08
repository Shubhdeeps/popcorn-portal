/** BASE CARD
 * Exports
 * default Card
 * CardTitle
 * CardContent,
 * CardDescription,
 * CardFooter,
 * CardHeader,
 */

import { ImgHTMLAttributes } from "react";

interface ICardProps {
  children: React.ReactNode;
}
interface ICardComponentProps {
  children: string;
}
interface ICardHeader extends ICardProps {}
interface ICardFooter extends ICardProps {}
interface ICardContentProps extends ICardProps {}
type ICardImageProps = ImgHTMLAttributes<HTMLImageElement>;
function Card({ children }: ICardProps) {
  return <div className="card">{children}</div>;
}

function CardTitle({ children }: ICardContentProps) {
  return <div className="card__card-title">{children}</div>;
}

function CardHeader({ children }: ICardHeader) {
  return <div className="card__card-header">{children}</div>;
}
function CardFooter({ children }: ICardFooter) {
  return <div className="card__card-footer">{children}</div>;
}
function CardDescription({ children }: ICardComponentProps) {
  return <div className="card__card-description">{children}</div>;
}

function CardContent({ children }: ICardContentProps) {
  return <div className="card__card-content">{children}</div>;
}

function CardImage({ ...imageProps }: ICardImageProps) {
  return (
    <div className="card__card-image">
      <img {...imageProps} />
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
};
