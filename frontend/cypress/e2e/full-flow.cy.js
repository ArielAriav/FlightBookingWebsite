describe("Flight Booking App - Full Flow", () => {
  it("Visits the Home page", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Welcome to SkyBook");
    cy.contains("Let's Search a Flight");
    cy.contains("View My Bookings");
  });

  it("Searches for flights and selects one", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Let's Search a Flight").click();
    cy.url().should("include", "/search");

    cy.get("button").contains("Search Flights").click();

    cy.url().should("include", "/results");
    cy.contains("Available Flights");
    cy.get("button").contains("Select").first().click();

    cy.url().should("include", "/booking");
    cy.contains("Booking Flight");
    
  });

  it("Completes a booking", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Let's Search a Flight").click();
    cy.get("button").contains("Search Flights").click();
    cy.get("button").contains("Select").first().click();


    cy.url().should("include", "/booking");

    cy.get("input").eq(0).type("John Doe");         // Full Name
    cy.get("input").eq(1).type("1234567");          // Passport Number
    cy.get("input").eq(2).type("john@example.com"); // Email

    cy.get("button").contains("Book Flight").click();

    cy.url().should("include", "/success");
    cy.contains("Booking Confirmed!");
    cy.contains("Thank you, John Doe");
  });

  it("Views bookings by email and passport", () => {
    cy.visit("http://localhost:5173");
    cy.contains("View My Bookings").click();

    cy.url().should("include", "/view-bookings");
    cy.get("input").eq(0).type("123456"); // Passport input
    cy.get("input").eq(1).type("ariel1111@gmail.com"); // Email input

    cy.get("button").contains("View Bookings").click();

    cy.url().should("include", "/bookings-results");
    cy.contains("My Bookings");
  });
});
