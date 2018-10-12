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

function exactMatch() {

}
