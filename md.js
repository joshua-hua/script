/*

麻豆短视频

QuanX:

[rewrite_local]
#麻豆短视频 by:Luke
^https:\/\/mda\..+\.site\/api\/(auth\/login|mine\/myHome) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/madou.js

[MitM]
mda.*.site

*/


let obj = JSON.parse($response.body);
obj.msg.user.vipLevel = "shallowCard";
obj.msg.user.vipExpire = 9876543210000;
obj.msg.user.name = "可乐";

$done({body: JSON.stringify(obj)});
