---
layout: design-consult
title: Contract Directory
type: proposed
collection: 
css:
---
<!-- markdownlint-disable MD033 -->
<!-- <!DOCTYPE html>
saved from url=(0048)https://contractdirectory.gov/contractdirectory/ -->
<html lang="en-us" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />

    <meta name="ROBOTS" content="INDEX, NOFOLLOW" />
    <meta
      name="Keywords"
      content="Interagency Contract Directory, Federal spending, Search Federal Procurement Data, Search Government, Search Government Contracts, FPDS, Federal Procurement Data System, Transparency in Government, Contract Spending, Government Contracts"
    />
    <meta
      name="Description"
      content="Welcome to the Interagency Contract Directory Portal"
    />
    <title>Interagency Contract Directory Portal</title>
    
    <script
      type="text/javascript"
      id="www-widgetapi-script"
      src="../../assets/design-consults/contractdirectory/www-widgetapi.js"
      async=""
    ></script>
    <script src="../../assets/design-consults/contractdirectory/player_api"></script>
    <script
      async=""
      src="../../assets/design-consults/contractdirectory/analytics.js"
    ></script>
    <script type="text/javascript">
      var currentDomain = document.domain;
      function ClearText() {
        document.getElementsByName("q").innerHTML = "";
      }
      function SubmitForm() {
        var toPage = "";
        if (document.pressed == "Search") {
          // Try some input validation here for RTC 58367
          toPage = "icd?q=" + document.getElementById("q").value;
          document.form1.action = toPage;
        } else if (document.pressed == "Advanced Search") {
          document.getElementById("as").value = "true";
          toPage = "icd?q=" + document.getElementById("q").value;
          document.form1.action = toPage;
        } else if (document.pressed == "Clear") {
          document.getElementsByName("q").innerHTML = "";
        } else if (document.pressed === undefined) {
          toPage = "icd?q=" + document.getElementById("q").value;
          document.form1.action = toPage;
        }
        //if(toPage == "") {
        //toPage="icd";
        //document.form1.action=toPage;
        //}
      }
      function ClearAS() {
        document.getElementById("as").value = "";
      }
    </script>
    <script
      language="javascript"
      id="_fed_an_ua_tag"
      src="../../assets/design-consults/contractdirectory/Universal-Federated-Analytics.1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="../../assets/css/uswds-theme.css"
      type="text/css"
    />
    <script src="../../assets/uswds/js/uswds-init.min.js"></script>
  </head>
  <body onload="ClearAS()" onunload="ClearAS()">
    <a class="usa-skipnav" href="#main-content">Skip to main content</a>
    <section class="usa-banner" aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img
                class="usa-banner__header-flag"
                src="../../assets/uswds/img/us_flag_small.png"
                alt="U.S. flag"
              />
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">
                An official website of the United States government
              </p>
              <p class="usa-banner__header-action" aria-hidden="true">
                Here's how you know
              </p>
            </div>
            <button
              class="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner"
            >
              <span class="usa-banner__button-text">Here's how you know</span>
            </button>
          </div>
        </header>
        <div class="usa-banner__content usa-accordion__content" id="gov-banner">
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../../assets/uswds/img/icon-dot-gov.svg"
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div class="usa-media-block__body">
                <p>
                  <strong> Official websites use .gov </strong>
                  <br />
                  A <strong>.gov</strong> website belongs to an official
                  government organization in the United States.
                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../../assets/uswds/img/icon-https.svg"
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div class="usa-media-block__body">
                <p>
                  <strong> Secure .gov websites use HTTPS </strong>
                  <br />
                  A <strong>lock</strong> (
                  <span class="icon-lock"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="64"
                      viewBox="0 0 52 64"
                      class="usa-banner__lock-image"
                      role="img"
                      aria-labelledby="banner-lock-title banner-lock-description"
                      focusable="false"
                    >
                      <title id="banner-lock-title">Lock</title>
                      <desc id="banner-lock-description">A locked padlock</desc>
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                      /></svg
                  ></span>
                  ) or <strong>https://</strong> means you've safely connected
                  to the .gov website. Share sensitive information only on
                  official, secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="usa-overlay"></div>
    <header class="usa-header usa-header--extended">
      <div class="usa-navbar">
        <div class="usa-logo" id="extended-logo">
          <em class="usa-logo__text">
            <a href="/" title="Interagency Contract Directory">
              Interagency Contract Directory
            </a>
          </em>
        </div>
        <button class="usa-menu-btn">Menu</button>
      </div>
      <nav aria-label="Primary navigation" class="usa-nav">
        <div class="usa-nav__inner">
          <button class="usa-nav__close">
            <img
              src="../../assets/uswds/img/usa-icons/close.svg"
              role="img"
              alt="Close"
            />
          </button>
          <ul class="usa-nav__primary usa-accordion">
            <li class="usa-nav__primary-item">
              <a href="javascript:void(0)" class="usa-nav__link">
                <span>Advanced Search</span>
              </a>
            </li>
          </ul>
          <div class="usa-nav__secondary"></div>
        </div>
      </nav>
    </header>
    <main id="main-content">
      <div class="grid-container margin-top-2">
        <div class="grid-row">
          <div class="grid-col-12">
            <div class="usa-prose">
              <h2>Search</h2>
              <form
                class="usa-search usa-search--small"
                role="search"
                name="form1"
                method="get"
                onsubmit="SubmitForm();"
              >
                <label class="usa-sr-only" for="q"
                  >Enter keyword(s) to search</label
                >
                <input
                  class="usa-input"
                  alt="Search Text"
                  title="Search Text"
                  placeholder="Enter keyword(s)"
                  type="search"
                  id="q"
                  name="q"
                />
                <button class="usa-button" type="submit">
                  
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="grid-row margin-top-205">
          <div class="grid-col-12">
            <div class="usa-prose">
              <h2>About ICD</h2>
              <p>
                The <b>Interagency Contract Directory (ICD) </b> is a central
                repository of Indefinite Delivery Vehicles (IDV) awarded by the
                Federal agencies where the IDV is available for use at both the
                intra agency and interagency levels. IDVs include
                Government-Wide Acquisition Contracts (GWAC), Multi-Agency
                Contracts, Other Indefinite Delivery Contracts (IDC), Federal
                Supply Schedules (FSS), Basic Ordering Agreements (BOA), and
                Blanket Purchase Agreements (BPA).
              </p>
            </div>
          </div>
        </div>
        <footer class="usa-footer usa-footer--big">
          <div class="grid-container usa-footer__return-to-top">
            <a href="#">Return to top</a>
          </div>
          <div class="usa-footer__primary-section">
            <div class="grid-container">
              <div class="grid-row grid-gap">
                <div class="tablet:grid-col-12">
                  <nav class="usa-footer__nav" aria-label="Footer navigation,,">
                    <div class="grid-row grid-gap-4">
                      <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                        <section
                          class="usa-footer__primary-content usa-footer__primary-content--collapsible"
                        >
                          <h4 class="usa-footer__primary-link">GWACs</h4>
                          <ul class="usa-list usa-list--unstyled">
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts-gwacs"
                                title="Streamlined Technology Acquisition Resources for Services"
                              >
                                8(a) STARS II
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts/8a-stars-iii"
                                title="Streamlined Technology Acquisition Resources for Services"
                              >
                                8(a) STARS III
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts/alliant-2-governmentwide-acquisition-contract-gwac"
                              >
                                Alliant 2
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a href="http://nitaac.nih.gov/nitaac/">
                                CIO SP3
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a href="http://nitaac.nih.gov/nitaac/">
                                CIO SP3 Small Business
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a href="http://www.sewp.nasa.gov/index.shtml">
                                SEWP 4
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/governmentwide-acquisition-contracts/vets-2-governmentwide-acquisition-contract-gwac"
                              >
                                VETS 2
                              </a>
                            </li>
                          </ul>
                        </section>
                      </div>

                      <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                        <section
                          class="usa-footer__primary-content usa-footer__primary-content--collapsible"
                        >
                          <h4 class="usa-footer__primary-link">
                            ICD/ IDIQ/ BPA
                          </h4>
                          <ul class="usa-list usa-list--unstyled">
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/buying-selling/purchasing-programs/gsa-schedule/schedule-features/blanket-purchase-agreements"
                                title="Governmentwide Schedule BPAs"
                              >
                                Governmentwide Schedule BPAs
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a href="https://nitaac.nih.gov/services/cio-cs">
                                ECS III
                              </a>
                            </li>

                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services"
                              >
                                Enterprise Infrastructure Solutions (EIS)
                              </a>
                            </li>

                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/mas-information-technology"
                              >
                                MAS Information Technology
                              </a>
                            </li>

                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.gsa.gov/technology/technology-purchasing-programs/telecommunications-and-network-services/satellite-communications-satcom-products-and-services"
                              >
                                Satellite Communications (SATCOM)
                              </a>
                            </li>
                          </ul>
                        </section>
                      </div>

                      <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                        <section
                          class="usa-footer__primary-content usa-footer__primary-content--collapsible"
                        >
                          <h4 class="usa-footer__primary-link">Other Links</h4>
                          <ul class="usa-list usa-list--unstyled">
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://contractdirectory.gov/contractdirectory/FAQs.html"
                              >
                                FAQs
                              </a>
                            </li>
                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://contractdirectory.gov/contractdirectory/ICD-Help.pdf"
                              >
                                Help
                              </a>
                            </li>

                            <li class="usa-footer__secondary-link">
                              <a
                                href="https://www.fpds.gov/fpdsng_cms/index.php/en/?option=com_content&view=article&id=21"
                              >
                                Submit Comments
                              </a>
                            </li>
                          </ul>
                        </section>
                      </div>
                      <div
                        class="usa-footer__contact-links mobile-lg:grid-col-3"
                      >
                        <h3 class="usa-footer__contact-heading">Contact Us</h3>
                        <address class="usa-footer__address">
                          <div
                            class="usa-footer__contact-info grid-row grid-gap"
                          >
                            <div class="grid-col-auto">
                              <p>
                                Hours of Operation<br />
                                Monday - Friday<br />
                                8 a.m. to 8 p.m. ET<br />
                              </p>
                            </div>
                            <div class="grid-col-auto margin-top-105">
                              <strong>US<br /></strong
                              ><a href="tel:1-866-606-8220"> 866-606-8220 </a>
                            </div>
                            <div class="grid-col-auto margin-top-105">
                              <strong>International<br /> </strong
                              ><a href="tel:1-334-206-7828">+1 334-206-7828</a>
                            </div>
                            <div class="grid-col-auto margin-top-105">
                              <strong>DSN<br /></strong
                              ><a href="tel:94-866-606-8220">94-866-606-8220</a>
                            </div>
                          </div>
                        </address>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="usa-identifier">
          <section
            class="usa-identifier__section usa-identifier__section--masthead"
            aria-label="Agency identifier,"
          >
            <div class="usa-identifier__container">
              <div class="usa-identifier__logos">
                <a href="javascript:void(0);" class="usa-identifier__logo">
                  <img
                    class="usa-identifier__logo-img"
                    src="../../assets/img/gsa_logo.png"
                    alt="US General Administration Services Starmark logo"
                    role="img"
                  />
                </a>
              </div>
              <div
                class="usa-identifier__identity"
                aria-label="Agency description"
              >
                <p class="usa-identifier__identity-domain">
                  contractdirectory.gov
                </p>
                <p class="usa-identifier__identity-disclaimer">
                  An official website of the
                  <a href="javascript:void(0);"
                    >US General Services Administration</a
                  >
                </p>
              </div>
            </div>
          </section>
          <nav
            class="usa-identifier__section usa-identifier__section--required-links"
            aria-label="Important links,"
          >
            <div class="usa-identifier__container">
              <ul class="usa-identifier__required-links-list">
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/about-us"
                    class="usa-identifier__required-link usa-link"
                    >About GSA;</a
                  >
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/website-information/accessibility-aids"
                    class="usa-identifier__required-link usa-link"
                    >Accessibility support</a
                  >
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
                    class="usa-identifier__required-link usa-link"
                    >FOIA requests</a
                  >
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/website-information/website-policies#privacy"
                    class="usa-identifier__required-link usa-link"
                    >Privacy policy</a
                  >
                </li>
              </ul>
            </div>
          </nav>
          <section
            class="usa-identifier__section usa-identifier__section--usagov"
            aria-label="U.S. government information and services,"
          >
            <div class="usa-identifier__container">
              <div class="usa-identifier__usagov-description">
                Looking for U.S. government information and services?
              </div>
              <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
            </div>
          </section>
        </div>

        <center style="font-size: 10px">
          This is a U.S. General Services Administration Federal Government
          computer system that is "FOR OFFICIAL USE ONLY." This system is
          subject to monitoring. Individuals found performing unauthorized
          activities are subject to disciplinary action including criminal
          prosecution.
        </center>
      </div>
    </main>
    <script type="text/javascript">
      document.all.form1.q.focus();
    </script>
    <script src="../../assets/uswds/js/uswds.min.js"></script>
    <!--<link
      href="../../assets/design-consults/contractdirectory/default.css"
      rel="stylesheet"
      type="text/css"
    />-->
  </body>
</html>
