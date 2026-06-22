// المرحلة الأولى: Engagement

const users = [
  { name: "أحمد", opens: 25 },
  { name: "سارة", opens: 18 },
  { name: "خالد", opens: 5 },
  { name: "ريم", opens: 22 },
  { name: "ليث", opens: 3 }
];

// الأكثر تفاعلاً
const mostEngaged = users.reduce((max, user) =>
  user.opens > max.opens ? user : max
);

// الأقل تفاعلاً
const leastEngaged = users.reduce((min, user) =>
  user.opens < min.opens ? user : min
);

// أكثر من 15 مرة
const activeUsers = users.filter(user => user.opens > 15);

console.log("الأكثر تفاعلاً:", mostEngaged.name);
console.log("الأقل تفاعلاً:", leastEngaged.name);
console.log(
  "استخدموا التطبيق أكثر من 15 مرة:",
  activeUsers.map(user => user.name)
);

// المرحلة الثانية: Stickiness

const dailyUsers = [
  { name: "أحمد", daily: true },
  { name: "سارة", daily: true },
  { name: "خالد", daily: false },
  { name: "ريم", daily: true },
  { name: "ليث", daily: false }
];

const returnedUsers = dailyUsers.filter(user => user.daily).length;
const notReturnedUsers = dailyUsers.filter(user => !user.daily).length;

console.log("عادوا يومياً:", returnedUsers);
console.log("لم يعودوا يومياً:", notReturnedUsers);

// المرحلة الثالثة: Churn Rate

const currentUsers = [
  { name: "أحمد", active: true },
  { name: "سارة", active: true },
  { name: "خالد", active: false },
  { name: "ريم", active: true },
  { name: "ليث", active: false }
];

const activeCount = currentUsers.filter(user => user.active).length;
const churnedCount = currentUsers.filter(user => !user.active).length;

console.log("ما زالوا يستخدمون التطبيق:", activeCount);
console.log("توقفوا عن الاستخدام:", churnedCount);

// المرحلة الرابعة: Grouping

const cameraUsers = [
  { name: "أحمد", type: "أمامية فقط" },
  { name: "سارة", type: "أمامية وخلفية" },
  { name: "خالد", type: "أمامية فقط" },
  { name: "ريم", type: "أمامية وخلفية" },
  { name: "ليث", type: "4K" },
  { name: "محمد", type: "أمامية وخلفية" },
  { name: "نور", type: "4K" },
  { name: "علي", type: "أمامية فقط" }
];

const grouped = {};

cameraUsers.forEach(user => {
  grouped[user.type] = (grouped[user.type] || 0) + 1;
});

console.log(grouped);