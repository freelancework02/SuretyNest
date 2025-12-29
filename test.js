fetch("https://suretynest.com/api/auth/login", {
  method: "OPTIONS"
}).then(r => console.log("Status:", r.status)).catch(e => console.error(e));
