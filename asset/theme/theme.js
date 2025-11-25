
    // Define themes and their date ranges
    const themes = [
      {
        name: "christmas",
        file: "christmas.css",
        start: "12-15",
        end: "12-31",
        themeFile: "1"
      },
      {
        name: "newyear",
        file: "winter.css", // optional: could use different styling
        start: "01-01",
        end: "01-07",
        themeFile: "2"
      },
      {
        name: "valentines",
        file: "valentines.css",
        start: "02-10",
        end: "02-15",
        themeFile: "3"
      },
      {
        name: "stPatrick",
        file: "stPatrick.css",
        start: "03-10",
        end: "03-20",
        themeFile: "4"
      },
      {
        name: "spring",
        file: "spring.css",
        start: "03-15",
        end: "05-15",
        themeFile: "5"
      },
      {
        name: "summer",
        file: "summer.css",
        start: "05-16",
        end: "08-31",
        themeFile: "6"
      },
      {
        name: "july4",
        file: "july.css",
        start: "07-01",
        end: "07-07",
        themeFile: "7"
      },
      {
        name: "rabbit",
        file: "rabbitday.css",
        start: "09-22",
        end: "09-24",
        themeFile: "8"
      },
      {
        name: "fall",
        file: "fall.css",
        start: "09-01",
        end: "10-15",
        themeFile: "9"
      },
      {
        name: "halloween",
        file: "bunnicula(halloween).css",
        start: "10-16",
        end: "10-31",
        themeFile: "10"
      },
      {
        name: "thanksgiving",
        file: "thanksgiving.css",
        start: "11-16",
        end: "11-31",
        themeFile: "11"
      }
    ];

    // Helper to check if current date falls between two MM-DD ranges
    /*THIS IS GOOD FOR SWITCH BASED ON CALLANDER*/
    
    function isDateInRange(date, start, end) {
      const year = date.getFullYear();
      const current = new Date(`${year}-${start}`);
      const cutoff = new Date(`${year}-${end}`);
      return date >= current && date <= cutoff;
    }
    
    function applySeasonalTheme() {
      
        const today = new Date();

      // Find matching theme
      const selectedTheme = themes.find(theme =>
        isDateInRange(today, theme.start, theme.end)
      );

      // Default if none matched
      const themeFile = selectedTheme ? selectedTheme.file : "spring.css";

      // Dynamically inject the theme link
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `asset/theme/${themeFile}`;
      document.head.appendChild(link);
    }
    

    /*  ///////// MINUTE BASE SWITCHING /////////////// */

    /*
    function applySeasonalTheme() {
  const now = new Date();
  const minute = now.getMinutes();

  const themeIndex = minute % themes.length;
  const selectedTheme = themes[themeIndex];

  console.log(`Minute: ${minute}, Theme: ${selectedTheme.name}`);

  // Dynamically inject the theme link
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `asset/theme/${selectedTheme.file}`;
  document.head.appendChild(link);
}


*/
 /*  ///////// MINUTE BASE SWITCHING /////////////// */

    applySeasonalTheme();