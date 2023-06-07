const Validation = (form) => {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;

  // Modal Form
  if (!form.firstName) {
    errors.firstName = "First Name is Required!";
  } else if (form.firstName.length < 3) {
    errors.firstName = "Can't be less than 3 character";
  }

  if (!form.surname) {
    errors.surname = "Surname is Required!";
  } else if (form.surname.length < 3) {
    errors.surname = "Can't be less than 3 character";
  }

  if (!form.phoneNumber) {
    errors.phoneNumber = "Phone Number is Required!";
  }

  if (!form.arrivalDate) {
    errors.arrivalDate = "Arrival Date is Required!";
  }
  if (!form.numberOfDays) {
    errors.numberOfDays = "Number of Days is Required!";
  }

  if (form.email === "") {
    errors.email = "Email is Required!";
  } else if (!email_pattern.test(form.email)) {
    errors.email = "Email didn't match";
  }

  return errors;
};

export default Validation;
