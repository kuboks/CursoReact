import { heroes, type Hero, Owner } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  // if ( !hero ) {
  //     throw new Error(`No existe el heroe con id: ${id}`)
  // }

  return hero;
};

// Mi respuesta
// export const getHerobyOwner = (owner: Owner): [Hero] => {
//   let Heros: any = []
//   heroes.forEach((hero)=>{if(hero.owner === owner) Heros.push(hero) })
//   return Heros;
// };

// Respuesta del video
export const getHeroesByOwner = (owner: Owner): Hero[] =>{
    const heroesByOwner= heroes.filter((hero) =>{
        hero.owner ===owner
    })
    return heroesByOwner
}