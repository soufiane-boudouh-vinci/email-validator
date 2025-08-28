function hasDomainDotNotLast(domain) {
  return domain.includes('.') && !domain.endsWith('.');
}
function hasNoSpaces(s) { return !/\s/.test(s); }

function validateEmail(email) {
  if (typeof email !== 'string') return false;
  if (!hasNoSpaces(email)) return false;

  const atIndex = email.indexOf('@');
  if (atIndex === -1) return false;

  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (local.length === 0 || domain.length === 0) return false;

  if (!hasDomainDotNotLast(domain)) return false;

  return true;
}
module.exports = validateEmail;
