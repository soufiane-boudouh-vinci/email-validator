function hasDomainDotNotLast(domain) {
  return domain.includes('.') && !domain.endsWith('.');
}

function hasNoSpaces(s) {
  return !/\s/.test(s); // refuse tout espace/whitespace n'importe où
}

function validateEmail(email) {
  if (typeof email !== 'string') return false;

  // 1) AUCUN espace (à faire en premier)
  if (!hasNoSpaces(email)) return false;

  // 2) présence d'un '@'
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return false;

  // 3) contrôle du domaine: contient un '.' et ne se termine pas par '.'
  const domain = email.slice(atIndex + 1);
  if (!hasDomainDotNotLast(domain)) return false;

  // (point 7 viendra ensuite: parties non vides avant/après '@')
  return true;
}

module.exports = validateEmail;
