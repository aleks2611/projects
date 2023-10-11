export function fetchRestorants() {
  return new Promise(function (resolve, reject) {
    resolve([
      {
        id: 0,
        name: "Mozzart",
        city: "Kragujevac",
        street: "BB",
        phone: "0123",
      },
    ]);
  });
}

export function fetchRestorantById(id) {
  return Promise(function (resolve, reject) {
    resolve({ id: 0, restorantName: "Mozzart" });
  });
}

export function fetchRestorantByMals(id) {
  return Promise(function (resolve, reject) {
    resolve({ id: 0, restorantName: "Mozzart" });
  });
}
