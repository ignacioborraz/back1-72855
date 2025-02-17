import usersManager from "../data/users.mongo.js";

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const one = await usersManager.create(data);
    return res.status(201).json({
      method: req.method,
      url: req.url,
      response: one,
    });
  } catch (error) {
    next(error);
  }
};
const read = async (req, res, next) => {
  try {
    const filter = req.query;
    const all = await usersManager.read(filter);
    if (all.length > 0) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: all,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const readById = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const one = await usersManager.readById(uid);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const updateById = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const data = req.body;
    const one = await usersManager.updateById(uid, data);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};
const destroyById = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const one = await usersManager.destroyById(uid);
    if (one) {
      return res.status(200).json({
        method: req.method,
        url: req.url,
        response: one,
      });
    }
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  } catch (error) {
    next(error);
  }
};

export { create, read, readById, updateById, destroyById };
