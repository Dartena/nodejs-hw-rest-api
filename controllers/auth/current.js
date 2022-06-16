const currentUser = async (req, res) => {
  const { email } = req.user;
  res.json({ email });
};

module.exports = currentUser;
