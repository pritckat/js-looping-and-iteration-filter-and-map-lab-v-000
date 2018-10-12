// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) {
    return driver.revenue > amount;
  });
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    let same = false;

    for (const key in matcher) {
      same = driver[key] === matcher[key];
    }
    return same;
  });
}
