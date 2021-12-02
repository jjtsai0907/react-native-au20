enum MainNavigator {
  TitleProductList = "title-products",
  TitleEditProduct = "title-edit-product",
  TitleNewProduct = "title-new-product",
}

enum ProductList {
  HeaderName = "header-name",
  HeaderPrice = "header-price",
  HeaderType = "header-type",
  EmptyListText = "empty-list-text",
}

enum EditProduct {
  NameInputPlaceholder = "name-input-placeholder",
  NameErrorText = "name-error-text",
  PriceInputPlaceholder = "price-input-placeholder",
  PriceErrorText = "price-error-text",
  SaveButtonText = "save-button-text",
  CancelButtontext = "cancel-button-text",
  RemoveProductText = "remove-product-text",
}

enum NewProduct {
  NameInputPlaceholder = "name-input-placeholder",
  NameErrorText = "name-error-text",
  PriceInputPlaceholder = "price-input-placeholder",
  PriceErrorText = "price-error-text",
  SaveButtonText = "save-button-text",
  CancelButtontext = "cancel-button-text",
}

export const tokens = {
  screens: {
    mainNavigator: MainNavigator,
    productList: ProductList,
    editProduct: EditProduct,
    newProduct: NewProduct,
  },
};
