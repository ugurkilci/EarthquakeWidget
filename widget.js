document.write('<style>.earthquakewidget{background:red;color:#fff;padding:5px 15px;border-radius:5px;text-decoration:none;font-size:20px;position:fixed;bottom:20px;left:20px;z-index:9999999999999999999;font-family:arial}</style>');

var language = window.navigator.language || window.navigator.userLanguage;

if (language.toLowerCase().startsWith("tr")) {
  document.write('<a href="https://bagis.ahbap.org/bagis" class="earthquakewidget" target="_blank" rel="noopener noreferrer">Turkey Earthquake Donation</a>');
} else if (language.toLowerCase().startsWith("en")) {
  document.write('<a href="https://crypto.ahbap.org/en" class="earthquakewidget" target="_blank" rel="noopener noreferrer">Turkey Earthquake Donation</a>');
} else {
  // Default location
  document.write('<a href="https://bagis.ahbap.org/bagis" class="earthquakewidget" target="_blank" rel="noopener noreferrer">Turkey Earthquake Donation</a>');
}

require("https://www.googletagmanager.com/gtag/js?id=UA-96105625-28");

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-96105625-28');
