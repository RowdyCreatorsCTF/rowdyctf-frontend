export default function ChallengeById({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1>Challenge {id}</h1>
    </div>
  );
}
