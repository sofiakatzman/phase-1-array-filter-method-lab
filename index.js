// find drivers based on entire string - no case match

function findMatching(drivers, stringComparison) {
    return drivers.filter(function (driver) { return driver.toLowerCase()=== stringComparison.toLowerCase() })
  }


  // find drivers using a piece of a string - no case match
  function fuzzyMatch(drivers, stringComparison) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, stringComparison.length) === stringComparison.toLowerCase() })
  }


// looks inside array and finds match 
  function matchName(drivers, stringComparison) {
    return drivers.filter(function (driver) { return driver.name === stringComparison })
  }