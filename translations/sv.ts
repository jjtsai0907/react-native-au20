import { tokens } from "./appStructure";

export const swedish = {
  [tokens.screens.mainNavigator.TitleProductList]: "Produkter",
  [tokens.screens.mainNavigator.TitleEditProduct]: "Ändra produkt",
  [tokens.screens.mainNavigator.TitleNewProduct]: "Ny produkt",
  [tokens.screens.productList.HeaderName]: "Ändra Produkten", //Header for EditProductScreen
  [tokens.screens.productList.HeaderPrice]: "Pris",
  [tokens.screens.productList.HeaderType]: "Produkter",
  [tokens.screens.productList.EmptyListText]:
    "Du har inga produkter. Tryck på den gröna knappen för att lägga till en ny produkt",
  [tokens.screens.editProduct.NameInputPlaceholder]: "Namn",
  [tokens.screens.editProduct.NameErrorText]: "En produkt har redan detta namn",
  [tokens.screens.editProduct.PriceInputPlaceholder]: "Pris",
  [tokens.screens.editProduct.PriceErrorText]:
    "Integrerade produkter måste ligga inom 1000-2600.",
  [tokens.screens.editProduct.SaveButtonText]: "SPARA",
  [tokens.screens.editProduct.CancelButtontext]: "AVBRYT",
  [tokens.screens.editProduct.RemoveProductText]: "TA BORT",
  [tokens.screens.newProduct.NameInputPlaceholder]: "Namn",
  [tokens.screens.newProduct.NameErrorText]: "En produkt har redan detta namn",
  [tokens.screens.newProduct.PriceInputPlaceholder]: "Pris",
  [tokens.screens.newProduct.PriceErrorText]:
    "Integrerade produkter måste ligga inom 1000-2600.",
  [tokens.screens.newProduct.SaveButtonText]: "SPARA",
  [tokens.screens.newProduct.CancelButtontext]: "AVBRYT",
};
