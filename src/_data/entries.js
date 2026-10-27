const fs = require("fs");
const path = require("path");

module.exports = function () {
  const base = path.join(__dirname, "../../content");
  const out = [];
  for (const sub of ["payroll", "merchant"]) {
    const dir = path.join(base, sub);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).sort()) {
      if (!f.endsWith(".json")) continue;
      const d = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      out.push(d);
    }
  }
  return out;
};
