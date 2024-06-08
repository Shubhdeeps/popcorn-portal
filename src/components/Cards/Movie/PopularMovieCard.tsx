import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/features/Card";

export default function PopularMovieCard() {
  return (
    <Card>
      <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCW-Jx7WpULfSFUcjMjoQSclEhay44yYJ_w&s" />
      <CardHeader>
        <CardTitle>
          <a>This is title</a>
        </CardTitle>
        <CardDescription>This is description</CardDescription>
      </CardHeader>
      <CardContent>
        <div>this is content</div>
      </CardContent>
      <CardFooter>
        <div>this is footer</div>
      </CardFooter>
    </Card>
  );
}
