Feature: Manage DemoBlaseTestSteps

Background: 
    Given I visit the Product Store DemoBlaze homepage

Scenario: The featured items carousel are diferent
    When I search the carousel image
    And I click on the carousel image control next icon 
    Then The new carousel image should be diferent from the last one

Scenario: The featured items carousel are at least 3
    When I search the carousel image
    Then The object carousel image should have at least 3 elements

Scenario: The featured item is in the fixture
    When I search the carousel image
    Then The object carousel image should be in the fixture carouselImages atribute