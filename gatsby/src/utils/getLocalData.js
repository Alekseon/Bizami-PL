//wybranie odpowiedniego jezyka dla komponentów ze static query

export default function getLocalData(value, base, locale)  {
    if (!locale||!base || !value || !base[value]) {
      
      return null;
    }
    
    return base[value][locale];
  };