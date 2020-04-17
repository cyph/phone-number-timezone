const {timezones} = require('libphonenumber-geo-carrier');
const {parsePhoneNumberFromString} = require('libphonenumber-js');
const {getLocalInfo} = require('phone-number-to-timezone');

module.exports = {
	phoneNumberTimezone: async phoneNumber => {
		let usTimeZone;
		try {
			usTimeZone = getLocalInfo(phoneNumber, {zone_display: 'name'})
				.time.zone.split('/')
				.slice(-1)[0];
		}
		catch (_) {}

		try {
			return usTimeZone === 'EST' || usTimeZone === 'EDT' ?
				'America/New_York' :
			usTimeZone === 'CST' || usTimeZone === 'CDT' ?
				'America/Chicago' :
			usTimeZone === 'MST' || usTimeZone === 'MDT' ?
				'America/Denver' :
			usTimeZone === 'PST' || usTimeZone === 'PDT' ?
				'America/Los_Angeles' :
			usTimeZone === 'AKST' || usTimeZone === 'AKDT' ?
				'America/Anchorage' :
			usTimeZone === 'HAST' || usTimeZone === 'HADT' ?
				'Pacific/Honolulu' :
				(await timezones(parsePhoneNumberFromString(phoneNumber)))[0];
		}
		catch (_) {}
	}
};
