describe("First Test", function () {
  it("Ürünler saydasını aç", function () {
    // Arrange - Düzenleme
    cy.visit("/");
    const link = cy.get('[href="/products"]');
    const link2 = cy.contains("Ürünler");
    const link3 = cy.get("[data-test-id=urunler-linki]");

    // Action -

    link.click();

    // Assert
    cy.contains("Ürünler Sayfası");
    cy.url().should("include", "products");
  });

  it("Ürünleri filtrele", function () {
    // Arrange - Düzenleme
    cy.visit("/products");
    const filterInput = cy.get("[data-test-id=products-filter-input]");

    // Action -
    filterInput.type("Gilberto Johnston");

    // Assert
    cy.contains("Ürünler Sayfası");
  });

  it("Yeni Ürün Ekleme Formu", function () {
    // Arrange - Düzenleme
    cy.visit("/");
    const link = cy.get('[href="/products"]');
    link.click();
    const newProductLink = cy.get("[data-test-id=new-product-link]");
    newProductLink.click();

    // Action - işlem
    const nameInput = cy.get("#product-name");
    nameInput.type("esse");

    // Assert - doğrulama
    cy.contains("Ürün ismi en az 6 karakter olmalıdır.");
  });
});
