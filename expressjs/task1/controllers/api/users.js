global.users = [];

exports.createUser = (req, res, next) => {
  const { ...user } = req.body;

  if (!user.username || typeof user.username !== 'string' ||
      !user.password || typeof user.password !== 'string' ||
      !user.gender || typeof user.gender !== 'string' ||
      typeof user.agree !== 'boolean'
  ) {
    return res.status(400).json({
      success: false,
      error: 'Invalid data'
    });
  }

  global.users.push(user);

  res.status(201).json({
    success: true,
    user
  });
};

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    users: global.users
  });
};