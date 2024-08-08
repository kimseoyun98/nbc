var user = { name: "john", age: 20 };
var getAged = function (user, passedTime) {
  var NewUser = {};
  for (var prop in user) {
    NewUser[prop] = user[prop];
    NewUser.age += passedTime;
    return NewUser;
  }
};

var agedUser = getAged(user, 6);
var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log(
      "Passed! If you become older, you will be different from you in the past!"
    );
  } else {
    console.log("Failed! User same with past one");
  }
};
agedUserMustBeDifferentFromUser(user, agedUser);
