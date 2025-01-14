---
layout: design-consult
title: apps.ocfo.gsa.gov
type: production
collection: apps_ocfo_gsa
css: 
---
<!-- markdownlint-disable MD033 -->
<!--<!DOCTYPE html>
 saved from url=(0036)https://apps.ocfo.gsa.gov/?warning=0 -->
<html lang="en-us" class="">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>IC Applications</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link
      rel="icon"
      type="image/x-icon"
      href="../../assets/design-consults/apps_ocfo_gsa/gsastarmarktransparent.png"
    />

    <meta
      name="keywords"
      content="GSA, General Service Administration, payroll, vendor payment, leave transfer, FEDPAY"
    />
    <meta
      name="description"
      content="Provides links to various systems supported
    by the Payroll and Financial Management IT Services Divisions including
    ePayroll, FEDPAY, Vendor Payment Portal, and the Voluntary Leave Transfer
    Program."
    />
    <meta name="viewport" content="width=device-width" />

    <!-- Analytics start-->
    <script
      async=""
      src="../../assets/design-consults/apps_ocfo_gsa/analytics.js"
    ></script>
    <script type="text/javascript">
      var form_host = window.location.host;
      if (form_host.indexOf("apps.ocfo.gsa.gov") == 0) {
        var metatag = document.createElement("meta");
        metatag.id = "gsv";
        metatag.name = "google-site-verification";
        metatag.content = "DP9wUZj5bsrKfUDPgFVudlP2YTlL-s5D3dItygqv_74";
        document.getElementsByTagName["head"](0).appendChild(metatag);
        var scripttag = document.createElement("script");
        scripttag.async = true;
        scripttag.type = "text/javascript";
        scripttag.src =
          "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=GSA";
        scripttag.id = "_fed_an_ua_tag";
        document.getElementsByTagName["head"](0).appendChild(scripttag);
      }
    </script>
    <meta
      id="gsv"
      name="google-site-verification"
      content="DP9wUZj5bsrKfUDPgFVudlP2YTlL-s5D3dItygqv_74"
    />
    <script
      async=""
      type="text/javascript"
      src="../../assets/design-consults/apps_ocfo_gsa/Universal-Federated-Analytics-Min.js"
      id="_fed_an_ua_tag"
    ></script>
    <!-- Analytics end-->

    <script src="../../assets/design-consults/apps_ocfo_gsa/uswds-init.min.js"></script>
    <link
      rel="stylesheet"
      href="../../assets/design-consults/apps_ocfo_gsa/uswds.min.css"
    />

    <!--  put scripts here -->
    <script
      language="JavaScript"
      type="text/javascript"
      src="../../assets/design-consults/apps_ocfo_gsa/r6_gsa_dialog2.js"
    ></script>

    <script language="Javascript">
      var form_host = window.location.host;
      var view_ref = "https://" + form_host;
      var view_ref2 = "http://" + form_host;
      var app_url;
      var fed_app_ven_url;

      if (form_host.indexOf("apps.ocfo.gsa.gov") == 0) {
        app_url = "https://vltp.gsa.gov";
        fed_app_ven_url = "https://fedpay.gsa.gov";
        fed_app_gov_url = "https://fmitservices.gsa.gov/fedpay";
        oth_app_url = "https://ears.ocfo.gsa.gov/ears/";
        oth_app_url2 = "https://boxi.secure.gsa.gov/BOE/BI";
        oth_app_url3 = "https://financeweb.gsa.gov/vendorpayment/";
      } else if (form_host.indexOf("test-apps.ocfo.gsa.gov") == 0) {
        app_url = "https://test-vltpauth.gsa.gov/";
        fed_app_ven_url = view_ref2 + "/fedpayven";
        fed_app_gov_url = "https://test-fmitservices.gsa.gov/fedpay";
        oth_app_url = view_ref + "/ears/";
        oth_app_url2 = "https://test-boxi.secure.gsa.gov/BOE/BI";
        oth_app_url3 = "https://dev-financeweb.gsa.gov/vendorpayment/";
      } else {
        app_url = "https://dev-vltpauth.gsa.gov/";
        fed_app_ven_url = view_ref2 + "/fedpayven";
        fed_app_gov_url = "https://dev-fmitservices.gsa.gov/fedpay";
        oth_app_url = view_ref + "/ears/";
        oth_app_url2 = "https://dev-boxi.secure.gsa.gov/BOE/BI";
        oth_app_url3 = "https://dev-financeweb.gsa.gov/vendorpayment/";
      }
    </script>
  </head>
  <body>
    <script src="../../assets/design-consults/apps_ocfo_gsa/uswds.min.js"></script>
    <a
      class="usa-skipnav"
      href="https://apps.ocfo.gsa.gov/?warning=0#main-content"
      >Skip to main content</a
    >
    <section class="usa-banner" aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img
                class="usa-banner__header-flag"
                src="../../assets/design-consults/apps_ocfo_gsa/us_flag_small.png"
                alt="U.S. flag"
              />
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">
                An official website of the United States government
              </p>
              <p class="usa-banner__header-action" aria-hidden="true">
                Here’s how you know
              </p>
            </div>
            <button
              class="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner-default"
            >
              <span class="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
        <div
          class="usa-banner__content usa-accordion__content"
          id="gov-banner-default"
          hidden=""
        >
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../../assets/design-consults/apps_ocfo_gsa/icon-dot-gov.svg"
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
                src="../../assets/design-consults/apps_ocfo_gsa/icon-https.svg"
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
                      aria-labelledby="banner-lock-title-default banner-lock-description-default"
                      focusable="false"
                    >
                      <title id="banner-lock-title-default">Lock</title>
                      <desc id="banner-lock-description-default">
                        A locked padlock
                      </desc>
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                      ></path>
                    </svg>
                  </span>
                  ) or <strong>https://</strong> means you’ve safely connected
                  to the .gov website. Share sensitive information only on
                  official, secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="grid-container">
      <div class="grid-row">
        <div class="padding-top-2">
          <span role="heading" aria-level="1" class="usa-logo" id="banner"
            ><img
              width="56"
              id="gsa_logo"
              src="../../assets/design-consults/apps_ocfo_gsa/gsastarmarktransparent.png"
              alt="GSA Logo"
            /><b> IC Applications</b></span
          >
        </div>
      </div>

      <div class="usa-prose usa-prose-content" id="main_feature">
        <div>
          <main id="main-content" class="main-content">
            <p>
              This portal provides links to various systems supported by the
              Payroll and Financial Management IT Services Divisions.
            </p>

            <p>
              Click on the individual sections below for the link and brief
              description of each application. Click on the application name
              link to redirect your current web session to that site. If you
              wish to open the application site in a new window or tab and keep
              this portal site open, then click on icon
              <svg
                class="usa-icon"
                aria-hidden="true"
                focusable="false"
                role="img"
              >
                <use
                  xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                ></use>
              </svg>
              next to the application name link.
            </p>
          </main>
        </div>
      </div>
      <!-- END id="main_feature" -->

      <div class="usa-accordion usa-accordion--bordered">
        <!-- Use the accurate heading level to maintain the document outline -->
        <div role="heading" aria-level="2" class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded="true"
            aria-controls="b-a1"
          >
            ePayroll
          </button>
        </div>
        <div id="b-a1" class="usa-accordion__content usa-prose">
          <div>
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=view_ref2+&#39;/par/&#39;"
                >PAR - Payroll Accounting and Reporting</a
              >
              <a
                class="usa-link"
                title="PAR - Payroll Accounting and Reporting"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(view_ref2+&#39;/par/&#39;,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              <!-- Prod = "https://apps.ocfo.gsa.gov/par/" -->
              Provides payroll functionality for an employee's entire service
              life. From the initial hire up through separation including final
              payment and submission of retirement records to the Office of
              Personnel Management.
            </div>
            <br />
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=view_ref+&#39;/parrpt/&#39;"
                >PAR Web Reports</a
              >
              <a
                class="usa-link"
                title="PAR Web Reports"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(view_ref+&#39;/parrpt/&#39;,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              <!-- Prod = "https://apps.ocfo.gsa.gov/parrpt/" -->

              Provides access to payroll (PAR) data via online reports.
            </div>
            <br />
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=app_url"
                >VLTP - Voluntary Leave Transfer Program</a
              >
              <a
                class="usa-link"
                title="VLTP - Voluntary Leave Transfer Program"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(app_url,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
              <!-- Prod = "https://vltp.gsa.gov/"  -->
            </div>
            <div>
              Provides a method to process leave donations to other Government
              employees or Disaster Reliefs efforts.
            </div>
            <br />
          </div>
          <div class="usa-footer__primary-section">
            <div class="grid-row footer-contact-links">
              <div class="tablet:grid-col">
                <div class="usa-media-block">
                  <div
                    class="usa-media-block__img circle-5 bg-accent-cool display-flex flex-row flex-align-center flex-justify-center text-white"
                  >
                    <svg
                      class="usa-icon usa-icon--size-3"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                    >
                      <use
                        xlink:href="assets/uswds-2.13.1/img/sprite.svg#support"
                      ></use>
                    </svg>
                  </div>
                  <span class="usa-media-block__body"
                    ><b>ePayroll Help Desk</b><br />
                    <a href="mailto:kc-payroll.finance@gsa.gov">
                      kc-payroll.finance@gsa.gov
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Use the accurate heading level to maintain the document outline -->
        <div role="heading" aria-level="2" class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="b-a2"
          >
            FM Apps
          </button>
        </div>
        <div id="b-a2" class="usa-accordion__content usa-prose" hidden="">
          <div>
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=fed_app_gov_url"
                >FEDPAY for Government Users</a
              >
              <a
                class="usa-link"
                title="FEDPAY for Government Users"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(fed_app_gov_url,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              Provides an automated method for electronically receiving and
              processing Federal Supply Service purchase orders.
            </div>
            <br />
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=fed_app_ven_url"
                >FEDPAY for Vendors</a
              >
              <a
                class="usa-link"
                title="FEDPAY for Vendors"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(fed_app_ven_url,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              Designed to allow Federal Supply Service (FSS) contractors to
              submit invoices quickly and efficiently through the Internet.
            </div>
          </div>
          <!-- end 'no name' -->
        </div>

        <!-- Use the accurate heading level to maintain the document outline -->
        <div role="heading" aria-level="2" class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="b-a3"
          >
            Other
          </button>
        </div>
        <div id="b-a3" class="usa-accordion__content usa-prose" hidden="">
          <div>
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=oth_app_url2"
                >Business Object Enterprise Reporting</a
              >
              <a
                class="usa-link"
                title="Business Object Enterprise Reporting"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(oth_app_url2,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
              <!-- Prod = https://boxi.secure.gsa.gov/BOE/BI -->
            </div>
            <div>
              Provide a tool to allow a user to access a wide variety of data
              and reports.
            </div>
            <br />
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=oth_app_url"
                >EARS - Enterprise Access Request System
              </a>
              <!-- Prod = https://boxi.secure.gsa.gov/BOE/BI -->
              <a
                class="usa-link"
                title="EARS - Enterprise Access Request System"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(oth_app_url,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              Provides a web-based interface for processing electronic access
              requests for specific GSA systems and applications.
            </div>
            <br />
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=view_ref+&#39;/esc&#39;"
                >Rational Portal
              </a>
              <a
                class="usa-link"
                title="Rational Portal"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(view_ref+&#39;/esc&#39;,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              Provides information for, and a portal to, Rational products.
            </div>
            <br />
            <div>
              <a
                class="usa-link"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.location=oth_app_url3"
                >Vendor Payment Portal</a
              >
              <!-- Prod = https://financeweb.gsa.gov/vendorpayment/ -->
              <a
                class="usa-link"
                title="Vendor Payment Portal"
                href="https://apps.ocfo.gsa.gov/?warning=0#"
                onclick="window.open(oth_app_url3,&#39;_blank&#39;)"
              >
                <svg
                  class="usa-icon"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <use
                    xlink:href="assets/uswds-2.13.1/img/sprite.svg#launch"
                  ></use>
                </svg>
              </a>
            </div>
            <div>
              Provide invoice processing, payment and related information to
              commercial businesses who have a contract with the GSA.
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />

    <footer class="usa-footer usa-footer--slim">
      <!--
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  -->
      <div class="usa-footer__primary-section">
        <div class="usa-footer__primary-container grid-row">
          <address class="usa-footer__address">
            <div class="grid-row grid-gap">
              <div class="grid-col-12">
                <div class="usa-footer__contact-info">
                  <div class="usa-footer__contact-heading">
                    <b>Business Apps Help Desk</b>
                  </div>
                </div>
              </div>
              <div class="grid-col-auto">
                <div class="usa-footer__contact-info">
                  <a href="tel:1-866-450-6588"> (866) 450-6588 </a>
                </div>
              </div>
              <div class="grid-col-auto">
                <div class="usa-footer__contact-info">
                  <a href="mailto:BusinessApps@gsa.gov">
                    BusinessApps@gsa.gov
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>
    </footer>

    <div class="usa-identifier">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier"
      >
        <div class="usa-identifier__container">
          <div class="usa-identifier__logos">
            <a href="https://www.gsa.gov/" class="usa-identifier__logo">
              <img
                class="usa-identifier__logo-img"
                src="../../assets/design-consults/apps_ocfo_gsa/gsastarmarktransparent.png"
                alt="U.S. General Services Administration Logo"
                title="U.S. General Services Administration Logo"
                role="img"
              />
            </a>
          </div>
          <div class="usa-identifier__identity" aria-label="Agency description">
            <p class="usa-identifier__identity-domain">apps.ocfo.gsa.gov</p>
            <p class="usa-identifier__identity-disclaimer">
              An official website of the
              <a href="https://www.gsa.gov/"
                >U.S. General Services Administration</a
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
                >About GSA</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://insite.gsa.gov/services-and-offices/staff-offices/office-of-gsa-it/gsa-it-organizations/office-of-corporate-it-services-ic"
                class="usa-identifier__required-link usa-link"
                >Office of Corporate IT Services</a
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
                href="https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002"
                class="usa-identifier__required-link usa-link"
                >No FEAR Act data</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsaig.gov/"
                class="usa-identifier__required-link usa-link"
                >Office of the Inspector General</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/reference/reports/budget-performance"
                class="usa-identifier__required-link usa-link"
                >Performance reports</a
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
  </body>
</html>
