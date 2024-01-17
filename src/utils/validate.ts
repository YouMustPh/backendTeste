export function validateEmail(email: string) {
  return email.indexOf("@") !== -1 && email.indexOf(".") !== -1;
}
