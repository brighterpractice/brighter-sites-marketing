# Website Intelligence integration

This site is prepared for Brighter Sites Website Intelligence without sharing an analytics identity with another site.

## Build-time configuration

Set `PUBLIC_BS_ANALYTICS_SITE_KEY` to the unique `bs_live_…` key assigned to this property. If the value is missing or invalid, the analytics script is not loaded.

The collector defaults to:

`https://analytics.brightersites.app/api/analytics/events`

For intentional testing only, it can be overridden with `PUBLIC_BS_ANALYTICS_COLLECTOR`.

## Privacy boundary

The browser tracker sends only the supported privacy-minimized event fields. It does not send form contents, query strings, full outbound URLs, names, email addresses, stored IP addresses, or cross-site persistent visitor identifiers. External-link events include only the destination hostname.
