
const ovwSel = document.getElementById('overview').value;
const bkgSel = document.getElementById('background').value;
const objSel = document.getElementById('objectives').value;

const ovw = resolveSnippet(ovwSel);
const bkg = resolveSnippet(bkgSel);
const obj = resolveObjectives(objSel);

const overviewHtml = ovw ? mdToHtml(ovw.body_md) : "";
const backgroundHtml = bkg ? mdToHtml(bkg.body_md) : "";
const objectivesHtml = obj ? `<ul>${obj.items.map(i=>`<li>${i}</li>`).join('')}</ul>` : "";
