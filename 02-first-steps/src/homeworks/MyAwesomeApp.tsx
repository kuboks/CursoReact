import type { CSSProperties } from "react";

export function MyAwesomeApp() {
  const firstName = "Brayan";
  const lastName = "Aguilar";
  const favoriteGames = ["Gears of war", "Halo", "Metal Slug"];
  const isActive = false;
  const address = {
    zipCode: "43960",
    country: "México",
  };
  const myStyles: CSSProperties= {
          backgroundColor: isActive ? 'red' : '#fafafa',
          borderRadius: '10',
          padding: '10',
          marginTop: '30'
        };
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(", ")} </p>
      <h1> {isActive ? "Activo" : "No activo"} </h1>
      <p
        style={myStyles}
      >{JSON.stringify(address)}</p>
    </>
  );
}
