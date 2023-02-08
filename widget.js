var language = window.navigator.language || window.navigator.userLanguage;

if (language.toLowerCase().startsWith("tr")) {
  document.write('<a href="https://ahbap.org/bagisci-ol" style="background:red;color:#fff;padding:5px 20px;border-radius:5px;text-decoration:none;font-size:20px;position:fixed;bottom:20px;left:20px;z-index:9999999999999999999" target="_blank" rel="noopener noreferrer">Turkey Earthquake Donation</a>');
} else if (language.toLowerCase().startsWith("en")) {
  document.write('<a href="https://portfolio.nansen.ai/dashboard/APE-JBS8U7" style="background:red;color:#fff;padding:5px 20px;border-radius:5px;text-decoration:none;font-size:20px;position:fixed;bottom:20px;left:20px;z-index:9999999999999999999" target="_blank" rel="noopener noreferrer">Turkey Earthquake Donation</a>');
} else {
  // Default location
  document.write('<a href="https://portfolio.nansen.ai/dashboard/APE-JBS8U7" style="background:red;color:#fff;padding:5px 20px;border-radius:5px;text-decoration:none;font-size:20px;position:fixed;bottom:20px;left:20px;z-index:9999999999999999999" target="_blank" rel="noopener noreferrer">Turkey Earthquake Donation</a>');
}

require("https://www.googletagmanager.com/gtag/js?id=UA-96105625-28");

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-96105625-28');