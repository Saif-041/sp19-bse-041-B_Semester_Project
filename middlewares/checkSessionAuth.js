//sets user variable for pug files
async function checkSessionAuth(req, res, next) {
  if (!req.session.user) {
    req.flash("danger", "Please login first.");
    return res.redirect("/login");
  }
  next();
}

module.exports = checkSessionAuth;
