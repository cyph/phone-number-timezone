declare module 'phone-number-timezone' {
	/** Returns IANA timezone (e.g. "America/New_York") of phone number. */
	const phoneNumberTimezone: (
		phoneNumber: string
	) => Promise<string | undefined>;
}
