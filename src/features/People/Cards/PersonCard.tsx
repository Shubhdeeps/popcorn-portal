import { CardDescription } from "@/components/Card/base-card";
import { Person } from "@/models/Person.model";
import { APIEndpoints } from "@/utils/endpoints";

interface IPersonProps extends Pick<Person, "id" | "name" | "profile_path"> {
  rank?: number;
}
export default function PersonCard({ id, name, profile_path }: IPersonProps) {
  const isRank = false;
  return (
    <div className="person-card">
      <img
        className="person-card__avatar"
        src={`${APIEndpoints.Image}${profile_path}`}
      />
      <span className="person-card__name">{name}</span>
      {isRank && <CardDescription>2</CardDescription>}
    </div>
  );
}
