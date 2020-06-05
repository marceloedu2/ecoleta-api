import Knex from "knex";

export const seed = async (knex: Knex) => {
  knex("items").insert([
    { title: "Lâmpada", image: "lampadas.svg" },
    { title: "pilhas e baterias", image: "baterias.svg" },
    { title: "Papés e papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "Óleo de Cozinha", image: "oleos.svg" }
  ]);
};
