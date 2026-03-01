export function MyAwesomeApp() {
  const firstName = "Brayan";
  const lastName = "Aguilar";
  const favoriteGames = ["Gears of war", "Halo", "Metal Slug"];
  const isActive = true;
  const address = {
    zipCode: "43960",
    country: "México",
  };

  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(", ")} </p>
      <h1> {isActive ? "Activo" : "No activo"} </h1>
      <p>{JSON.stringify(address)}</p>
    </>
  );
}
