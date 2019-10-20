Feature: Display homepage
  As an internet User
  In order to book a cycle I want to see a Diaporama and a map with available cycles

  Scenario: As a User I want to see a title, a diaporama and a map.
    When I access to url "http://localhost:3000"
    Then I should see a title "V-Liberty !"
    And I can see a Map
