import { tokens } from "./appStructure";

export const english = {
  [tokens.screens.mainNavigator.TitleProductList]: "Products",
  [tokens.screens.mainNavigator.TitleEditProduct]: "Edit product",
  [tokens.screens.mainNavigator.TitleNewProduct]: "New product",
  [tokens.screens.productList.HeaderName]: "Edit Product", //Header for EditProductScreen
  [tokens.screens.productList.HeaderPrice]: "Price",
  [tokens.screens.productList.HeaderType]: "Items",
  [tokens.screens.productList.EmptyListText]:
    "You do not have any products. Press the green button below to add a new one.",
  [tokens.screens.editProduct.NameInputPlaceholder]: "Name",
  [tokens.screens.editProduct.NameErrorText]: "Name already exists.",
  [tokens.screens.editProduct.PriceInputPlaceholder]: "Price",
  [tokens.screens.editProduct.PriceErrorText]:
    "Integrated products must be in the range 1000-2600.",
  [tokens.screens.editProduct.SaveButtonText]: "SAVE",
  [tokens.screens.editProduct.CancelButtontext]: "CANCEL",
  [tokens.screens.editProduct.RemoveProductText]: "REMOVE",
  [tokens.screens.newProduct.NameInputPlaceholder]: "Name",
  [tokens.screens.newProduct.NameErrorText]: "Name already exists.",
  [tokens.screens.newProduct.PriceInputPlaceholder]: "Price",
  [tokens.screens.newProduct.PriceErrorText]:
    "Integrated products must be in the range 1000-2600.",
  [tokens.screens.newProduct.SaveButtonText]: "SAVE",
  [tokens.screens.newProduct.CancelButtontext]: "CANCEL",
};
