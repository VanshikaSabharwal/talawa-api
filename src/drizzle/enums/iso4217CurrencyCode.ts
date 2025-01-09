import { z } from "zod";

/**
 * Possible variants of the currency code defined in ISO 4217 standard published by the International Organization for Standardization (ISO) which defines alpha codes and numeric codes for the representation of currencies and provides information about the relationships between individual currencies and their minor units. More information at this link: {@link https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(list_one)}.
 */
export const iso4217CurrencyCodeEnum = z.enum([
	"AED",
	"AFN",
	"ALL",
	"AMD",
	"ANG",
	"AOA",
	"ARS",
	"AUD",
	"AWG",
	"AZN",
	"BAM",
	"BBD",
	"BDT",
	"BGN",
	"BHD",
	"BIF",
	"BMD",
	"BND",
	"BOB",
	"BOV",
	"BRL",
	"BSD",
	"BTN",
	"BWP",
	"BYN",
	"BZD",
	"CAD",
	"CDF",
	"CHE",
	"CHF",
	"CHW",
	"CLF",
	"CLP",
	"CNY",
	"COP",
	"COU",
	"CRC",
	"CUP",
	"CVE",
	"CZK",
	"DJF",
	"DKK",
	"DOP",
	"DZD",
	"EGP",
	"ERN",
	"ETB",
	"EUR",
	"FJD",
	"FKP",
	"GBP",
	"GEL",
	"GHS",
	"GIP",
	"GMD",
	"GNF",
	"GTQ",
	"GYD",
	"HKD",
	"HNL",
	"HTG",
	"HUF",
	"IDR",
	"ILS",
	"INR",
	"IQD",
	"IRR",
	"ISK",
	"JMD",
	"JOD",
	"JPY",
	"KES",
	"KGS",
	"KHR",
	"KMF",
	"KPW",
	"KRW",
	"KWD",
	"KYD",
	"KZT",
	"LAK",
	"LBP",
	"LKR",
	"LRD",
	"LSL",
	"LYD",
	"MAD",
	"MDL",
	"MGA",
	"MKD",
	"MMK",
	"MNT",
	"MOP",
	"MRU",
	"MUR",
	"MVR",
	"MWK",
	"MXN",
	"MXV",
	"MYR",
	"MZN",
	"NAD",
	"NGN",
	"NIO",
	"NOK",
	"NPR",
	"NZD",
	"OMR",
	"PAB",
	"PEN",
	"PGK",
	"PHP",
	"PKR",
	"PLN",
	"PYG",
	"QAR",
	"RON",
	"RSD",
	"RUB",
	"RWF",
	"SAR",
	"SBD",
	"SCR",
	"SDG",
	"SEK",
	"SGD",
	"SHP",
	"SLE",
	"SOS",
	"SRD",
	"SSP",
	"STN",
	"SVC",
	"SYP",
	"SZL",
	"THB",
	"TJS",
	"TMT",
	"TND",
	"TOP",
	"TRY",
	"TTD",
	"TWD",
	"TZS",
	"UAH",
	"UGX",
	"USD",
	"USN",
	"UYI",
	"UYU",
	"UYW",
	"UZS",
	"VED",
	"VES",
	"VND",
	"VUV",
	"WST",
	"XAF",
	"XAG",
	"XAU",
	"XBA",
	"XBB",
	"XBC",
	"XBD",
	"XCD",
	"XDR",
	"XOF",
	"XPD",
	"XPF",
	"XPT",
	"XSU",
	"XTS",
	"XUA",
	"XXX",
	"YER",
	"ZAR",
	"ZMW",
	"ZWG",
]);