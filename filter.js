// Saringlah data berikut agar outputnya menjadi hanya orang-orang di atas 20 tahun dan yang bekerja di bagian admin.

// const employee = [
//   { id: 1, name: 'Udin', age: 12, div:'admin' },
//   { id: 2, name: 'Wati', age: 51, div:'engineering' },
//   { id: 3, name: 'Budi', age: 34, div:'admin'},
//   { id: 4, name: 'Agus', age: 16, div:'marketing' },
//   { id: 5, name: 'Sari', age: 19, div:'engineering' },
//   { id: 6, name: 'Ririn', age: 21, div:'admin' },
// ]

// Contoh output

// [
//   { id: 1, name: 'Budi', age: 51, div:'admin' },
//   { id: 4, name: 'Ririn', age: 21, div:'admin' },
// ]

const employee = [
    { id: 1, name: 'Udin', age: 12, div:'admin' },
    { id: 2, name: 'Wati', age: 51, div:'engineering' },
    { id: 3, name: 'Budi', age: 34, div:'admin'},
    { id: 4, name: 'Agus', age: 16, div:'marketing' },
    { id: 5, name: 'Sari', age: 19, div:'engineering' },
    { id: 6, name: 'Ririn', age: 21, div:'admin' },
  ]

let emp= employee.filter(function (emp){return emp.age >20 && emp.div==='admin'});
console.log(emp);

