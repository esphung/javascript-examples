function isValidPhoneNumber(phoneNumber) {
  phoneNumber.replace('-', '');
  var phoneno = /^([+])?([0-9]{1,5})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneNumber.match(phoneno)) {
    return true;
  } else {

    return false;
  }
}

console.log(isValidPhoneNumber('+13179031693'))

console.log(isValidPhoneNumber('+144443179031693'))// good long telephone

console.log(isValidPhoneNumber('-13179031693'))

console.log(isValidPhoneNumber('+2233213179031693'))