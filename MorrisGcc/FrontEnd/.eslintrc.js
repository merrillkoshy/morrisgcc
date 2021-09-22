export const env = {
	browser: true,
	amd: true,
	node: true,
	jest: true,
};
export const plugins = ["jest"];
export const rules = {
	"array-bracket-spacing": ["error", "always"],
	"block-spacing": ["error"],
	camelcase: ["error", { allow: ["(_[0-9]+)+$"] }],
	"comma-dangle": ["error", "always-multiline"],
	"comma-spacing": ["error", { before: false, after: true }],
	curly: ["error", "all"],
	"eol-last": ["error", "unix"],
	"no-extra-parens": ["warn", "all", { conditionalAssign: false }],
	"no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1, maxEOF: 1 }],
	quotes: ["error", "single", "avoid-escape"],
};
export const overrides = [
	{
		files: ["**/*.js"],
		extends: ["eslint:recommended"],
		rules: {
			"brace-style": [
				"error",
				"1tbs",
				{
					allowSingleLine: true,
				},
			],

			// 2 space indent, no tabs
			indent: ["error", 2],
		},
	},
	{
		files: ["**/*.ts"],
		parser: "@typescript-eslint/parser",
		extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
		parserOptions: {
			ecmaVersion: 2018,
			sourceType: "module",
		},
		rules: {
			// Brace Style (one true brace style, with single line allowed)
			"brace-style": "off",
			"@typescript-eslint/brace-style": [
				"error",
				"1tbs",
				{
					allowSingleLine: true,
				},
			],

			// 2 space indent, no tabs
			indent: "off",
			"@typescript-eslint/indent": ["error", 2],

			// I really LOVE turning off the misguided and poor tradition
			// of enforcing camelCase without suffixes. Even with camelCase
			// you need to disambiguate certain functions that represent
			// variations based on version.
			//
			// For example: "version 3.2" (camelCaseFunction3_2) vs
			// "version 32" (camelCaseFunction32); both would be the same
			// using camelCase and there would be no way to disambiguate
			// without great verbosity or difficulty.  We still want to
			// disallow "non_camelCase3_2" and this rule does that as well.
			camelcase: "off",
			"@typescript-eslint/camelcase": ["error", { allow: ["(_[0-9]+)+$"] }],

			// turn off interface name prefix rule
			"@typescript-eslint/interface-name-prefix": "off",

			// quotes - enforced as single where used to avoid escaping
			quotes: "off",
			"@typescript-eslint/quotes": ["error", "single", "avoid-escape"],

			// warn but allow for extra parentheses
			"no-extra-parens": "off",
			"@typescript-eslint/no-extra-parens": [
				"warn",
				"all",
				{ conditionalAssign: false },
			],

			// stylistically it is not all that bad to be verbose, unnecessary != wrong
			"@typescript-eslint/no-inferrable-types": "off",

			// non null assertion should be disallowed, not just a warning
			"@typescript-eslint/no-non-null-assertion": "error",
		},
	},
];
