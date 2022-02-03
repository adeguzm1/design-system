# Statewide header changelog


## 1.0.13
* Changed ca.gov logo dimensions to 33px by 24px to make it consistent with statewide-footer's icon.

## 1.0.12
* Made cagov logo linked to ca.gov website.
* Added aria-hidden=”true” attribute to the ca.gov svg icon, so it is hidden from assistive technologies.

## 1.0.11
* Linted and formatted code per root eslint/prettier settings.
* Added unit test.

## 1.0.10
* Updated statewide header container's left and right padding to 16px.

## 1.0.9
* Removed sticky header feature until it's fully developed. Decrease spacing between CA.gov icon and tagline to 8px.

## 1.0.8
* Added script and styles that toggles official header display on scroll. 

## 1.0.7
* Making sure that CA.gov logo are having cagov colors, not the colors of the department/agency. And removed link form CA.gov logo because people might click the CA.gov logo thinking they are going to the homepage 

## 1.0.6
* Renamed .ofiicial-logo to .official-logo. Should help prevent naming conflicts within existing markup.

## 1.0.5
* Removed -15px padding left from the .official-header selector since we we don't need that padding anymore because we removed header-container with its padding properties from the base css.
