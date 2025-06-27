"use strict";
var dias;
(function (dias) {
    dias[dias["domi"] = 1] = "domi";
    dias[dias["seg"] = 2] = "seg";
    dias[dias["ter"] = 300] = "ter";
    dias[dias["quar"] = 4] = "quar";
    dias[dias["quin"] = 5] = "quin";
})(dias || (dias = {}));
console.log(dias.domi);
console.log(dias[300]);
