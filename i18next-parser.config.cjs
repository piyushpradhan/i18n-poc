module.exports = {
  locales: ["en", "fr", "es"], // Add your supported locales here
  output: "src/translations/$LOCALE/$NAMESPACE.json", // Where to store translation files
  input: "src/**/*.{js,jsx,ts,tsx}", // Files from which keys are extracted
  keySeparator: false, // Use false if you don't use keys like 'common.welcome'
  namespaceSeparator: false, // Use false if you don't use namespace in keys
  useKeysAsDefaultValue: true, // Use the key as the default value for untranslated strings
  verbose: true, // Show detailed information while running
  customTokens: [
    {
      regex: /<p>(.*?)<\/p>/g, // Regex to match content within <p> tags
      replacement: "$1", // Use the content inside the <p> tags as the key
    },
  ],
};
