import userModel from './user-model.js';
export const findUserById = (uid) => userModel.findById(uid);
export const findUserByUsername = (username) => userModel.findOne({ username });
export const createUser = (user) => userModel.create(user);
export const deleteUser = (uid) => userModel.deleteOne({ _id: uid });
export const updateUser = (uid, user) => userModel.updateOne({ _id: uid }, { $set: user });
export const findUserByCredentials = (username, password) => userModel.findOne({ username, password });
export const findAllUsers = () => userModel.find({});
export const findUserOnFirstname = (fname) => userModel.findOne({firstname : fname});
export const findUserOnLastname = (lname) => userModel.findOne({lastname : lname});
// main favoriting functionality with username
export const addFavorite = (uid, mid) => userModel.updateOne({ username: uid }, { $push: { watchList: mid } });
export const deleteFavorite = (uid, mid) => userModel.updateOne({ username: uid }, { $pull: { watchList: mid } });
export const deleteUserFollowers = (uid, mid) => userModel.updateOne({username : uid}, {$pull : {followingList : mid}});
export const deleteCurrentUserFollowing = (uid, mid) => userModel.updateOne({username : uid}, {$pull : {followerList : mid}});
export const addUserFollowers = (uid, mid) => userModel.updateOne({ username: uid }, { $push: { followingList: mid } });
export const addCurrentUserFollowing = (uid, mid) => userModel.updateOne({ username: uid }, { $push: { followerList: mid } });