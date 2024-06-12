import { CardDescription } from "@/components/Card/base-card";
import { Person } from "@/models/Person.model";
import { APIEndpoints } from "@/utils/endpoints";
import { useNavigate } from "react-router-dom";

interface IPersonProps extends Pick<Person, "id" | "name" | "profile_path"> {
  rank?: number;
  isLoading?: boolean;
}
export default function PersonCard({
  id,
  name,
  profile_path,
  isLoading,
}: IPersonProps) {
  const isRank = false;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/person/${id}`)} className="person-card">
      {isLoading ? (
        <div className="person-card__avatar person-card__avatar__loading" />
      ) : (
        <img
          className="person-card__avatar"
          src={`${APIEndpoints.Image}${profile_path}`}
        />
      )}
      <span className="person-card__name">{name}</span>
      {isRank && <CardDescription>2</CardDescription>}
    </div>
  );
}
