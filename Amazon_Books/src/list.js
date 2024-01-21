// Creating array of booklist.
const books =[
    {
    img:'./image/atomichabits.jpg',
    title :"Atomic-Habits",
    author:"James Clear",
    /* A uniques key is required for the react to
    identify each element in a list to work efficiently */
    id:1
},
{
    img:'./image/subconsiousMind.jpg',
    title :"The Power of Your Subconsious Mind",
    author:" Joseph Murphy",
    // This id can be the list index if and onlyif the list not change.
    // which is not that recommended.
    id:2
},
{
    img:'./image/ikigai.jpg',
    title :"Ikigai",
    author:" Francesc Miralles & Hector Garcia",
    id:3
}
];

export default books;