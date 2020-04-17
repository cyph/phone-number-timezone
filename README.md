# phone-number-timezone

## Overview

Returns IANA timezones of phone numbers. (Node.js-only.)

## Example Usage

    const {phoneNumberTimezone} = require('phone-number-timezone');

    const timeZone = await phoneNumberTimezone('+19312974462'); // 'America/New_York'
