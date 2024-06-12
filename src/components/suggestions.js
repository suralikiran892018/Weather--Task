const getSuggestions = (weather, userGroup) => {
    const suggestions = {
      farmer: {
        rain: "Consider protecting your crops from heavy rain.",
        clear: "Good day for planting or harvesting.",
        cloudy: "Ensure irrigation as sunlight might be less.",
        default: "Monitor weather conditions for optimal farming activities."
      },
      eventPlanner: {
        rain: "Plan indoor events to avoid disruption due to rain.",
        clear: "Perfect weather for outdoor events.",
        cloudy: "Consider a backup plan in case of rain.",
        default: "Check weather updates regularly for smooth event planning."
      },
      traveler: {
        rain: "Carry an umbrella and waterproof gear.",
        clear: "Great weather for sightseeing and outdoor activities.",
        cloudy: "Pack accordingly as it might rain.",
        default: "Keep an eye on weather forecasts to plan your trip better."
      }
    };
  
    const weatherCondition = weather.main.toLowerCase();
    const userSuggestions = suggestions[userGroup];
    return userSuggestions[weatherCondition] || userSuggestions.default;
  };
  